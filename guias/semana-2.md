# Semana 2 — HTML semántico y varias páginas

Esta semana tu sitio pasa de una página a cuatro, con el contenido real del negocio. Todavía sin colores ni diseño
(eso llega la semana 3), porque primero va la estructura. Al terminar tendrás

- Cuatro páginas, Inicio, la de productos o servicios, Nosotros y Contacto, con el contenido de tu brief.
- Cada página con cabecera, menú, contenido principal y pie, un solo título principal y su propio título de pestaña.
- Un menú que lleva a todas las páginas, un enlace para llamar y otro de WhatsApp.
- Fotos del negocio que Astro optimiza solo, cada una con un texto que dice qué muestra.
- Una tabla de precios u horarios y el mapa del negocio.

> **Plazo.** Del jueves 8 al miércoles 14 de octubre a las 23:59. En el aula tienes dos vídeos: la lección 2.1
> acompaña los pasos 1 al 4 y la 2.2, los pasos 5 al 9. Las dudas van por Google Chat.

## Antes de empezar

- Haber entregado la semana 1, porque esta semana se construye sobre ese mismo repositorio.
- Mira los dos vídeos de la semana en el aula (lecciones 2.1 y 2.2). En ellos se construye Café Orquídea, el sitio del
  ejemplo, con los mismos pasos de esta guía.
- Junta el contenido del negocio, que ya listaste en tu brief. Al menos tres fotos (del local, de los productos o del
  servicio), la lista de productos o servicios con sus precios, el horario, la dirección y el número de teléfono o
  WhatsApp.

## Palabras nuevas

| Palabra | Qué es |
| :-- | :-- |
| Etiqueta | Cada pieza de HTML, como `<h1>` o `<p>`. Casi todas se abren y se cierran (`<p>…</p>`) |
| Atributo | Un dato extra dentro de la etiqueta de apertura, como `href` en `<a href="/carta">` |
| HTML semántico | Usar la etiqueta que dice qué es cada parte (`<header>`, `<nav>`, `<main>`, `<footer>`), no una caja cualquiera |
| Ruta | La dirección de una página dentro del sitio, como `/carta` |
| `alt` | El texto que describe una imagen para quien no la ve (lectores de pantalla, Google, conexiones lentas) |
| `iframe` | Un marco que muestra dentro de tu página algo de otro sitio, como un mapa de Google |

## Paso 1. Actualiza el revisor y enciende el sitio

1. Abre tu repositorio en VS Code y, en la terminal, escribe

   ```
   npm run revisar -- actualizar
   ```

   **Así sabes que te salió:** dice «Revisor actualizado». Si debajo aparece una línea en inglés que empieza con
   `Assertion failed`, no pasa nada; el revisor ya quedó actualizado y esa línea no vuelve a salir.
2. Enciende el sitio con `npm run dev` y abre `http://localhost:4321`.

## Paso 2. La estructura de una página

Toda página del sitio tiene las mismas cuatro partes. Así el navegador, Google y los lectores de pantalla saben qué
es cada cosa.

| Etiqueta | Qué va dentro |
| :-- | :-- |
| `<header>` | El nombre del negocio y el menú |
| `<nav>` | El menú, una lista de enlaces a las páginas |
| `<main>` | El contenido de esa página, uno solo por página |
| `<footer>` | Dirección, teléfono y lo que se repite al final |

Dentro de `<main>` va **un solo `<h1>`**, el título principal de la página. Los subtítulos son `<h2>` y, dentro de
ellos, `<h3>`, sin saltarse niveles. Cada bloque de contenido va en un `<section>` con su `<h2>`.

1. Abre `src/pages/index.astro` y reemplaza todo lo que hay entre `<body>` y `</body>` por esto. Cambia los textos por
   los de tu negocio (el nombre, la frase y el número).

   ```astro
   <header>
   	<a href="/">Nombre del negocio</a>
   	<nav aria-label="Principal">
   		<ul>
   			<li><a href="/" aria-current="page">Inicio</a></li>
   			<li><a href="/carta">Carta</a></li>
   			<li><a href="/nosotros">Nosotros</a></li>
   			<li><a href="/contacto">Contacto</a></li>
   		</ul>
   	</nav>
   </header>

   <main>
   	<section>
   		<h1>Nombre del negocio</h1>
   		<p>Qué ofrece el negocio, en una frase.</p>
   	</section>
   </main>

   <footer>
   	<address>
   		Dirección del negocio, ciudad<br />
   		<a href="tel:+51900000000">Llamar al 900 000 000</a>
   	</address>
   </footer>
   ```

