import React, { useMemo } from "react";
import { api } from "@/lib";
import { IUser } from "@/types";
import UserListTable from "@/components/users/UserListTable";
import PageHeader from "@/components/ui/PageHeader";
import UserSearch from "@/components/users/UserSearch";
import Link from "next/link";

interface IUserPageProps {
  searchParams: Promise<Record<string, string | undefined>>;
}

async function UsersPage({ searchParams }: IUserPageProps) {
  const { searchText } = await searchParams;

  // if (!searchText) return <UserSearch />;

  const result = await api.get<IUser[]>(`/user/list`);
  const users = result.filter(
    (user) =>
      user.name.includes(searchText ?? "") ||
      user.userId.includes(searchText ?? "")
  );

  return (
    <main className="flex-1 flex flex-col gap-y-4 h-full">
      <PageHeader title="사용자 관리" />
      <div className="flex justify-between gap-x-2">
        <UserSearch />
        <Link
          href="/users/add"
          className="btn btn-secondary text-secondary-content"
        >
          사용자 등록
        </Link>
      </div>
      <UserListTable
        users={users.filter(
          (user) =>
            user.name.includes(searchText ?? "") ||
            user.userId.includes(searchText ?? "")
        )}
      />
    </main>
  );
}

export default UsersPage;
