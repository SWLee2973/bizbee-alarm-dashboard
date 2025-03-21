"use client";

import React from "react";
import ThemeChanger from "./ThemeChanger";
import UserDropdown from "../login/UserDropdown";
import { useSession } from "../provider/session";

function Header() {
  const session = useSession();

  return (
    <header className="flex gap-x-4 pe-4 mb-3 justify-end max-md:hidden">
      <ThemeChanger />
      <UserDropdown user={session?.user} />
    </header>
  );
}

export default Header;
