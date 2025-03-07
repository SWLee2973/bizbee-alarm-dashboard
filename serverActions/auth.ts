"use server";

import { auth, signIn, signOut, update } from "@/utils/auth";
import { AuthError } from "next-auth";

export const signInWithCredentials = async (
  prevState: string | undefined,
  data: FormData
) => {
  try {
    await signIn("credentials", {
      userId: data.get("userId"),
      password: data.get("password"),
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "아이디나 비밀번호가 틀렸습니다.";
        default:
          return "로그인 도중 오류가 발생했습니다.";
      }
    }

    throw error;
  }
};

export { auth as getSession, update as updateSession, signOut };
