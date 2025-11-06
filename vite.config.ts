import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
const aliases = [
  { find: "@app", replacement: path.resolve(__dirname, "src/app") },
  { find: "@common", replacement: path.resolve(__dirname, "src/common") },
  { find: "@features", replacement: path.resolve(__dirname, "src/features") },
  { find: "@theme", replacement: path.resolve(__dirname, "src/theme") },
  { find: "@routers", replacement: path.resolve(__dirname, "src/routers") },
  { find: "@layouts", replacement: path.resolve(__dirname, "src/layouts") },
  { find: "@constants", replacement: path.resolve(__dirname, "src/constants") },
];
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});
