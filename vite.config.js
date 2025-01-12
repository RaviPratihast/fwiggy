import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy for the restaurants listing URL
      "/api/restaurants": {
        target: "https://www.swiggy.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api\/restaurants/, "/dapi/restaurants"),
      },
      // Proxy for the image URL
      "/api/images": {
        target: "https://media-assets.swiggy.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/images/, "/swiggy/image"),
      },
      // Proxy for the menu URL
      "/api/menu": {
        target: "https://www.swiggy.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/menu/, "/mapi/menu"),
      },
      // Proxy for dishes photo URL
      "/api/dishes": {
        target: "https://media-assets.swiggy.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/dishes/, "/swiggy/image"),
      },
    },
  },
});
