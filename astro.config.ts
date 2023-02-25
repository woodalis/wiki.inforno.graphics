import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

const DEFAULT_LAYOUT = "../layouts/default.astro";

function defaultLayout() {
  return (_, file) => {
    const {
      frontmatter
    } = file.data.astro;
    if (!frontmatter.layout) frontmatter.layout = DEFAULT_LAYOUT;
  };
}

export default defineConfig({
  site: "https://wiki.inforno.graphics",
  markdown: {
    remarkPlugins: [defaultLayout]
  },
  integrations: [mdx()]
});