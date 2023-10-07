import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import vercel from '@astrojs/vercel/serverless'
import preact from "@astrojs/preact"

// https://astro.build/config
export default defineConfig({
  site: "https://bb2.dsilgadosalcedo.online",
  integrations: [tailwind(), preact()],
  output: 'hybrid',
  adapter: vercel(),
})
