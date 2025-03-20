import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    corpCd: string;
    userId: string;
    role: string;
    token: string;
    id: string;
    email?: string;
    name?: string;
  }

  interface Session extends DefaultSession {
    user: {
      corpCd: string;
      userId: string;
      role: string;
      token: string;
      id: string;
      email?: string;
      name?: string;
    } & DefaultSession["user"];
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    corpCd: string;
    userId: string;
    role: string;
    token: string;
    id: string;
  }
}
