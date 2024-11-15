import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@pages": resolve(__dirname, "src/pages"),
      "@assets": resolve(__dirname, "src/assets"),
      "@styles": resolve(__dirname, "src/styles"),
      "@hooks": resolve(__dirname, "src/hooks"),
    },
  },
});
