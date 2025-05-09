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
    <div className="p-4 md:pe-2 md:h-screen md:w-60 max-md:w-full max-md:sticky max-md:top-0 max-md:z-50 max-md:pb-0">
      <nav className="bg-base-100 md:h-full rounded-md shadow-lg max-[512px]:py-2 p-1 max-md:items-center max-md:flex max-md:justify-between">
        <h1 className="sr-only">네비게이션 바</h1>
        <div className="flex items-center">
          <DropdownNavLinks />
          <BizbeeLogo />
        </div>
        <section className="flex-1 p-1 md:items-center max-md:hidden">
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
