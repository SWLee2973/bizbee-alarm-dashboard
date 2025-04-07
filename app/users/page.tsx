import PageHeader from "@/components/ui/PageHeader";
import UserListTable from "@/components/users/UserListTable";
import UserSearch from "@/components/users/UserSearch";
import { api } from "@/lib";
import { IUser } from "@/types";
import Link from "next/link";

interface IUserPageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export async function generateMetadata() {
  return {
    title: "bizbee Notice - 사용자 관리",
  };
}

async function UsersPage({ searchParams }: IUserPageProps) {
  const { searchText } = await searchParams;

  console.log("searchText : ", searchText);

  // if (!searchText) return <UserSearch />;

  const result = await api.get<IUser[]>(`/user/list`);
  const users = result.filter(
    (user) =>
      user.name.includes(searchText ?? "") ||
      user.userId.includes(searchText ?? "")
  );
  // console.log("users : ", users);

  return (
    <main className="flex-1 flex flex-col gap-y-4 h-full">
      <PageHeader title="사용자 관리" />
      <div className="flex justify-between gap-x-2">
        <UserSearch />
        <Link
          href="/users/add"
          className="btn btn-square bg-secondary text-secondary-content font-semibold w-fit px-2"
        >
          사용자 등록
        </Link>
      </div>
      <UserListTable users={users} />
    </main>
  );
}

export default UsersPage;
