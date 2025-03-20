import { IResponseError } from "@/types";
import { getSession } from "../serverActions/auth";
import { Session } from "next-auth";

type TOptions<TBody = unknown> = Omit<RequestInit, "headers" | "body"> & {
  headers?: Record<string, string>;
  body?: TBody;
  needAuth?: boolean;
  contentType?: string;
};

async function getSessionInfo(): Promise<Session | null> {
  if (typeof window === "undefined") {
    return await getSession();
  }

  try {
    const res = await fetch("/api/session");

    if (!res.ok)
      throw new Error("클라이언트에서 세션 정보를 가져오는데 실패했습니다.");

    return await res.json();
  } catch (error) {
    console.log("error : ", error);
    return null;
  }
}

export class FetchClient {
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
      needAuth = true,
      contentType = "application/json",
      headers,
      body,
      ...rest
    } = options;

    const session = await getSessionInfo();
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
