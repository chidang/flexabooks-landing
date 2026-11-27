// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://flexabooks.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
