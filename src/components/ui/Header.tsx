import React from "react";
import ThemeChanger from "../atom/ThemeChanger";

function Header() {
  return (
    <div className="flex justify-end p-2 max-md:hidden">
      <ThemeChanger />
    </div>
  );
}

export default Header;
