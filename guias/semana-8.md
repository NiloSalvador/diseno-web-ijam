# Semana 8 — Tu sitio en internet con GitHub Pages y tu sustentación

Tu sitio ya está completo en tu computadora. Esta semana sale a internet, con una dirección que puedes mandar por
WhatsApp a cualquier persona. Primero lo preparas para vivir dentro de GitHub Pages, con la `base` y los enlaces que la
llevan, y creas el flujo de GitHub Actions que lo publica solo cada vez que subes cambios. Después haces la revisión
final y grabas tu sustentación, un vídeo de 3 a 5 minutos donde presentas tu sitio y cambias algo en vivo.
Al terminar tendrás

- Tu sitio publicado en `https://tu-usuario.github.io/nombre-del-repositorio/`, una dirección que abre en cualquier
  celular o computadora.
- La `base` en `astro.config.mjs` y todos tus enlaces, el icono de la pestaña y la foto para compartir con ella.
- Un flujo de GitHub Actions que vuelve a publicar tu sitio solo cada vez que subes cambios.
- La dirección de tu sitio publicado en el `README.md` de tu repositorio.
- El revisor en 100 de 100, tu sitio probado en tu celular y Lighthouse con 90 o más sobre la dirección publicada.
- Tu sustentación de 3 a 5 minutos grabada y entregada en la tarea.

> **Plazo.** Esta es la última semana del curso. La semana 8, con la sustentación, y todas las tareas y cuestionarios
> cierran el **domingo 29 de noviembre a las 23:59**. En el aula tienes dos vídeos. La **Lección 8.1, Tu sitio en
> internet con GitHub Pages** acompaña los pasos 2 al 8 y la **Lección 8.2, La revisión final y tu sustentación**, los
> pasos 9 al 12. Las dudas van por Google Chat.

## Cómo terminar el curso

- **Ritmo.** Si terminaste las semanas 6 y 7, te queda la 8 con la sustentación hasta el domingo 29 de noviembre a las
  23:59, cuando cierra todo. No la dejes para el último día, porque la primera publicación y el vídeo toman su tiempo.
- **Una sola entrega que crece.** Todas las tareas llevan el mismo enlace, el de tu repositorio, y el revisor de la
  semana 8 comprueba también lo de las siete anteriores.
- **Si vas atrasado, la ruta corta.** No empieces otro proyecto. En tu mismo repositorio actualiza el revisor (paso 1)
  y escribe `npm run revisar -- 8`. Cada **Falta** es algo pendiente de las semanas 1 a 8. Arréglalos de arriba
  abajo con la guía de esa semana (la tabla del [inicio](../README.md) dice el tema de cada una) y, al terminar cada
  semana, entrega su tarea con el mismo enlace. Publica tu sitio aunque todavía te falten cosas, porque cada cambio que
  subas después se publica solo.
- **Si te trabas**, escribe por Google Chat con el paso de la guía y el mensaje exacto del revisor, de la terminal, de
  la consola del navegador o de la pestaña **Actions** de GitHub.

## Antes de empezar

- Haber terminado la semana 7, porque la dirección de tu sitio sale del `site` que pusiste en su paso 7.
- Tener todo subido a GitHub. GitHub publica lo que está en tu repositorio, no lo que está en tu computadora. En
  **Control de código fuente** (**Ctrl + Shift + G**) no debe quedar nada sin **Commit** ni sin **Sync Changes**.
- Tu repositorio es público desde la semana 1, y así GitHub Pages lo publica gratis.
- Mira los dos vídeos de la semana. En ellos Café Orquídea, el sitio del ejemplo, se publica en GitHub Pages con los
  mismos pasos de esta guía.
- Ten a mano tu celular, para probar tu sitio publicado en el paso 10 y, si quieres, para grabar la sustentación.

## Palabras nuevas

| Palabra | Qué es |
| :-- | :-- |
| GitHub Pages | El servicio gratuito de GitHub que publica en internet el sitio de un repositorio, en una dirección que termina en `github.io` |
| `base` | La carpeta de tu sitio dentro de esa dirección, una barra y el nombre de tu repositorio. Va en `astro.config.mjs` |
| `import.meta.env.BASE_URL` | La `base` que Astro le entrega a cada archivo, para escribir los enlaces con ella |
| 404 | El código con el que responde un servidor cuando la dirección pedida no existe |
| GitHub Actions | El servicio de GitHub que hace un trabajo solo cuando subes cambios, en este caso compilar y publicar tu sitio |
| Flujo | En inglés, *workflow*. El archivo `.yml` que le dice a GitHub Actions qué hacer y cuándo |
| YAML | El formato de ese archivo. Ordena las líneas con espacios al inicio, nunca con tabulaciones |
| `package-lock.json` | El archivo que anota la versión exacta de cada paquete que instalaste. GitHub lo usa para instalar lo mismo que tu computadora |
| Sustentación | El vídeo de 3 a 5 minutos donde presentas tu sitio, explicas cómo lo hiciste y cambias algo en vivo |

## Paso 1. Actualiza el revisor y enciende el sitio

1. Abre tu repositorio en VS Code y, en la terminal, escribe

   ```
   npm run revisar -- actualizar
   ```

   **Así sabes que te salió.** Dice «Revisor actualizado». La semana 8 necesita el revisor 8; con uno anterior te
   pedirá que lo actualices.
