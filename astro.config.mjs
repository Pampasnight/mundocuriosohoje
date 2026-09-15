import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://mundocuriosohoje.pages.dev/',
  integrations: [mdx()],
  output: 'static',
  compressHTML: true,
  vite: { build: { cssMinify: true } }
});
