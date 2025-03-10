"use client";

import { useSession } from "@/provider/session";
import UserIcon from "@/public/svg/user.svg";
import { signOutWithForm } from "@/serverActions/auth";
import Link from "next/link";
import { useActionState } from "react";

function UserDropdown() {
  const session = useSession();
  const [_, action] = useActionState(signOutWithForm, undefined);

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
        <form action={action}>
          <li>
            {session?.user ? (
              <button>로그아웃</button>
            ) : (
              <Link href="/login?callbackUrl=/">로그인</Link>
            )}
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </form>
      </ul>
    </div>
  );
}

export default UserDropdown;
