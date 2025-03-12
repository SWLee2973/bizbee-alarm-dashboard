"use client";

import React, { useActionState } from "react";
import UserIcon from "@/public/svg/user.svg";
import KeyIcon from "@/public/svg/key.svg";
import { signInWithCredentials } from "@/serverActions/auth";
import { Logo } from "../svgIcons";

function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    signInWithCredentials,
    undefined
  );
  return (
    <form action={formAction} className="card card-border border-base-300 w-md">
      <div className="border-b border-base-300 gap-x-2 border-dashed p-4 flex items-center justify-center">
        {/* <LogoIcon className="fill-primary" width="50px" height="50px" /> */}
        <Logo width="50px" height="50px" />
        <h2 className="card-title">로그인</h2>
      </div>
      <div className="card-body gap-4">
        <label className="input input-border flex items-center gap-2 w-full">
          <UserIcon className="h-1/2 aspect-square" />
          <input
            required
            name="corpCd"
            type="text"
            className="grow"
            placeholder="회사 코드"
          />
        </label>
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
        {errorMessage && <p className="text-error">{errorMessage}</p>}
        <button className="btn bg-primary text-primary-content">
          {isPending ? (
            <span className="loading loading-dots loading-md" />
          ) : (
            "로그인"
          )}
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
