// @ts-check
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark"; // 1. Added unified import
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://astronaut.github.io",
  markdown: {
    // 2. Wrapped plugins inside processor: unified(...)
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  // If you are using the @astrojs/mdx integration, add them there too:
  integrations: [],
});
