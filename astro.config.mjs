import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://astrojs.org",
  integrations: [solidJs(), react(), mdx()],
  
});
