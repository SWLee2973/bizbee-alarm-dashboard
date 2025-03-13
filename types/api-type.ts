export interface IResponse {
  status: number;
  code: string;
}

export interface IResponseError extends IResponse {
  message: string;
}

export interface IResponseWithData<T> extends IResponse {
  data: T;
}

export const isResponseError = (error: unknown): error is IResponseError => {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "code" in error &&
    "message" in error
  );
};

export interface IToken {
  token: string;
}
