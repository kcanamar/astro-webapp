import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-frontend-masters-kcanamar.netlify.app',
  output: "hybrid",
  integrations: [react(), solidJs()],
  adapter: vercel()
});