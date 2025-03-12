import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "./auth.config";

const login = async (params: {
  corpCd: string;
  userId: string;
  password: string;
}): Promise<User> => {
  const res = await fetch(
    `http://localhost:3001/users/?userId=${params.userId}&password=${params.password}`
  );

  const user = await res.json();

  return user[0];
};

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
