import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Enable server-side rendering for better SEO
  output: "static",

  // Build configuration
  build: {
    assets: "assets",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});