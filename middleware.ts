import { getSession } from "@/serverActions/auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { match } from "path-to-regexp";

const matchersForAuth = ["/dashboard"];
const matchersForLogIn = ["/login/"];
export async function middleware(request: NextRequest) {
  // 해당 경로에서 로그인되어있지 않으면 로그인 창으로 이동
  if (isMatch(request.nextUrl.pathname, matchersForAuth)) {
    return (await getSession())
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/login", request.url));
  }

  if (isMatch(request.nextUrl.pathname, matchersForLogIn)) {
    return (await getSession())
      ? NextResponse.redirect(new URL("/", request.url))
      : NextResponse.next();
  }

  return NextResponse.next();
}

function isMatch(pathname: string, urls: string[]) {
  return urls.some((url) => !!match(url)(pathname));
}
