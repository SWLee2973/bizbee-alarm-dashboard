import { FetchClient } from "./fetchClient";

export const api = new FetchClient(`${process.env.NEXT_PUBLIC_API_URL}/api` || "");
