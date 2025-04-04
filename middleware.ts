import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { match } from "path-to-regexp";
import { getSession } from "./lib";

const matchersForAuth = [
  "/",
  "/dashboard",
  "/dashboard/*all",
  "/projects",
  "/projects/*all",
  "/users",
  "/users/*all",
];
const matchersForLogIn = ["/login"];
export async function middleware(request: NextRequest) {
  if (isMatch(request.nextUrl.pathname, matchersForAuth)) {
    return (await getSession())
      ? NextResponse.next()
      : NextResponse.redirect(
          new URL(`/login?callbackUrl=${request.url}`, request.url)
        );
  }

  if (isMatch(request.nextUrl.pathname, matchersForLogIn)) {
    return (await getSession())
      ? NextResponse.redirect(new URL("/dashboard", request.url))
      : NextResponse.next();
  }

  return NextResponse.next();
}

function isMatch(pathname: string, urls: string[]) {
  return urls.some((url) => !!match(url)(pathname));
}
