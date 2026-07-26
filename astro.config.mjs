// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri"; // 1. Import Sätteri
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://astronaut.github.io",
  markdown: {
    // 2. Set the processor to Sätteri with your plugins mapped to its AST hooks
    processor: satteri({
      mdastPlugins: [remarkMath],
      hastPlugins: [rehypeKatex],
    }),
  },
  integrations: [],
});
