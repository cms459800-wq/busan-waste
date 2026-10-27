import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://busan-waste.vercel.app',integrations:[sitemap()]});
