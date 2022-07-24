import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site:"khandakar227.github.io",
  server: {
    tailwindConfig: "./tailwind.config.js"
  },
  integrations: [tailwind(), svelte()]
});