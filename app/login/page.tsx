import LoginForm from "@/components/login/LoginForm";
import React from "react";

function LoginPage() {
  return (
    <main className="flex items-center justify-center flex-1 pb-32">
      <h1 className="sr-only">로그인 페이지</h1>
      <LoginForm />
    </main>
  );
}

export default LoginPage;
