import { login } from "@/utils";
import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "./auth.config";

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

          return user;
        }

        return null;
      },
    }),
  ],
});
