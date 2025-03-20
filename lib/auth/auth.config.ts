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
      if (user) {
        return {
          ...token,
          id: user.id,
          corpCd: user.corpCd,
          userId: user.userId,
          role: user.role,
          token: user.token,
        };
      }
      return token;
    },
    session: async ({ session, user, token }) => {
      session.user = {
        ...session.user,
        id: token.id as string,
        corpCd: token.corpCd as string,
        userId: token.userId as string,
        role: token.role as string,
        token: token.token as string,
      };

      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