2. Escribe `npm run revisar -- 8`. Marca **Falta** en lo nuevo de esta semana, la `base`, el flujo de publicación y la
   dirección del sitio en el `README.md`. Abajo sale en amarillo un **Aviso**, porque tu sitio todavía no está
   publicado. No cambia el puntaje y se va en el paso 8. Café Orquídea con la semana 7 empieza con **81 de 100**. Al
   terminar la guía, todo dice **Cuadra**.
3. Enciende el sitio con `npm run dev`.

## Paso 2. `base`, el nombre de tu repositorio

GitHub Pages publica tu sitio en una dirección con dos partes, `https://tu-usuario.github.io/nombre-del-repositorio/`.
La primera ya la tienes en `site` desde la semana 7. La segunda es una carpeta con el nombre de tu repositorio, y
Astro necesita conocerla para que los estilos, las fotos y los enlaces se busquen dentro de ella. Esa carpeta es la
`base`.

El nombre de tu repositorio se ve de dos maneras.

- En GitHub, abre tu repositorio y mira la barra de direcciones del navegador. Dice
  `https://github.com/tu-usuario/nombre-del-repositorio`. El nombre es lo último, lo que va después de tu usuario.
- En la terminal de VS Code escribe `git remote -v`. Sale dos veces una línea como
  `origin  https://github.com/tu-usuario/nombre-del-repositorio.git (fetch)`. El nombre es lo que está entre la
  última barra y `.git`.

Cópialo tal cual, con las mismas minúsculas, mayúsculas y guiones. El revisor lo compara con el de `git remote`.

Hay un caso especial. Si tu repositorio se llama igual que tu dirección, `tu-usuario.github.io`, GitHub publica el
sitio en `https://tu-usuario.github.io/`, sin carpeta, y no lleva `base`. Si es tu caso, no agregues la línea de este
paso. Los pasos 3 y 4 funcionan igual.

1. Abre `astro.config.mjs`, en la raíz del proyecto.
2. Debajo de la línea de `site`, agrega `base` con una barra y el nombre de tu repositorio. Borra también el
   comentario que decía que la base se agregaba en la semana 8. El repositorio de Café Orquídea se llama
   `diseno-web-ijam` y el archivo queda así

```js
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
```

- `base` empieza con `/` y no lleva barra al final.
- `site` sigue con tu usuario de GitHub en minúsculas, aunque en GitHub lo veas con mayúsculas.
- Con la `base`, el sitio de `npm run dev` también se muda a esa carpeta. La terminal muestra la dirección nueva, como
  `http://localhost:4321/diseno-web-ijam/`, y `http://localhost:4321/` sola da 404.

**Así sabes que te salió.** Abre `http://localhost:4321/nombre-del-repositorio/` y ves Inicio con sus colores y sus
fotos. Pulsa **Carta** en el menú y sale una página 404; eso se arregla en el paso 3. Escribe `npm run revisar -- 8`.
La línea de `base` dice **Cuadra** y aparece una **Falta** nueva, «Ningún enlace, imagen ni archivo de public se queda
sin la base», con la lista de los enlaces que todavía no la llevan.

## Paso 3. Los enlaces con `const base`

Un enlace que empieza con `/`, como `href="/carta"`, lleva a la raíz de la dirección,
`https://tu-usuario.github.io/carta`. Ahí no está tu sitio, que vive en su carpeta, y GitHub responde 404. Cada enlace
a tus páginas tiene que llevar la `base` delante, `/diseno-web-ijam/carta`.

No escribas el nombre del repositorio a mano en cada enlace. Astro entrega la `base` en `import.meta.env.BASE_URL`, y
así un solo cambio en `astro.config.mjs` alcanza para todo el sitio.

1. Abre `src/components/Header.astro`. En el frontmatter, debajo de `const { pagina } = Astro.props;`, agrega las
   líneas de `const base`. Queda así

```astro
const { pagina } = Astro.props;

// La base del sitio, la carpeta donde GitHub Pages lo publica (/diseno-web-ijam). Sale de «base» en
// astro.config.mjs. El .replace quita la barra del final si la tiene, así cada enlace se escribe
// igual, la base y luego la ruta que empieza con /.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
---
```

2. Cambia el `href` del nombre del negocio, arriba a la izquierda

```astro
		<a href={`${base}/`} class="font-titulo text-2xl font-semibold text-crema">Café Orquídea</a>
```

3. Cambia los cuatro enlaces del menú

```astro
			<ul id="menu-principal" class="hidden pt-3 md:flex md:gap-6 md:pt-0">
				<li><a href={`${base}/`} aria-current={pagina === '/' ? 'page' : undefined} class="block py-3 font-semibold text-crema underline-offset-4 hover:text-orquidea-claro aria-[current=page]:underline md:py-0">Inicio</a></li>
				<li><a href={`${base}/carta`} aria-current={pagina === '/carta' ? 'page' : undefined} class="block py-3 font-semibold text-crema underline-offset-4 hover:text-orquidea-claro aria-[current=page]:underline md:py-0">Carta</a></li>
				<li><a href={`${base}/nosotros`} aria-current={pagina === '/nosotros' ? 'page' : undefined} class="block py-3 font-semibold text-crema underline-offset-4 hover:text-orquidea-claro aria-[current=page]:underline md:py-0">Nosotros</a></li>
				<li><a href={`${base}/contacto`} aria-current={pagina === '/contacto' ? 'page' : undefined} class="block py-3 font-semibold text-crema underline-offset-4 hover:text-orquidea-claro aria-[current=page]:underline md:py-0">Contacto</a></li>
			</ul>
```

