// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // La dirección donde se publicará el sitio, en GitHub Pages: https:// y tu usuario de GitHub.
  // Con ella Astro escribe las direcciones completas del mapa del sitio y de Open Graph.
  site: 'https://nilosalvador.github.io',
  // La carpeta del sitio dentro de esa dirección: una barra y el nombre del repositorio, igual que en
  // GitHub. El sitio queda en https://nilosalvador.github.io/diseno-web-ijam/
  base: '/diseno-web-ijam',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});