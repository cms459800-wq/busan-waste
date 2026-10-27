import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://busan-waste.vercel.app',integrations:[sitemap({filter:(page)=>{const pathname=new URL(page).pathname;return pathname==='/'||/^\/services\/[a-z-]+\/?$/.test(pathname)||/^\/busan\/[^/]+(?:\/[^/]+)?\/?$/.test(pathname)}})]});
