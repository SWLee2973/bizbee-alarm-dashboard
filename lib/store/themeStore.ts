import { create } from "zustand";
import { persist } from "zustand/middleware";
import { theme } from "../constants";

interface IThemeStore {
  themeName: (typeof theme)[number] | "default";
  setThemeName: (value: (typeof theme)[number]) => void;
}

export const themeStore = create<IThemeStore>()(
  persist(
    (set) => ({
      themeName: "default",
      setThemeName: (themeName: (typeof theme)[number] | "default") => {
        set({ themeName });
        localStorage.setItem("theme", themeName);
      },
    }),
    {
      name: "themeStore",
    }
  )
);
