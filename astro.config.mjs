import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://www.xn--ok0bl1wxvbj3ep16a.com',integrations:[sitemap({filter:(page)=>{const pathname=new URL(page).pathname;return pathname==='/'||/^\/services\/[a-z-]+\/?$/.test(pathname)||/^\/busan\/[^/]+(?:\/[^/]+)?\/?$/.test(pathname)}})]});
