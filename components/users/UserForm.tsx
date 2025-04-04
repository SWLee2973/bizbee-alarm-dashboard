"use client";

import Form from "next/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { UserFormType, userSchema } from "@/lib";

interface IUserForm {
  type?: "add" | "modify";
  user?: UserFormType;
}

function UserForm({ type = "add", user }: IUserForm) {
  const defaultValues: UserFormType = {
    userId: user?.userId || "",
    password: "",
    passwordConfirm: "",
    name: user?.name || "",
    role: user?.role || "",
  };

  const form = useForm<UserFormType>({
    mode: "onBlur",
    resolver: zodResolver(userSchema),
    defaultValues,
  });

  async function onSubmit(data: UserFormType) {
    console.log(data);
  }

  return (
    <div className="border-2 flex flex-1">
      {/* <Form className="flex" {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}></form>
      </Form> */}
    </div>
  );
}

export default UserForm;
