# Ejemplo del curso: Café Orquídea

Sitio de ejemplo que se construye en los vídeos del curso **Diseño Web** del IESTP John A. Mackay. Café Orquídea es
un negocio **ficticio** de Rioja; sus datos son inventados.

**Sitio publicado:** https://nilosalvador.github.io/diseno-web-ijam/

En tu repositorio, esa línea lleva la dirección de tu sitio en GitHub Pages, la que sale en Settings, Pages, al
terminar la primera publicación. El ejemplo del curso vive en la carpeta `ejemplo` y no se publica, porque GitHub
solo ejecuta el flujo de `.github/workflows` que está en la raíz del repositorio; en tu proyecto, que está en la
raíz, sí se ejecuta.

Cada semana tiene su etiqueta (`semana-1`, `semana-2`…) con el sitio tal como debe quedar al terminarla. Para ver una
semana en GitHub, elige la etiqueta en el selector de ramas y etiquetas.

## Probarlo en tu PC

```
npm install
npm run dev
```

Luego abre `http://localhost:4321/diseno-web-ijam/`. Para comprobar la entrega de una semana: `npm run revisar -- 8`.
