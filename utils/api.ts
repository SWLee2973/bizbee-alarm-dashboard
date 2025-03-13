import { getSession } from "@/serverActions/auth";
import { IResponseError } from "@/types/api-type";

type TOptions<TBody = unknown> = Omit<RequestInit, "headers" | "body"> & {
  headers?: Record<string, string>;
  body?: TBody;
  needAuth?: boolean;
  contentType?: string;
};

class Fetch {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<TBody = unknown>(
    url: string,
    options: TOptions<TBody>
  ): Promise<undefined | null>;
  private async request<TResponse, TBody = unknown>(
    url: string,
    options: TOptions<TBody>
  ): Promise<TResponse>;
  private async request<TResponse = undefined, TBody = unknown>(
    url: string,
    options: TOptions<TBody>
  ): Promise<TResponse | null> {
    const {
      needAuth = false,
      contentType = "application/json",
      headers,
      body,
      ...rest
    } = options;

    const session = await getSession();
    const _headers = new Headers(
      Object.assign(
        {
          "Content-Type": contentType,
        },
        needAuth ? { Authorization: `Bearer ${session?.user.token}` } : {},
        headers
      )
    );

    const fetchUrl = this.baseUrl + url;

    const response = await fetch(fetchUrl, {
      ...rest,
      headers: _headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();

    if (!response.ok) {
      throw data as IResponseError;
    }

    return data as TResponse;
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

const api = new Fetch(process.env.NEXT_PUBLIC_API_URL || "");

export default api;
