import React from "react";
import ThemeChanger from "../atom/ThemeChanger";

function Header() {
  return (
    <header className="flex justify-end max-md:hidden">
      <ThemeChanger />
    </header>
  );
}

export default Header;