2. Si tu negocio no tiene carta, cambia **Carta** y `/carta` por lo que tenga sentido, como **Servicios** y
   `/servicios` o **Productos** y `/productos`. Usa minúsculas, sin tildes ni espacios en la ruta.
3. Guarda con **Ctrl + S**.

**Así sabes que te salió:** el navegador muestra el nombre del negocio, el menú como una lista de enlaces y el pie.
Se ve simple a propósito; los estilos llegan la semana 3.

## Paso 3. Crea las otras tres páginas

En Astro, **cada archivo de `src/pages` es una página** y su nombre es su ruta. `carta.astro` se abre en
`/carta`.

1. En el explorador de VS Code, haz clic derecho sobre `src/pages` y elige **New File** (Nuevo archivo). Escribe
   `carta.astro` (o el nombre de tu ruta del paso 2).
2. Copia todo `index.astro` y pégalo en el archivo nuevo. Luego cambia tres cosas.
   - El `<title>`, que diga qué página es, por ejemplo `Carta | Nombre del negocio`. **Cada página lleva su propio
     título**, porque es lo que se ve en la pestaña y en Google.
   - El `<h1>` y el contenido de `<main>`.
   - En el menú, mueve `aria-current="page"` al enlace de esa página. Así un lector de pantalla dice en qué página
     estás.
3. Repite para `nosotros.astro` y `contacto.astro`.
4. Llena cada página con el contenido de tu brief. En **Nosotros**, la historia del negocio y qué lo hace distinto; en
   **Contacto**, cómo pedir o reservar, la dirección y el horario. Usa `<h2>` para los subtítulos, `<p>` para los
   párrafos y `<ul>` con `<li>` para las listas.

La cabecera y el pie se repiten en las cuatro páginas. Por ahora se copian; en la semana 5 aprenderás a escribirlos
una sola vez.

**Así sabes que te salió:** haces clic en cada opción del menú y llegas a su página, y cada pestaña muestra un título
distinto.

## Paso 4. Enlaces para llamar y para WhatsApp

- **Para llamar**, `tel:` con el código del país y sin espacios. En el celular abre el marcador con el número listo.

  ```astro
  <a href="tel:+51900000000">Llamar al 900 000 000</a>
  ```

- **Para WhatsApp**, `https://wa.me/` con el código del país (51 en Perú) y el número, sin `+`, espacios ni guiones.

  ```astro
  <a href="https://wa.me/51900000000">Pide por WhatsApp</a>
  ```

Pon el de WhatsApp en Inicio y en Contacto, y el de llamar en el pie.

**Así sabes que te salió:** al hacer clic en el enlace de WhatsApp se abre WhatsApp con el chat del negocio.

## Paso 5. Fotos con `<Image />`

Las fotos van en `src/assets` y se **importan**. Así Astro las convierte a un formato liviano y las achica al tamaño
que pidas, y el sitio carga rápido aunque el celular esté con datos.

1. Crea la carpeta `src/assets` (clic derecho sobre `src`, **New Folder**) y arrastra ahí tus fotos. Ponles nombres en
   minúsculas, sin tildes ni espacios, como `local.jpg` o `pollo-a-la-brasa.jpg`.
2. En la página, entre las dos líneas `---` de arriba, importa el componente y cada foto.

   ```astro
   ---
   import { Image } from 'astro:assets';
   import fotoLocal from '../assets/local.jpg';
   ---
   ```

3. Donde quieras la foto, escribe

   ```astro
   <Image src={fotoLocal} alt="Salón del restaurante con mesas de madera y plantas junto a la ventana" width={640} />
   ```

   `width` es el ancho en píxeles con que Astro la guarda; 640 para una foto grande y 320 para una pequeña.

**Cómo se escribe un buen `alt`.** Di qué se ve, como se lo contarías a alguien por teléfono. «Foto» o «imagen1» no
dicen nada; «Tajada de torta de chocolate en un plato blanco» sí. No empieces con «imagen de», porque el lector de
pantalla ya avisa que es una imagen.

