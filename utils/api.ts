import { getSession } from "@/serverActions/auth";
import { IResponseError, IResponseWithData } from "@/types/api-type";

type Params<T = unknown> = {
  [K in keyof T]?: string | number | boolean | null | undefined;
};

type TOptions<TBody = unknown, TParams = unknown> = Omit<
  RequestInit,
  "headers" | "body"
> & {
  headers?: Record<string, string>;
  body?: TBody;
  needAuth?: boolean;
  contentType?: string;
  params?: Params<TParams>;
};

class Fetch {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<TResponse, TBody = unknown>(
    url: string,
    options: TOptions<TBody>
  ): Promise<IResponseWithData<TResponse>>;
  private async request<TBody = unknown>(
    url: string,
    options: TOptions<TBody>
  ): Promise<IResponseWithData<undefined> | null>;

  private async request<TResponse = undefined, TBody = unknown>(
    url: string,
    options: TOptions<TBody>
  ): Promise<IResponseWithData<TResponse> | null> {
    const {
      needAuth = false,
      contentType = "application/json",
      headers,
      body,
      params,
      ...rest
    } = options;

    const session = await getSession();
    // console.log("session : ", session);
    // console.log("baseUrl : ", this.baseUrl);
    const _headers = new Headers(
      Object.assign(
        {
          "Content-Type": contentType,
        },
        needAuth ? { Authorization: `Bearer ${session?.user.token}` } : {},
        headers
      )
    );

    const fetchUrl = `${this.baseUrl}${url}${
      params
        ? "?" +
          new URLSearchParams(
            Object.entries(params)
              .filter(([_, value]) => value != null)
              .map(([key, value]) => [key, String(value)])
          ).toString()
        : ""
    }`;

    const response = await fetch(fetchUrl, {
      ...rest,
      headers: _headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();

    if (!response.ok) {
      throw data as IResponseError;
    }

    return data as IResponseWithData<TResponse>;
  }

  public get<TResponse>(url: string, options?: TOptions) {
    return this.request<TResponse>(url, { method: "GET", ...options });
  }

  public post<TResponse, TBody>(url: string, options?: TOptions<TBody>) {
    return this.request<TResponse>(url, { method: "POST", ...options });
  }

  public put<TResponse, TBody>(url: string, options?: TOptions<TBody>) {
    return this.request<TResponse>(url, { method: "PUT", ...options });
  }

  public patch<TResponse, TBody>(url: string, options?: TOptions<TBody>) {
    return this.request<TResponse>(url, { method: "PATCH", ...options });
  }

  public delete<TResponse>(url: string, options?: TOptions) {
    return this.request<TResponse>(url, { method: "DELETE", ...options });
  }
}

const api = new Fetch(process.env.API_URL || "");

export default api;