4. Abre `src/pages/index.astro`. Agrega el mismo `const base` debajo de los `import`

```astro
import { productos, soles } from '../data/carta.js';

// La base del sitio, la carpeta donde GitHub Pages lo publica (/diseno-web-ijam). Sale de «base» en
// astro.config.mjs. El .replace quita la barra del final si la tiene, así cada enlace se escribe
// igual, la base y luego la ruta que empieza con /.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
---
```

5. En la misma página cambia el enlace «Ver la carta completa», debajo de «Lo más pedido»

```astro
				<a href={`${base}/carta`} class="font-semibold text-orquidea-oscuro underline underline-offset-4 hover:text-orquidea">Ver la carta completa</a>
```

6. Y el enlace «Ver el mapa», en «Dónde estamos»

```astro
				<p><a href={`${base}/contacto`} class="font-semibold text-orquidea-claro underline underline-offset-4">Ver el mapa</a></p>
```

7. Busca los que falten. En VS Code pulsa **Ctrl + Shift + F**, escribe `href="/` y mira los resultados que están en
   `src`. Haz lo mismo con `src="/`. Cada uno se cambia igual, con su `const base` en ese archivo.

- `import.meta.env.BASE_URL` trae la `base` de `astro.config.mjs`. Con la configuración de fábrica de Astro llega sin
  barra al final, `/diseno-web-ijam`, y en un repositorio `tu-usuario.github.io`, sin base, llega como `/`.
- `.replace(/\/$/, '')` quita la barra del final si la hay. Así `base` vale `/diseno-web-ijam` con base y queda vacía
  sin ella, y `${base}/carta` da `/diseno-web-ijam/carta` en un caso y `/carta` en el otro. El mismo código sirve en
  los dos.
- Sin esa línea, `${import.meta.env.BASE_URL}carta` daría `/diseno-web-ijamcarta`, y `${import.meta.env.BASE_URL}/carta`
  daría `//carta` en un sitio sin base. Por eso se arma `base` una vez y se usa igual en todos los enlaces.
- `` href={`${base}/carta`} `` lleva llaves porque adentro va JavaScript, y comillas invertidas para meter `${base}`,
  como el mensaje de WhatsApp de la semana 7.
- `pagina="/carta"` y `pagina === '/carta'` se quedan como están. No son enlaces, son el nombre de la página para
  marcar el menú.
- Los enlaces a otros sitios, como `https://wa.me/…`, `tel:` o el mapa, no cambian. Solo cambian los que empiezan con
  `/`.
- Las fotos que pasan por `<Image />` y los estilos de Tailwind ya salen con la base, porque las rutas las escribe
  Astro. Solo cambian las que escribiste tú.
- Cada archivo que usa `${base}` necesita su propia línea `const base` en el frontmatter, entre los `---`.

**Así sabes que te salió.** En `http://localhost:4321/nombre-del-repositorio/` pulsa cada opción del menú. Cada una
abre su página y la barra de direcciones dice `/nombre-del-repositorio/carta`, `/nombre-del-repositorio/nosotros`…
`npm run revisar -- 8` ya no nombra tus enlaces. Si la base todavía marca **Falta**, es por el icono de la pestaña y la
foto para compartir, que van en el paso 4.

## Paso 4. El favicon y Open Graph con la base

Lo que está en `public` se publica tal cual, dentro de la carpeta de tu sitio. El icono de la pestaña, el favicon, y
la foto para compartir están ahí, así que sus rutas también llevan la base.

1. Abre `src/layouts/Layout.astro`. Debajo de `const { title, description, pagina } = Astro.props;` agrega el mismo
   `const base` y cambia la línea de `imagen`. Esa parte del frontmatter queda así

```astro
const { title, description, pagina } = Astro.props;

// La base del sitio, la carpeta donde GitHub Pages lo publica (/diseno-web-ijam). Sale de «base» en
// astro.config.mjs. El .replace quita la barra del final si la tiene, así cada enlace se escribe
// igual, la base y luego la ruta que empieza con /.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

// Open Graph: lo que muestran WhatsApp y Facebook cuando alguien comparte un enlace del sitio.
// Las direcciones van completas, con https://, armadas con el «site» de astro.config.mjs.
// Astro.url.pathname ya trae la base; la imagen de public/ la lleva escrita, como los enlaces.
const direccion = new URL(Astro.url.pathname, Astro.site);
const imagen = new URL(`${base}/compartir.jpg`, Astro.site);
```

2. En el `<head>`, cambia las dos líneas del favicon

```astro
		<link rel="icon" type="image/svg+xml" href={`${base}/favicon.svg`} />
		<link rel="icon" href={`${base}/favicon.ico`} />
```

- `imagen` pasa de `'/compartir.jpg'` a `` `${base}/compartir.jpg` ``, con comillas invertidas.
- `direccion` no cambia, porque `Astro.url.pathname` ya trae la base.
- El mapa del sitio tampoco cambia. Astro lo arma con `site` y `base`, y ya sale con la carpeta.

