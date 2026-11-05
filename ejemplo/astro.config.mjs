// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // La dirección donde se publicará el sitio, en GitHub Pages: https:// y tu usuario de GitHub.
  // Con ella Astro escribe las direcciones completas del mapa del sitio y de Open Graph.
  // La «base», el nombre del repositorio, se agrega en la semana 8, al publicar.
  site: 'https://nilosalvador.github.io',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});