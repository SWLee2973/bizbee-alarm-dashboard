import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "./auth.config";
import login from "./login";

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update,
} = NextAuth({
  ...authConfig,
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
          const user = await login(params);

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
});
