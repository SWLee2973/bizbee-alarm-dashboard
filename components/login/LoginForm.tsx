"use client";

import React, { useActionState } from "react";
import UserIcon from "@/public/svg/user.svg";
import KeyIcon from "@/public/svg/key.svg";
import { signInWithCredentials } from "@/serverActions/auth";

function LoginForm() {
  // const [errorMessage, formAction, isPending] = useActionState(
  //   signInWithCredentials,
  //   undefined
  // );
  return (
    <form
      action={signInWithCredentials}
      className="card card-border border-base-300 w-md"
    >
      <div className="border-b border-base-300 border-dashed p-4 flex items-center justify-center">
        <h2 className="card-title">로그인</h2>
      </div>
      <div className="card-body gap-4">
        <label className="input input-border flex items-center gap-2 w-full">
          <UserIcon className="h-1/2 aspect-square" />
          <input
            required
            name="userId"
            type="text"
            className="grow"
            placeholder="아이디"
          />
        </label>
        <label className="input input-border flex items-center gap-2 w-full">
          <KeyIcon className="h-1/2 aspect-square" />
          <input
            required
            name="password"
            type="password"
            className="grow"
            placeholder="비밀번호"
            minLength={4}
          />
        </label>
        <button className="btn bg-primary text-primary-content">로그인</button>
      </div>
    </form>
  );
}

export default LoginForm;
