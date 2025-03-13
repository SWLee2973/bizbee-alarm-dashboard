import { theme } from "@/constants";
import { localStorage } from "@/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IThemeStore {
  themeName: (typeof theme)[number] | "default";
  setThemeName: (value: (typeof theme)[number]) => void;
}

const themeStore = create<IThemeStore>()(
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

export default themeStore;
