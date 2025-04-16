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
    const session = await getSession();
    if (session) {
      return NextResponse.next();
    }
    // request.nextUrl.origin를 사용하여 올바른 도메인 반영
    const callbackUrl = encodeURIComponent(request.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${callbackUrl}`, request.nextUrl.origin)
    );
  }

  if (isMatch(request.nextUrl.pathname, matchersForLogIn)) {
    const session = await getSession();
    if (session) {
      return NextResponse.redirect(new URL("/dashboard", request.nextUrl.origin));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

function isMatch(pathname: string, urls: string[]) {
  return urls.some((url) => !!match(url)(pathname));
}
