"use client";

import { signOutWithForm } from "@/lib";
import UserIcon from "@/public/svg/user.svg";
import { Session } from "next-auth";
import Link from "next/link";
import { useActionState } from "react";

interface IUserDropdownProps {
  user: Session["user"] | undefined;
}

function UserDropdown({ user }: IUserDropdownProps) {
  const [_, action] = useActionState(signOutWithForm, undefined);

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn rounded-md bg-base-300 p-1"
      >
        <UserIcon className="size-full p-1" />
        {user && <span className="pe-2 mb-0.5 text-nowrap">{user.name}</span>}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-300 rounded-md z-1 w-52 p-2 md:mt-3 max-md:-me-3 max-md:mt-5 shadow-sm &>li:items-center"
      >
        <li className="w-full">
          <form action={action} className="flex items-center w-full">
            {user ? (
              <button type="submit" className="size-full cursor-pointer">
                로그아웃
              </button>
            ) : (
              <Link
                href="/login?callbackUrl=/"
                className="size-full text-center"
              >
                로그인
              </Link>
            )}
          </form>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}

export default UserDropdown;
