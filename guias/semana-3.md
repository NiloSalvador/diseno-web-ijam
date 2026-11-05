# Semana 3 — El CSS que hay que entender y Tailwind

Esta semana tu sitio toma los colores y las fuentes de tu marca, los que escribiste en el brief. Primero escribes CSS
a mano en la página de inicio, para entender cómo funciona, y luego pasas las cuatro páginas a Tailwind. Al terminar
tendrás

- La página de inicio con tus primeras reglas de CSS, para entender la cascada, el modelo de caja y las unidades.
- Tailwind instalado y funcionando en las cuatro páginas.
- Los colores de tu marca (al menos tres) y su fuente guardados en `@theme` y usados con clases como `bg-selva` o
  `font-titulo`.
- Ningún estilo escrito dentro de una etiqueta (`style=""`) ni colores sueltos como `bg-[#1f4d3a]`.

Todavía sin columnas ni diseño para el celular, porque eso llega la semana 4.

> **Plazo.** Del jueves 15 al miércoles 21 de octubre a las 23:59. En el aula tienes dos vídeos. La lección 3.1
> acompaña los pasos 1 al 4 y la 3.2, los pasos 5 al 9. Las dudas van por Google Chat.

## Antes de empezar

- Haber entregado la semana 2, porque esta semana se construye sobre esas mismas cuatro páginas.
- Mira los dos vídeos de la semana en el aula (lecciones 3.1 y 3.2). En ellos Café Orquídea, el sitio del ejemplo,
  toma su marca con los mismos pasos de esta guía.
- Ten a mano los colores y las fuentes de tu brief. Si tus colores no tienen su código (como `#1f4d3a`), escribe
  «selector de color» en Google, elige el más parecido y copia el código que empieza con `#`.

## Palabras nuevas

| Palabra | Qué es |
| :-- | :-- |
| CSS | El lenguaje que dice cómo se ve cada parte de la página, sus colores, letras y espacios |
| Regla | Un selector y sus declaraciones entre llaves, como `h1 { color: #6b3e26; }` |
| Selector | A quién se aplica la regla, por ejemplo `h1`, `nav a` o `.boton` |
| Declaración | Una propiedad y su valor, como `color: #6b3e26;`. Siempre termina en punto y coma |
| Cascada | Cómo decide el navegador cuando dos reglas chocan. Gana la más específica y, si empatan, la que va después |
| Modelo de caja | Toda etiqueta es una caja con contenido, relleno (`padding`), borde (`border`) y margen (`margin`) |
| `rem` | Una medida que depende del tamaño de letra del navegador. 1 rem son 16 px si nadie lo cambió |
| Tailwind | Una herramienta de clases ya hechas, donde cada clase es una propiedad de CSS (`p-4` es `padding: 1rem`) |
| `@theme` | El lugar donde le dices a Tailwind los colores y las fuentes de tu marca |

## Paso 1. Actualiza el revisor y enciende el sitio

1. Abre tu repositorio en VS Code y, en la terminal, escribe

   ```
   npm run revisar -- actualizar
   ```

   **Así sabes que te salió.** Dice «Revisor actualizado». La semana 3 necesita este revisor nuevo; con el anterior te
   pedirá que lo actualices.
2. Enciende el sitio con `npm run dev` y abre `http://localhost:4321`.

## Paso 2. Tu primera regla de CSS

En Astro, los estilos de una página van en un bloque `<style>`. Ese bloque **solo afecta a su página**, así que lo que
escribas en Inicio no cambia Carta ni las demás.

1. Abre `src/pages/index.astro` y, al final del archivo, después de `</html>`, escribe esto. Cambia los códigos de color
   por los de tu marca.

   ```astro
   <style>
   	body {
   		margin: 0;
   		background-color: #f6efe4;
   		color: #2b1b12;
   		font-family: system-ui, sans-serif;
   		font-size: 1.0625rem;
   		line-height: 1.6;
   	}

   	h1,
   	h2,
   	h3 {
   		font-family: Georgia, serif;
   		color: #6b3e26;
   	}
   </style>
   ```

2. Guarda con **Ctrl + S**.