**Así sabes que te salió.** La pestaña del navegador muestra el icono de tu sitio. Pulsa **Ctrl + U**, busca
`og:image` con **Ctrl + F** y la dirección dice `https://nilosalvador.github.io/diseno-web-ijam/compartir.jpg`, con tu
usuario y tu repositorio. `npm run revisar -- 8` marca **Cuadra** en «Ningún enlace, imagen ni archivo de public se
queda sin la base».

## Paso 5. Compila y prueba el sitio con la base

`npm run dev` sirve el sitio sin compilar. GitHub Pages publica el sitio compilado, la carpeta `dist`, así que antes de
publicar se prueba ese.

1. Detén `npm run dev` con **Ctrl + C** y escribe `npm run build`. Cuando termine, escribe

   ```
   npm run preview
   ```

2. Abre `http://localhost:4321/nombre-del-repositorio/`, con tu base.
3. Recorre las cuatro páginas desde el menú. Mira que salgan las fotos y el icono de la pestaña, y abre la consola con
   **F12**.

**Así sabes que te salió.** Las cuatro páginas abren con sus colores, su letra y sus fotos, y la consola no muestra
nada en rojo. Detén `npm run preview` con **Ctrl + C**.

### El error típico, el sitio sin `base`

Sin `base`, Astro escribe las rutas de los estilos y de las fotos desde la raíz, como `/_astro/Layout.bvKDCSEu.css`.
En tu computadora funciona, pero en GitHub Pages tu sitio vive dentro de su carpeta y esas rutas no existen. La página
abre, pero así

- Sale sin colores ni diseño, con la letra de fábrica del navegador, la que tiene remates.
- Las fotos no cargan y en su lugar se lee su texto alternativo, el `alt`.
- En la consola (**F12**, pestaña **Consola**) sale dos veces
  `Failed to load resource: the server responded with a status of 404 (Not Found)`.
- En la pestaña **Red** (en inglés, *Network*) recarga con **F5**. Aparecen `/_astro/Layout.bvKDCSEu.css` y cinco
  fotos `/_astro/….webp` con el estado **404**. En tu sitio, las letras después de `Layout.` son otras.

Un enlace sin la base falla de otra forma. Inicio abre bien, pero el menú lleva a una página 404 de GitHub.

El revisor encuentra los dos errores antes de publicar. Sin `base` en `astro.config.mjs` dice

```
Falta    astro.config.mjs tiene site con tu usuario de GitHub y base con el nombre de tu repositorio
         Falta base en astro.config.mjs. Debajo de site escribe base: '/diseno-web-ijam', una barra y el nombre de tu repositorio.
```

Con la `base` puesta y un enlace sin ella dice

```
Falta    Ningún enlace, imagen ni archivo de public se queda sin la base
         En / el enlace lleva a /carta, sin la base /diseno-web-ijam, y en GitHub Pages da 404. Abre src/components/Header.astro y src/pages/index.astro y cambia "/carta" por {`${base}/carta`}, con la línea const base del paso 3 de la guía.
```

Se arregla con la `base` del paso 2 y los enlaces de los pasos 3 y 4. Después compila otra vez.

## Paso 6. El flujo `deploy.yml`

Para publicar, GitHub Actions toma tu repositorio, lo compila en una computadora de GitHub con `npm run build` y
publica la carpeta `dist`. Lo hace solo cada vez que subes cambios, siguiendo un archivo de instrucciones, el flujo.
Este es el flujo oficial de la documentación de Astro, con los comentarios en español.

1. En el explorador de VS Code, en la raíz del proyecto, al lado de `src` y `package.json`, crea la carpeta `.github`,
   con el punto delante. Dentro de ella crea la carpeta `workflows` y, dentro de esa, el archivo `deploy.yml`. También
   puedes pulsar el icono de **Nuevo archivo** y escribir `.github/workflows/deploy.yml` de una vez. VS Code crea las
   carpetas solo.
2. Pega el flujo completo

```yaml
# Publica el sitio en GitHub Pages cada vez que subes cambios a la rama main.
# Es el flujo oficial de la documentación de Astro («Deploy your Astro site to GitHub Pages»),
# con los comentarios en español. En tu repositorio va en .github/workflows/deploy.yml.
name: Deploy to GitHub Pages

on:
  # Se ejecuta cada vez que subes (push) cambios a la rama main.
  push:
    branches: [ main ]
  # Y también a mano, desde la pestaña Actions de GitHub.
  workflow_dispatch:

# Los permisos para leer el repositorio y publicar en GitHub Pages.
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v7
      - name: Install, build, and upload your site
        uses: withastro/action@v6
        # La acción instala las dependencias con el gestor que dice tu package-lock.json,
        # compila con npm run build y sube la carpeta dist.

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
```

- `on` dice cuándo se ejecuta. `push` con `branches: [ main ]` es cada vez que subes cambios a la rama `main`, y
  `workflow_dispatch` deja ejecutarlo a mano desde la pestaña **Actions**. Tu rama se ve abajo a la izquierda en VS
  Code. Si no se llama `main`, escribe su nombre entre los corchetes.
- `permissions` le da permiso para leer tu repositorio, `contents: read`, y para publicar en GitHub Pages,
  `pages: write` e `id-token: write`.
