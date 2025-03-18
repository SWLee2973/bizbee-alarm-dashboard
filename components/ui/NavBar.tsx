"use client";

import ThemeChanger from "@/components/ui/ThemeChanger";
import UserDropdown from "../login/UserDropdown";
import { useSession } from "../provider/session";
import BizbeeLogo from "./BizbeeLogo";
import NavLinks from "./NavLinks";
import DropdownNavLinks from "./DropdownNavLinks";

function NavBar() {
  const session = useSession();

  return (
    <div className="md:h-screen md:w-60 max-md:w-full p-4">
      <nav className="bg-base-300 md:h-full rounded-md max-[512px]:py-2 p-1 max-md:items-center max-md:flex max-md:justify-between">
        <h1 className="sr-only">네비게이션 바</h1>
        <div className="flex items-center">
          <DropdownNavLinks />
          <BizbeeLogo />
        </div>
        <section className="flex-1 md:items-center max-md:hidden">
          <NavLinks />
        </section>
        <div className="flex items-center gap-x-4 flex-row md:hidden w-fit pe-2">
          <ThemeChanger />
          <UserDropdown user={session?.user} />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