Cada regla tiene dos partes. Antes de las llaves va el **selector** (`body`, a quién se aplica) y dentro, las
**declaraciones** (`color: #6b3e26;`, qué cambia). `h1, h2, h3` aplica la misma regla a los tres títulos.

**Así sabes que te salió.** Inicio cambia de fondo y los títulos toman el color de tu marca. Carta, Nosotros y Contacto
siguen igual, porque el `<style>` solo es de Inicio.

## Paso 3. La cascada, cuando dos reglas chocan

Agrega estas reglas dentro del mismo `<style>`.

```css
header {
	background-color: #1f4d3a;
	padding: 1rem 1.5rem;
}

header a {
	color: #f6efe4;
	font-weight: 600;
	text-decoration: none;
}

a {
	color: #8e3462;
}
```

Fíjate en tres cosas.

- **Herencia.** Nadie le dio color a los párrafos, pero salen del color del `body`, porque el texto lo hereda de la caja
  que lo contiene.
- **Lo específico gana.** `a` pinta todos los enlaces, pero `header a` (los enlaces dentro de la cabecera) es más
  específica y gana, aunque esté escrita antes.
- **Si empatan, gana la última.** Si escribes dos veces `a { color: … }`, vale la de más abajo.

**Así sabes que te salió.** Los enlaces del menú se ven claros sobre la cabecera y los del contenido, del color de
acento.

## Paso 4. El modelo de caja y las unidades

Toda etiqueta es una caja. Por dentro tiene el **contenido**, luego el **relleno** (`padding`), el **borde**
(`border`) y, por fuera, el **margen** (`margin`), que la separa de las demás.

1. En Inicio, agrega `class="boton"` al enlace de WhatsApp.

   ```astro
   <a class="boton" href="https://wa.me/51900000000">Pide por WhatsApp</a>
   ```

2. Agrega estas reglas al `<style>`. Un selector que empieza con punto, como `.boton`, se aplica a las etiquetas que
   llevan esa clase.

   ```css
   .boton {
   	display: inline-block;
   	padding: 0.75rem 1.5rem;
   	border: 2px solid #b5487e;
   	border-radius: 999px;
   	margin-top: 1rem;
   	background-color: #b5487e;
   	color: #fcf9f4;
   	font-weight: 600;
   	text-decoration: none;
   }

   main {
   	max-width: 48rem;
   	margin: 0 auto;
   	padding: 2rem 1.5rem;
   }

   img {
   	max-width: 100%;
   	height: auto;
   	border-radius: 1rem;
   }
   ```

`margin: 0 auto` deja el margen de arriba y abajo en cero y reparte el de los lados por igual, así que el contenido
queda centrado. Y estas son las tres unidades que más usarás.

| Unidad | Para qué |
| :-- | :-- |
| `px` | Medidas fijas y pequeñas, como el grosor de un borde |
| `rem` | Letras y espacios. Si la persona agranda la letra de su navegador, todo crece con ella |
| `%` | Una parte de la caja que la contiene. `max-width: 100%` hace que la foto nunca sea más ancha que su caja |

**Así sabes que te salió.** El enlace de WhatsApp se ve como un botón redondeado. Haz clic derecho sobre él y elige
**Inspeccionar**; en el panel **Estilos** (Styles), al final, aparece su caja con el margen, el borde y el relleno.

## Paso 5. Instala Tailwind

Escribir CSS a mano para cuatro páginas es largo y fácil de desordenar. Tailwind trae clases ya hechas, y cada una es
una propiedad de CSS que ya conoces.

1. En la terminal donde corre el sitio, pulsa **Ctrl + C** para detenerlo y escribe

   ```
   npx astro add tailwind
   ```

   A cada pregunta responde **Yes** con **Enter**. El comando instala Tailwind, crea `src/styles/global.css` y agrega
   Tailwind a `astro.config.mjs`.
2. Como todavía no tienes un molde común para las páginas (llega en la semana 5), importa los estilos en **cada una de
   las cuatro páginas**. Entre las dos líneas `---` de arriba, agrega

   ```astro
   import '../styles/global.css';
   ```

3. Vuelve a encender el sitio con `npm run dev`.

