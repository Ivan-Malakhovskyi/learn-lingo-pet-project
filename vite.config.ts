import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), svgr()],

    // define process env

    define: {
      __APP_ENV__: JSON.stringify(env.__APP_ENV__),
    },
    resolve: {
      alias: {
        src: "/src",
      },
    },
  };
});