- El trabajo `build` baja tu repositorio con `actions/checkout`. Luego `withastro/action` instala los paquetes,
  compila con `npm run build` y sube la carpeta `dist`.
- El trabajo `deploy` espera a que termine `build`, por eso dice `needs: build`, y publica con `actions/deploy-pages`.
  `environment` es el lugar donde publica, `github-pages`, y su `url` guarda la dirección publicada.
- Los `name` son los nombres en inglés que vas a ver en la pestaña **Actions**, como «Deploy to GitHub Pages».
- En YAML la sangría manda. Cada nivel va con dos espacios más que el anterior y nunca con tabulación. Pega el flujo
  tal cual y no lo reacomodes.
- `withastro/action` instala lo que dice tu `package-lock.json`, así que ese archivo tiene que estar en tu repositorio.
  Lo crea `npm install` y por lo general ya lo subiste. Compruébalo en GitHub, en la lista de archivos.

**Así sabes que te salió.** `npm run revisar -- 8` marca **Cuadra** en «El flujo .github/workflows/deploy.yml publica
con la acción de Astro y tiene sus permisos».

## Paso 7. Activa GitHub Pages y sube tus cambios

1. En GitHub abre tu repositorio y pulsa la pestaña **Settings**. Si no la ves, ábrela desde el menú de los tres
   puntos, **⋯**.
2. En la columna de la izquierda pulsa **Pages**.
3. En **Build and deployment**, en **Source**, elige **GitHub Actions**. Si dice **Deploy from a branch**, cámbialo,
   porque esa opción publica los archivos de una rama tal cual y no usa tu flujo.
4. Vuelve a VS Code. En **Control de código fuente** (**Ctrl + Shift + G**) escribe el mensaje
   `Semana 8, base, enlaces con la base y flujo de GitHub Pages`, pulsa **Commit** y luego **Sync Changes**.
5. En GitHub abre la pestaña **Actions** de tu repositorio. Arriba de la lista aparece una ejecución del flujo «Deploy
   to GitHub Pages», con el mensaje de tu commit.
   - Mientras trabaja, a la izquierda del nombre hay un círculo amarillo. Al terminar bien cambia a un visto verde, y
     si algo falla, a una X roja.
   - Pulsa la ejecución y verás los dos trabajos, `build` y `deploy`, unidos por una línea, porque `deploy` espera a
     `build`.
   - Suele tardar uno o dos minutos. GitHub avisa que un cambio puede tardar hasta 10 minutos en verse publicado.
6. Con el visto verde, vuelve a **Settings** y luego **Pages**. Ahí aparece la dirección de tu sitio,
   `https://tu-usuario.github.io/nombre-del-repositorio/`, con el botón **Visit site**.

**Así sabes que te salió.** En **Actions** la ejecución tiene el visto verde y en **Settings**, **Pages**, está la
dirección de tu sitio.

Si subiste los cambios antes de activar Pages, el trabajo `deploy` termina con la X roja y su error dice
`Failed to create deployment (status: 404)`. Activa Pages como en los puntos 1 a 3 y ejecuta el flujo otra vez. En
**Actions**, a la izquierda, pulsa «Deploy to GitHub Pages». Arriba de la lista pulsa **Run workflow**, deja la rama
`main` y confirma con el otro botón **Run workflow**. También sirve subir cualquier cambio.

## Paso 8. Abre tu sitio publicado

1. Pulsa **Visit site** o escribe la dirección en el navegador.
2. Recorre las cuatro páginas desde el menú. Mira que salgan los colores, las fotos y el icono de la pestaña, y que el
   formulario de Contacto abra WhatsApp.
3. Abre la consola con **F12** y revisa que no haya nada en rojo.
4. Escribe `npm run revisar -- 8`. El **Aviso** amarillo del paso 1, «Tu sitio publicado abre en internet», ahora dice
   **Cuadra**.

Antes de publicar, ese aviso decía esto, con tu dirección

```
Aviso    Tu sitio publicado abre en internet (es un aviso y no cambia el puntaje)
         https://nilosalvador.github.io/diseno-web-ijam/ responde 404, no hay sitio publicado ahí. En GitHub abre Settings, luego Pages, y en Source elige GitHub Actions. Después mira en la pestaña Actions que el flujo termine con el visto verde.
```

Desde ahora, cada vez que subas un cambio con **Sync Changes**, GitHub Actions vuelve a publicar tu sitio solo. Espera
el visto verde en **Actions** y recarga la página con **Ctrl + F5**, que la trae de nuevo sin usar la copia que guarda
el navegador.

**Así sabes que te salió.** Tu sitio abre en internet con todo lo que tenía en tu computadora, y la barra de
direcciones empieza con `https://tu-usuario.github.io/`. Ábrelo también en tu celular.

### En tu proyecto, lección 8.1

1. Busca el nombre de tu repositorio en la barra de direcciones de GitHub o con `git remote -v`, y escribe `base`
   debajo de `site` en `astro.config.mjs` (paso 2).
2. Agrega `const base` en `Header.astro` y cambia sus enlaces. Luego busca `href="/` y `src="/` con
   **Ctrl + Shift + F** y cambia cada uno, con su `const base` en ese archivo (paso 3).
