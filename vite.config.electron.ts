import { defineConfig } from "vite";

export default defineConfig({
  publicDir: false,
  build: {
    ssr: "electron/main.ts",
  },
});
