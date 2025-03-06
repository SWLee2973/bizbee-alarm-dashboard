"use server";

import { auth, signIn, signOut, update } from "@/utils/auth";

export const signInWithCredentials = async (data: any) => {
  await signIn("credentials", {});
};

export { auth as getSession, update as updateSession, signOut };
