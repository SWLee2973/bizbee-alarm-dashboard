"use server";

import { AuthError } from "next-auth";
import { auth, update, signIn, signOut } from "../auth";

export const signInWithCredentials = async (
  prevState: string | undefined,
  data: FormData
) => {
  try {
    await signIn("credentials", {
      corpCd: data.get("corpCd"),
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

export const signOutWithForm = async () => {
  await signOut();
};

export { auth as getSession, signOut, update as updateSession };