3. En `Layout.astro`, pon la base en el favicon y en la foto de Open Graph (paso 4).
4. Escribe `npm run build` y `npm run preview`, y recorre las cuatro páginas en la dirección con tu base (paso 5).
5. Crea `.github/workflows/deploy.yml` con el flujo (paso 6).
6. Activa Pages con **GitHub Actions**, haz commit y **Sync Changes**, espera el visto verde y abre tu sitio
   publicado (pasos 7 y 8).

| Negocio | Su repositorio | Su `base` | Su sitio publicado |
| :-- | :-- | :-- | :-- |
| Taller de estructuras metálicas | `github.com/tu-usuario/taller-metalico` | `base: '/taller-metalico',` | `https://tu-usuario.github.io/taller-metalico/`. El botón «Pide tu presupuesto» del pie también lleva `${base}/contacto` |
| Concesionario | `github.com/tu-usuario/concesionario-moyobamba` | `base: '/concesionario-moyobamba',` | `https://tu-usuario.github.io/concesionario-moyobamba/`. Cada tarjeta del catálogo enlaza a `${base}/modelos` |
| Bodega | `github.com/tu-usuario/tu-usuario.github.io` | Sin `base`, es el caso especial | `https://tu-usuario.github.io/`, sin carpeta. Su `const base` queda vacía y los enlaces funcionan igual |

## Paso 9. La línea «Sitio publicado» del `README.md`

El `README.md` es lo primero que se ve al abrir tu repositorio en GitHub. Con la dirección ahí, quien revise tu
proyecto, el docente también, abre tu sitio con un clic.

1. Abre `README.md`, en la raíz del proyecto.
2. Debajo del título, en una línea aparte, escribe la dirección de tu sitio publicado. En Café Orquídea quedó así

```markdown
**Sitio publicado:** https://nilosalvador.github.io/diseno-web-ijam/
```

3. Haz commit con el mensaje `Semana 8, dirección del sitio publicado en el README` y pulsa **Sync Changes**.

- Copia la dirección de **Settings**, **Pages**, o de la barra del navegador con tu sitio abierto.
- Es la misma que arma el revisor con `site` y `base`. Si no coincide, el revisor te dice cuál espera.
- GitHub vuelve a ejecutar el flujo con este commit, aunque el sitio no cambie.

**Así sabes que te salió.** En GitHub, debajo de la lista de archivos, el README muestra la dirección como enlace y al
pulsarlo abre tu sitio. `npm run revisar -- 8` marca **Cuadra** en «README.md tiene la dirección de tu sitio
publicado».

## Paso 10. La revisión final

Es la última revisión del curso. Haz cada punto en orden y no entregues hasta tenerlos todos.

1. **El revisor en 100.** Escribe `npm run revisar -- 8`. Tiene que decir **Puntaje 100 de 100**, con todo en
   **Cuadra**, también el aviso del sitio publicado, y sin commits por subir. Este revisor comprueba lo de las semanas
   1 a 8, así que si algo de antes se rompió, aquí aparece.
2. **Tu sitio publicado en tu celular de verdad.** Mándate la dirección por WhatsApp y ábrela en tu celular, con datos
   o con wifi. Recorre las cuatro páginas. El menú abre y cierra, el formulario abre la aplicación de WhatsApp con el
   mensaje escrito, las fotos cargan, se lee sin agrandar con los dedos y nada se sale por el costado.
3. **Lighthouse sobre la dirección publicada.** En la computadora abre una ventana de incógnito (**Ctrl + Shift + N**)
   y entra a tu sitio publicado. Pulsa **F12**, elige la pestaña **Lighthouse**, deja **Navegación**, **Celular** y las
   cuatro categorías, y pulsa **Analizar la carga de la página**. Las cuatro notas tienen que salir en 90 o más, como
   en la semana 7. No hace falta guardar este informe; el de la carpeta `lighthouse` sigue valiendo para el revisor.
4. **El contenido real de tu brief en cada página.** Abre tu `BRIEF.md` al lado del sitio publicado. Cada página tiene
   los textos, los precios, el horario, el teléfono y las fotos de tu negocio, sin restos de Café Orquídea ni textos
   de relleno.
5. **La consola sin errores.** En el sitio publicado, con **F12** y la pestaña **Consola** abierta, recorre las cuatro
   páginas. No debe salir nada en rojo.

Además del revisor, el docente mira tres cosas en tu sitio publicado, que abra y funcione en el celular, que todas las
páginas tengan el contenido real de tu negocio y que se vea como un solo sitio, con los mismos colores y la misma
letra en todas.

**Así sabes que te salió.** Cumpliste los cinco puntos. Si cambiaste algo, haz commit, pulsa **Sync Changes** y espera
el visto verde en **Actions** antes de grabar.

## Paso 11. La sustentación

La sustentación es un vídeo de **3 a 5 minutos** donde presentas tu sitio publicado, muestras cómo lo construiste y
cambias algo en vivo. La semana 8 es la evaluación final del curso y vale **70 % el proyecto final**, con el revisor y
los tres criterios del docente, y **30 % la sustentación**.

Puedes usar la inteligencia artificial como ayuda, pero en la sustentación se nota quién entiende su código. Si una
parte de tu sitio la escribió una IA, ábrela antes de grabar y asegúrate de poder decir qué hace cada línea que vas a
mostrar.

Este es el guion sugerido, con el tiempo de cada parte.

1. **Presenta el negocio y para quién es** (unos 20 segundos). Su nombre, qué ofrece, dónde está y qué quieres que
   haga quien entra a tu sitio, como escribir por WhatsApp.
