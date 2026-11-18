import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Vercel redirects the bare domain to www; canonical and sitemap must match.
  site: 'https://www.bridgeperformance.coach',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/'),
    }),
  ],
});
