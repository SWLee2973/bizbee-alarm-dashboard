import NextAuth, { NextAuthConfig, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { redirect } from "next/navigation";
import { z } from "zod";
import { authConfig } from "./auth.config";

const login = async (params: {
  userId: string;
  password: string;
}): Promise<User> => {
  console.log("params : ", params);
  return {
    username: "admin",
    role: "ADMIN",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTczOTQzNDc5MywiaWF0IjoxNzQxMTM3NzYwfQ.y5wr6xi3rYg9GwIFkFKgcMTITjvfsugPK_a0niNdnfM",
  };
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
            userId: z.string(),
            password: z.string().min(4),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const params = parsedCredentials.data;
          const user = await login(params);

          return user;
        }

        console.log("로그인 실패");
        return null;
      },
    }),
  ],
});
