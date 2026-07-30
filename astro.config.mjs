import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lazaroiu.at',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'it', 'ro', 'ar', 'ko'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', de: 'de', it: 'it', ro: 'ro', ar: 'ar', ko: 'ko' },
      },
    }),
  ],
});
