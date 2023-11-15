import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

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
   };
});
