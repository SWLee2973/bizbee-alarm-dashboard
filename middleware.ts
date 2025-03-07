import NextAuth from "next-auth";
import { authConfig } from "./auth/auth.config";

// import { getSession } from "@/serverActions/auth";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { match } from "path-to-regexp";

// const matchersForAuth = ["/*", "/dashboard/*"];
// const matchersForLogIn = ["/login/*"];
// export async function middleware(request: NextRequest) {
//   if (isMatch(request.nextUrl.pathname, matchersForAuth)) {
//     console.log("11 : ", 11);
//     return (await getSession())
//       ? NextResponse.next()
//       : NextResponse.redirect(new URL("/login", request.url));
//   }

//   if (isMatch(request.nextUrl.pathname, matchersForLogIn)) {
//     console.log("22 : ", 22);
//     return (await getSession())
//       ? NextResponse.redirect(new URL("/", request.url))
//       : NextResponse.next();
//   }
//   console.log("22 : ", 22);
//   return NextResponse.next();
// }

// function isMatch(pathname: string, urls: string[]) {
//   console.log("pathname : ", pathname);
//   console.log("urls : ", urls);
//   return urls.some((url) => !!match(url)(pathname));
// }

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
