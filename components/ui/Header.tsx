import React from "react";
import ThemeChanger from "../atom/ThemeChanger";
import UserDropdown from "../login/UserDropdown";

function Header() {
  return (
    <header className="flex gap-x-4 justify-end max-md:hidden">
      <ThemeChanger />
      <UserDropdown />
    </header>
  );
}

export default Header;
