import UserIcon from "@/public/svg/user.svg";
import { getSession, signOut, signOutWithForm } from "@/serverActions/auth";
import Link from "next/link";

async function UserDropdown() {
  const session = await getSession();

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn size-10 rounded-full bg-base-200 md:bg-base-300 p-1"
      >
        <UserIcon className="size-full p-1" />
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 mt-3 shadow-sm"
      >
        <li>
          {session?.user ? (
            <button
              onClick={async () => {
                "use server";
                await signOut();
              }}
            >
              로그아웃
            </button>
          ) : (
            <Link href="/login">로그인</Link>
          )}
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}

export default UserDropdown;
