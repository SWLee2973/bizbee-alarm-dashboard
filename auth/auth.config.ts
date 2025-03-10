import { NextAuthConfig } from "next-auth";

export const authConfig = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // authorized: ({ auth, request: { nextUrl } }) => {
    //   const isLoggedIn = !!auth?.user;
    //   const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
    //   console.log("isLoggedIn : ", isLoggedIn);

    //   if (isOnDashboard) {
    //     if (isLoggedIn) return true;

    //     return false;
    //   } else if (isLoggedIn) {
    //     return Response.redirect(new URL("/dashboard", nextUrl));
    //   }

    //   return true;
    // },
    redirect: async ({ url, baseUrl }) => {
      if (url.startsWith("/")) return `${baseUrl}${url}`;

      if (url) {
        const { search, origin } = new URL(url);
        const callbackUrl = new URLSearchParams(search).get("callbackUrl");

        if (callbackUrl)
          return callbackUrl.startsWith("/")
            ? `${baseUrl}${callbackUrl}`
            : callbackUrl;

        if (origin === baseUrl) return url;
      }

      return baseUrl;
    },
    signIn: async () => {
      return true;
    },
    jwt: async ({ token, user }) => {
      if (user?.token) {
        token.accessToken = user.token;
      }

      return token;
    },
    session: async ({ session, token }) => {
      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
