import React from "react";
import * as Sentry from "@sentry/nextjs";
import { api } from "@/lib";
import { IUser } from "@/types";
import UserListTable from "@/components/users/UserListTable";
import PageHeader from "@/components/ui/PageHeader";

async function UsersPage() {
  const span = Sentry.startInactiveSpan({
    name: "getUsers",
  });

  const result = await api.get<IUser[]>("/user/list");
  span.end();

  return (
    <main className="flex-1 flex flex-col gap-y-4">
      <PageHeader title="사용자 관리" />
      {result.length ? (
        <UserListTable users={result} />
      ) : (
        <p className="mt-4">검색 결과가 없습니다.</p>
      )}
    </main>
  );
}

export default UsersPage;
