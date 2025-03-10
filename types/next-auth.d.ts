import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      userId: string;
      role: string;
      token: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    userId: string;
    role: string;
    token: string;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    accessToken: string;
  }
}
