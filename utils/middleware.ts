import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "path-to-regexp";
import { auth } from "@/utils/auth";

const matchersForAuth = ["/dashboard/*", "/myaccount/*", "/settings/*"];
const matchersForLogIn = ["/login/*"];
export async function middleware(request: NextRequest) {
  if (isMatch(request.nextUrl.pathname, matchersForAuth)) {
    return (await auth())
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/login", request.url));
  }

  if (isMatch(request.nextUrl.pathname, matchersForLogIn)) {
    return (await auth())
      ? NextResponse.redirect(new URL("/", request.url))
      : NextResponse.next();
  }
  return NextResponse.next();
}

function isMatch(pathname: string, urls: string[]) {
  return urls.some((url) => !!match(url)(pathname));
}
