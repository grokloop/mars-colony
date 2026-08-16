import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/",
  appType: "mpa",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        preview: resolve(__dirname, "preview.html"),
        walk: resolve(__dirname, "walk.html"),
      },
    },
  },
  server: {
    host: true,
    port: 5173,
  },
});
