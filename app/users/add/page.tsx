import PageHeader from "@/components/ui/PageHeader";
import UserForm from "@/components/users/UserForm";
import { getSession } from "@/lib";
import React from "react";

export async function generateMetadata() {
  return {
    title: "bizbee Notice - 사용자 등록",
  };
}

async function UserAddPage() {
  const session = await getSession();
  const isSuperAdmin = session?.user.role === "SUPER_ADMIN";

  return (
    <main className="flex-1 flex flex-col gap-y-4 h-full">
      <PageHeader title="사용자 등록" />
      <UserForm />
    </main>
  );
}

export default UserAddPage;
