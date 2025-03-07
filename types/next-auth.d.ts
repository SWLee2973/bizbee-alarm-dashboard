import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      username: string;
      role: string;
      token: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    username: string;
    role: string;
    token: string;
  }
}
