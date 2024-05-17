// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import {defineConfig} from "vite";
import * as path from "path";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), tsconfigPaths()],

  server: {
    port: 3000,
  },

  build: {
    // 빌드할 라이브러리에 대한 설정
    lib: {
      // 라이브러리의 진입점
      entry: path.resolve(__dirname, "src/Card.tsx"),
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    // CommonJS 번들러에 대한 옵션을 정의한다.
    commonjsOptions: {
      esmExternals: ["react"],
    },
  },

  // 절대경로
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