2. **Recorre el sitio publicado en el celular y en la computadora** (1 minuto). Que se vea la dirección `github.io` en
   la barra. En la computadora pasa por las cuatro páginas y en el celular abre el menú.
3. **Muestra una pieza de cada bloque del curso** (1 minuto y medio). Abre el archivo en VS Code y di en una o dos
   frases qué hace.
   - Un componente, como tu tarjeta con sus props (semana 5).
   - El catálogo que sale de tu archivo de `src/data` con `.map()` (semana 5).
   - El menú del celular, con su `<script>` y `aria-expanded` (semana 6).
   - El formulario de WhatsApp, con `encodeURIComponent` (semana 7).
4. **Cambia algo en vivo** (1 minuto y medio). Por ejemplo, el color del botón principal. Di en qué archivo lo
   cambias, guarda, haz commit y **Sync Changes**, abre la pestaña **Actions** y, cuando salga el visto verde,
   recarga tu sitio publicado con **Ctrl + F5** y muestra el cambio. Mientras la Action trabaja, explica qué hace tu
   `deploy.yml`. Café Orquídea cambiaría `--color-orquidea` en el `@theme` de `src/styles/global.css`, y con él
   cambian todos sus botones a la vez.
5. **Cierra con qué aprendiste y qué mejorarías** (unos 20 segundos).

Ensaya una vez sin grabar, con el cronómetro del celular. Si pasas de 5 minutos, acorta lo que dices en el punto 3,
nunca el cambio en vivo.

### Cómo se califica la sustentación

| Criterio | Qué se mira |
| :-- | :-- |
| Explicas con tus palabras | Dices qué hace cada pieza que muestras, sin leer un texto armado |
| El cambio en vivo funciona | Dices en qué archivo lo hiciste, lo subes y se ve en el sitio publicado cuando termina la Action |
| El sitio publicado abre | Se ve tu dirección `github.io` funcionando en el celular y en la computadora |
| Dura de 3 a 5 minutos | Ni menos de 3 ni más de 5 |

**Así sabes que te salió.** Ensayaste el guion una vez, el cambio en vivo se publicó y todo duró de 3 a 5 minutos.

## Paso 12. Graba y sube el vídeo

Puedes grabar de dos formas. Elige la que te resulte más fácil.

**Con Clipchamp, en la computadora.** Viene con Windows 11 y graba la pantalla y tu cámara a la vez.

1. Abre el menú Inicio, escribe `Clipchamp`, ábrelo y crea un vídeo nuevo.
2. En la barra de herramientas del editor pulsa **Grabar & crear** y elige la grabación de pantalla y cámara.
3. Pulsa el botón para empezar, elige tu pantalla completa, para que se vean el navegador y VS Code, y confirma con
   **Compartir**.
4. Al terminar, pulsa **Dejar de compartir** en la barra que aparece al empezar a grabar. La grabación pasa a la línea
   de tiempo del editor.
5. Pulsa **Exportar**, en la esquina del editor, y elige **720p**. El vídeo sale en MP4, se ve claro y pesa menos que
   en 1080p.

**Con el celular.** Apóyalo en algo firme, en horizontal, frente a la pantalla y lo bastante cerca para que se lea el
código. Busca buena luz y un lugar sin ruido. Si la cámara deja elegir la calidad, usa 720p o HD, porque en 4K el
vídeo pesa mucho más.

Para subirlo a la tarea

1. Mira cuánto pesa. En la carpeta del vídeo, haz clic derecho sobre el archivo, elige **Propiedades** y lee el
   **Tamaño**.
2. Si pesa **50 MB o menos**, súbelo directo en la tarea del aula, que acepta hasta 50 MB.
3. Si pesa más, súbelo a tu Google Drive institucional, el de tu correo del instituto. Cuando termine de subir, haz
   clic derecho sobre el vídeo, elige **Compartir**, escribe el correo del docente y pulsa **Enviar**. Luego copia el
   enlace con **Copiar enlace** y pégalo en la tarea.

**Así sabes que te salió.** Viste tu vídeo de principio a fin antes de entregarlo. Se oye tu voz, se lee la pantalla y
dura de 3 a 5 minutos.

### En tu proyecto, lección 8.2

1. Escribe la dirección de tu sitio en tu `README.md`, haz commit y súbelo (paso 9).
2. Haz la revisión final de cinco puntos (paso 10).
3. Elige qué piezas vas a mostrar y qué vas a cambiar en vivo, y ensaya el guion una vez (paso 11).
4. Graba, exporta en 720p y mira el peso antes de subir (paso 12).

| Negocio | Una pieza de cada bloque | El cambio en vivo |
| :-- | :-- | :-- |
| Taller de estructuras metálicas | La tarjeta de cada trabajo, la galería de trabajos desde `src/data/trabajos.js`, el menú y el formulario de presupuesto | El color del botón «Pide tu presupuesto», en el `@theme` |
| Concesionario | La ficha de cada modelo, el catálogo desde `src/data/modelos.js`, el menú y el formulario de prueba de manejo | El precio de un modelo en `src/data/modelos.js`, que cambia en su ficha publicada |
| Bodega | La tarjeta de producto, la lista desde `src/data/productos.js`, el menú y el formulario de pedido | Un producto nuevo en `src/data/productos.js`, que aparece en la lista publicada |

