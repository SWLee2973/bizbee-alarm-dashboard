import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import login from "./login";

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update,
} = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials): Promise<User | null> => {
        const parsedCredentials = z
          .object({
            corpCd: z.string(),
            userId: z.string(),
            password: z.string().min(4),
          })
          .safeParse(credentials);
          

        if (parsedCredentials.success) {
          const params = parsedCredentials.data;
          console.log('params : ', params);
          const user = await login(params);

          if (user === null) return null;

          return {
            id: user.userId,
            corpCd: user.corpCd,
            userId: user.userId,
            role: user.role,
            token: user.token,
            name: user.userId,
            email: user.userId,
          };
        }

        return null;
      },
    }),
  ],
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
  trustHost: true,
});