**Así sabes que te salió:** la foto se ve en la página. Si haces clic derecho sobre ella y eliges **Abrir imagen en una
pestaña nueva**, en la dirección aparece `webp`, el formato liviano que hizo Astro.

## Paso 6. Una tabla de precios u horarios

Una tabla es para datos que se leen por filas y columnas, como una carta con precios o un horario de atención. Los
encabezados de las columnas van en `<th>`, para que el lector de pantalla diga «Precio» al leer cada fila.

```astro
<table>
	<caption>Bebidas</caption>
	<thead>
		<tr>
			<th scope="col">Producto</th>
			<th scope="col">Precio</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Café pasado</td>
			<td>S/ 5.00</td>
		</tr>
	</tbody>
</table>
```

`<caption>` es el nombre de la tabla, `<thead>` la fila de encabezados y `<tbody>` las filas de datos. Cada `<tr>` es
una fila.

**Así sabes que te salió:** la tabla se ve con los encabezados en negrita.

## Paso 7. El mapa

1. Busca el negocio en **Google Maps** (o su dirección), pulsa **Compartir**, elige la pestaña **Insertar un mapa** y
   pulsa **Copiar HTML**.
2. Pégalo en `contacto.astro`, dentro de un `<section>` con su `<h2>Dónde estamos</h2>`.
3. Haz dos cambios en lo que pegaste.
   - Agrega un `title` que diga qué muestra el mapa, por ejemplo `title="Mapa del negocio en Rioja"`. Sin él, un
     lector de pantalla solo dice «marco».
   - Borra `style="border:0;"`. En la semana 3 los estilos van en otro lugar.

**Así sabes que te salió:** el mapa se ve en la página de Contacto con el negocio marcado.

## Paso 8. Revisa tu entrega

En una segunda terminal escribe

```
npm run revisar -- 2
```

Lee cada línea que dice **Falta** y lo que tiene debajo. Corrige, guarda y vuelve a revisar.

## Paso 9. Guarda tu avance en GitHub

1. En **Control de código fuente** (**Ctrl + Shift + G**) escribe el mensaje `Semana 2, cuatro páginas`.
2. Pulsa **Commit** y luego **Sync Changes**.

**Así sabes que te salió:** el revisor dice **Puntaje 100 de 100** y en GitHub ya están tus archivos de `src/pages` y
`src/assets`.

## Entrega

En el aula, en la tarea **Semana 2**, pega el enlace de tu repositorio. Plazo hasta el miércoles 14 de octubre a las
23:59. Además del revisor, el docente mira que el contenido sea el del negocio real.

## Si algo falla

| Lo que ves | Qué hacer |
| :-- | :-- |
| La foto sale rota y el revisor dice «no carga, porque esa ruta no existe en el sitio» | La pusiste con `<img src="../assets/…">`. Astro no copia `src/assets` al sitio; impórtala y muéstrala con `<Image />`, como en el paso 5 |
| `[UNRESOLVED_IMPORT] Could not resolve '../assets/…'` | El nombre del archivo no coincide con el de la carpeta. Revisa letra por letra y la extensión (`.jpg`, `.jpeg`, `.png`) |
| `[ImageMissingAlt] Image missing "alt" property` | A un `<Image />` le falta su `alt` |
| Al hacer clic en el menú sale «404» | El `href` no coincide con el nombre del archivo; `/carta` necesita `src/pages/carta.astro` |
| El revisor dice que una página tiene 2 `<h1>` | Deja un solo `<h1>` y convierte los demás en `<h2>` |
| El mapa no aparece | Copiaste el enlace y no el HTML; vuelve a **Insertar un mapa** y pulsa **Copiar HTML** |
| `[CompilerError] Expected corresponding JSX closing tag for 'article'` | Una etiqueta quedó sin cerrar (aquí, un `<article>`); busca dónde la abriste y agrega su cierre |
| Al terminar un comando aparece `Assertion failed: !(handle->flags & UV_HANDLE_CLOSING)` | Es un aviso de Node en Windows al cerrarse; si lo de arriba dice que salió bien, ignóralo |

## Para saber más

- Las etiquetas de HTML, en español: https://developer.mozilla.org/es/docs/Web/HTML/Element
- Imágenes en Astro: https://docs.astro.build/es/guides/images/
- La semana que viene le damos estilo al sitio, primero con CSS y luego con Tailwind.
