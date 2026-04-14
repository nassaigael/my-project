import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import seoFiles from 'vite-plugin-seo-files';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    seoFiles({
      siteUrl: 'https://nassaigael.github.io',
      generateRobots: true,
      generateSitemap: true,
      disallow: ['/admin', '/private']
    })
  ],
  base: '/',
  server: {
    host: true,
  }
})