**Así sabes que te salió.** En Carta, Nosotros y Contacto los títulos se ven del mismo tamaño que el texto y las listas
pierden sus viñetas. Es lo esperado, porque Tailwind quita los estilos que trae el navegador para que tú decidas cada uno.

## Paso 6. Tu marca en `@theme`

1. Abre `src/styles/global.css` y, debajo de la línea que ya tiene, escribe tus colores y tus fuentes. Ponles nombres
   cortos, en minúsculas y sin tildes, y cambia los códigos por los de tu marca.

   ```css
   @import "tailwindcss";

   @theme {
   	/* Los colores de la marca */
   	--color-selva: #1f4d3a;
   	--color-crema: #f6efe4;
   	--color-cafe: #6b3e26;
   	--color-orquidea: #b5487e;

   	/* Tonos de apoyo para el texto y los enlaces */
   	--color-crema-claro: #fcf9f4;
   	--color-cafe-oscuro: #2b1b12;
   	--color-orquidea-oscuro: #8e3462;
   	--color-orquidea-claro: #edbcd5;

   	/* Las fuentes, cada una con otra de reserva */
   	--font-titulo: "Fraunces", Georgia, serif;
   	--font-texto: "Inter", system-ui, sans-serif;
   }
   ```

   Cada `--color-nombre` se vuelve las clases `bg-nombre`, `text-nombre` y `border-nombre`, y cada `--font-nombre`, la
   clase `font-nombre`.
