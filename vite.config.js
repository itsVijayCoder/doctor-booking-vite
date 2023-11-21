/* eslint-disable no-undef */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
// export default defineConfig({
//    plugins: [react(), dotenv()],
//    base: basePath,
// });

export default defineConfig(({ mode }) => {
   const env = loadEnv(mode, process.cwd(), "");
   const basePath = env.VITE_BASE_PATH;
   console.log("basePath", basePath);

   return {
      plugins: [react()],
      base: basePath,
      // optimizeDeps: {
      //    exclude: ["fs", "fsevents"],
      // },
      // build: {
      //    rollupOptions: {
      //       external: ["fs", "fsevents"],
      //    },
      // },
   };
});
