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