2. Instala las fuentes de tu brief. Fontsource tiene las de Google Fonts listas para Astro (https://fontsource.org).
   Detén el sitio y escribe, con los nombres de tus fuentes en minúsculas y con guiones,

   ```
   npm install @fontsource/fraunces @fontsource/inter
   ```

   Por ejemplo, Playfair Display es `@fontsource/playfair-display`.
3. En cada página, encima de la línea del paso 5, importa los grosores que usarás. 400 es el normal y 600, el
   seminegrita.

   ```astro
   import '@fontsource/fraunces/600.css';
   import '@fontsource/inter/400.css';
   import '@fontsource/inter/600.css';
   import '../styles/global.css';
   ```

4. Enciende de nuevo el sitio.

## Paso 7. Cada clase es una propiedad de CSS

Ahora le das estilo a cada etiqueta con clases. Esta tabla compara el CSS de Inicio con su clase de Tailwind.

| CSS | Clase de Tailwind |
| :-- | :-- |
| `background-color: #1f4d3a;` | `bg-selva` |
| `color: #6b3e26;` | `text-cafe` |
| `font-family: "Fraunces", Georgia, serif;` | `font-titulo` |
| `padding: 1rem 1.5rem;` | `px-6 py-4` |
| `max-width: 48rem; margin: 0 auto;` | `max-w-3xl mx-auto` |
| `border-radius: 999px;` | `rounded-full` |
| `font-size: 3rem;` | `text-5xl` |
| `font-weight: 600;` | `font-semibold` |

En los espacios, cada número son 4 px. `p-4` es `padding: 1rem` (16 px) y `px-6` es el relleno de los lados de 1,5 rem
(24 px).

1. En Inicio, pon las clases en la etiqueta que quieres cambiar. Así quedan el `body`, la cabecera y el botón de Café
   Orquídea.

   ```astro
   <body class="bg-crema font-texto leading-relaxed text-cafe-oscuro antialiased">
   	<header class="bg-selva px-6 py-4">
   		<a href="/" class="font-titulo text-2xl font-semibold text-crema">Café Orquídea</a>
   ```

   ```astro
   <a href="https://wa.me/51900000000" class="inline-block rounded-full bg-orquidea px-6 py-3 font-semibold text-crema-claro hover:bg-orquidea-oscuro">
   	Pide por WhatsApp
   </a>
   ```

   `hover:` aplica la clase solo cuando el mouse pasa por encima.
2. Cuando Inicio se vea igual que con tu `<style>`, borra el bloque `<style>` entero.
3. Haz lo mismo en las otras tres páginas. Estas clases te ahorran tiempo.
   - `space-y-4` en un `<section>` separa sus párrafos, porque Tailwind les quitó el margen.
   - `list-disc pl-6` en un `<ul>` le devuelve las viñetas.
   - `border-b border-cafe/20` en las celdas de una tabla pone una línea debajo; el `/20` es el color al 20 %.
   - `w-full rounded-2xl` en el mapa lo hace ocupar todo el ancho con las esquinas redondeadas.

Dos reglas para que el revisor te dé por bueno el paso.

- **Nada de `style=""` dentro de las etiquetas.** Todo estilo va con clases.
- **Nada de colores sueltos como `bg-[#1f4d3a]`.** Si te falta un color, agrégalo a `@theme` con un nombre y usa ese
  nombre.

**Así sabes que te salió.** Las cuatro páginas tienen los colores y las fuentes de tu marca, y el botón cambia de color
al pasar el mouse.

## Paso 8. Revisa tu entrega

En una segunda terminal escribe

```
npm run revisar -- 3
```

Lee cada línea que dice **Falta** y lo que tiene debajo. Corrige, guarda y vuelve a revisar.

## Paso 9. Guarda tu avance en GitHub

1. En **Control de código fuente** (**Ctrl + Shift + G**) escribe el mensaje `Semana 3, la marca con Tailwind`.
2. Pulsa **Commit** y luego **Sync Changes**.

**Así sabes que te salió.** El revisor dice **Puntaje 100 de 100** y en GitHub ya está tu archivo
`src/styles/global.css`.

## Entrega

En el aula, en la tarea **Semana 3**, pega el enlace de tu repositorio. Plazo hasta el miércoles 21 de octubre a las
23:59. Además del revisor, el docente mira que los colores y las fuentes sean los de tu brief y que todo se lea bien.

## Si algo falla

| Lo que ves | Qué hacer |
| :-- | :-- |
| Un color no se aplica y el revisor dice «la clase … no tiene estilos, porque Tailwind no la encontró escrita en tu código» | Armaste la clase pegando textos, como `class={"bg-" + color}`. Tailwind busca en tu código clases escritas completas y esa no la ve. Escríbela entera (`bg-selva`). Si depende de un dato, guarda las clases completas en un objeto, como `const fondos = { selva: 'bg-selva', cafe: 'bg-cafe' }`, y usa `fondos[color]` |
| Una página sale sin colores ni fuentes y el revisor dice «no recibe los estilos de Tailwind» | A esa página le falta `import '../styles/global.css';` entre las dos líneas `---` de arriba |
| Un color de `@theme` no se aplica y el revisor no avisa nada | La clase no se llama igual que en `@theme`. `--color-selva` da `bg-selva`, no `bg-verde` ni `bg-Selva` |
| Escribiste estilos en el `<style>` de Inicio y en Carta no se ven | Es lo esperado. En Astro, el `<style>` de una página solo afecta a esa página; para todo el sitio usa las clases de Tailwind |
| Después de instalar Tailwind los títulos se ven del tamaño del texto, los párrafos se pegan y las listas pierden las viñetas | Tailwind quita los estilos del navegador. Dale tamaño a los títulos (`text-5xl`, `text-3xl`), separa con `space-y-4` y usa `list-disc pl-6` en las listas |
| `Rolldown failed to resolve import "@fontsource/fraunces/600.css"` | La fuente no está instalada o su nombre tiene un error. Escribe `npm install @fontsource/` seguido del nombre de tu fuente y revisa que coincida letra por letra |
| El revisor dice «la etiqueta lleva style="border:0;"» | Quedó del mapa de Google. Borra el atributo `style`; con Tailwind el mapa ya no lleva borde |
| El revisor dice «la clase bg-[#…] pone un color suelto» | Agrega ese color a `@theme` con un nombre y cambia la clase por `bg-` y ese nombre |
| `la ejecución de scripts está deshabilitada en este sistema` | Estás en PowerShell; cambia la terminal a **Símbolo del sistema**, como en el paso 7 de la semana 1 |

## Para saber más

- [CSS, en español](https://developer.mozilla.org/es/docs/Web/CSS)
- [Estilos en Astro, en español](https://docs.astro.build/es/guides/styling/)
- [Las clases de Tailwind](https://tailwindcss.com/docs), en inglés; su buscador encuentra cada propiedad de CSS
- La semana que viene acomodas el contenido en columnas y tarjetas, y lo pruebas primero en el celular.
