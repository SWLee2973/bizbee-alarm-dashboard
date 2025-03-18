"use client";

import { theme, themeStore } from "@/lib";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function ThemeChanger() {
  const themeName = themeStore((state) => state.themeName);
  const setThemeName = themeStore((state) => state.setThemeName);

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="dropdown">
      <button
        tabIndex={0}
        role="button"
        className="btn w-36 md:bg-base-300 font-[Noto_Sans_KR] rounded-lg flex items-center justify-between"
      >
        {themeName?.toUpperCase() ?? "DEFAULT"}
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content rounded-lg bg-base-300 rounded-box z-1 w-36 p-2 shadow-2xl"
      >
        {theme.map((theme, index) => (
          <li key={index}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block rounded-lg btn-ghost justify-start"
              aria-label={theme.toUpperCase()}
              value={theme}
              onChange={() => {
                setThemeName(theme);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThemeChanger;