## Entrega

En el aula, en la tarea **Semana 8, tu sitio publicado y tu sustentación**, entregas tres cosas.

- El enlace de tu repositorio, el mismo de las semanas anteriores.
- El enlace de tu sitio publicado, el de tu `README.md`.
- Tu vídeo de sustentación, o su enlace de Google Drive si pesa más de 50 MB.

Responde también el cuestionario de la semana 8. Todo cierra el **domingo 29 de noviembre a las 23:59**, el cierre de
todo el curso.

## Si algo falla

| Lo que ves | Qué hacer |
| :-- | :-- |
| Tu sitio publicado sale sin colores, con la letra del navegador, y las fotos rotas muestran su texto | Falta `base`. La consola dice dos veces `Failed to load resource: the server responded with a status of 404 (Not Found)` y en **Red** salen `/_astro/….css` y las fotos `/_astro/….webp` en 404. El revisor dice «Falta base en astro.config.mjs. Debajo de site escribe base: '/…', una barra y el nombre de tu repositorio.» Agrégala (paso 2), súbela y espera el visto verde |
| Inicio abre bien, pero el menú o un botón lleva a una página 404 de GitHub | Ese enlace no lleva la base. El revisor dice «En / el enlace lleva a /carta, sin la base /…, y en GitHub Pages da 404…». Escríbelo como `` {`${base}/carta`} ``, con la línea `const base` (paso 3) |
| La pestaña no muestra el icono, o al compartir el enlace por WhatsApp no sale la foto | El favicon o `og:image` no llevan la base. El revisor nombra `/favicon.svg` o `/compartir.jpg`. Cámbialos en `Layout.astro` (paso 4) |
| `http://localhost:4321/` dice 404 desde que pusiste `base` | Es normal. Tu sitio ahora está en `http://localhost:4321/nombre-del-repositorio/` (paso 2) |
| El revisor dice «base en astro.config.mjs dice '…' y tu repositorio se llama …» | Copia el nombre exacto del repositorio, con las mismas minúsculas y guiones (paso 2) |
| El revisor dice «Tu repositorio se llama … así que GitHub publica el sitio en …, sin carpeta. Borra la línea base…» | Es el caso especial del repositorio `tu-usuario.github.io`. Borra la línea `base` de `astro.config.mjs` |
| El revisor dice «site en astro.config.mjs dice … y tu usuario de GitHub es …» | Escribe en `site` tu usuario de GitHub en minúsculas, como pide el mensaje |
| El revisor dice «Falta el flujo de publicación…» | El archivo va en `.github/workflows/deploy.yml`, en la raíz del proyecto, con el punto delante de `github` (paso 6) |
| El revisor dice «… la línea … empieza con una tabulación y YAML solo acepta espacios…» | Borra la sangría de esa línea y escríbela con espacios. Lo más seguro es pegar otra vez el flujo completo del paso 6 |
| El revisor dice «Falta package-lock.json…» o «package-lock.json no está en tu repositorio…» | Escribe `npm install`, haz commit de `package-lock.json` y súbelo. Sin ese archivo, la acción de Astro se detiene en **Actions** con `No lockfile found.` |
| El revisor dice «Tu rama se llama … y … se ejecuta con otra» | En `deploy.yml`, en `branches`, escribe el nombre de tu rama entre los corchetes |
| En **Actions** el trabajo `deploy` termina con una X roja y dice `Failed to create deployment (status: 404)` | GitHub Pages no está activado con **GitHub Actions**. Actívalo (paso 7) y ejecuta el flujo otra vez con **Run workflow** o subiendo un cambio |
| El revisor muestra el aviso «https://…/ responde 404, no hay sitio publicado ahí. En GitHub abre Settings, luego Pages, y en Source elige GitHub Actions. Después mira en la pestaña Actions que el flujo termine con el visto verde.» | Haz lo que dice (paso 7). Si acabas de subir cambios, espera el visto verde y revisa otra vez. El aviso no cambia el puntaje |
| El aviso dice «… responde con el código …» o «No se pudo comprobar …» | GitHub todavía está publicando o no tienes internet. Espera un minuto, revisa tu conexión y vuelve a revisar |
| Subiste un cambio y el sitio publicado se ve igual | Mira en **Actions** que la ejecución termine con el visto verde y recarga con **Ctrl + F5** |
| El vídeo pesa más de 50 MB | Expórtalo en 720p o súbelo a tu Google Drive institucional y pega el enlace en la tarea (paso 12) |
| `la ejecución de scripts está deshabilitada en este sistema` | Estás en PowerShell; cambia la terminal a **Símbolo del sistema**, como en el paso 7 de la semana 1 |

## Para saber más

- [Despliega tu proyecto de Astro en GitHub Pages](https://docs.astro.build/es/guides/deploy/github/), en español
- [La opción `base` de Astro](https://docs.astro.build/es/reference/configuration-reference/#base), en español
- [Crear un sitio de GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site), en español
- [Grabar la pantalla con Clipchamp](https://support.microsoft.com/es-es/clipchamp/how-to-make-a-screen-recording), en español
- Con esta semana terminas el curso. Tu sitio queda publicado en tu dirección `github.io` y cada cambio que subas se
  publica solo, así que puedes seguir mejorándolo después del curso.
