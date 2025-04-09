"use client";

import UserDropdown from "../login/UserDropdown";
import { useSession } from "../provider/session";
import Breadcrumbs from "./Breadcrumbs";
import ThemeChanger from "./ThemeChanger";

function Header() {
  const session = useSession();

  return (
    <div className="max-md:hidden sticky rounded-b-md bg-base-200 top-0 ps-2 pt-4 mb-4 z-50 pe-4">
      <header className="flex shadow-md rounded-md p-2 bg-base-100 justify-between">
        <Breadcrumbs />
        <div className="flex items-center flex-row gap-x-2">
          <ThemeChanger />
          <UserDropdown user={session?.user} />
        </div>
      </header>
    </div>
  );
}

export default Header;
