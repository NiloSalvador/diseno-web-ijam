# Semana 5 — Componentes, molde de página y datos

Hasta ahora la cabecera y el pie están copiados en las cuatro páginas. Si cambias el teléfono, tienes que cambiarlo
cuatro veces y es fácil olvidar una. Esta semana cada cosa se escribe una sola vez. Primero partes tu sitio en piezas
que se reutilizan, los componentes, y en un molde que comparten las cuatro páginas. Luego escribes tus productos o
servicios en un archivo de datos y la página arma sola una tarjeta por cada uno. Al terminar tendrás

- `src/layouts/Layout.astro`, el molde de página con el `<head>`, la cabecera, el pie y un `<slot />` donde entra
  cada página.
- La cabecera y el pie como componentes, `Header.astro` y `Footer.astro`, escritos una sola vez.
- Una tarjeta, `Tarjeta.astro`, que recibe sus datos por props y sirve para cualquier producto.
- Tu catálogo en `src/data/`, con cuatro elementos o más, convertido en tarjetas con `.map()`.
- El sitio igual que en la semana 4 por fuera, pero mucho más fácil de cambiar por dentro.

> **Plazo.** Todas las tareas y cuestionarios del curso cierran el **domingo 29 de noviembre a las 23:59**. Para
> llegar sin apuro, termina las semanas 4 y 5 hasta el domingo 15 de noviembre. En el aula tienes dos vídeos. La
> **Lección 5.1, Molde de página y componentes** acompaña los pasos 2 al 7 y la **Lección 5.2, El catálogo desde un
> archivo de datos**, los pasos 8 al 12. Las dudas van por Google Chat.

## Cómo terminar el curso

- **Ritmo.** Semanas 4 y 5 hasta el domingo 15 de noviembre, 6 y 7 hasta el domingo 22, y la 8 con la sustentación
  hasta el domingo 29 de noviembre a las 23:59, cuando cierra todo.
- **Una sola entrega que crece.** Todas las tareas llevan el mismo enlace, el de tu repositorio, y el revisor de cada
  semana comprueba también lo de las anteriores.
- **Si vas atrasado, la ruta corta.** No empieces otro proyecto. En tu mismo repositorio actualiza el revisor (paso 1)
  y escribe `npm run revisar -- 5`. Cada **Falta** es algo pendiente de las semanas 1 a 5. Arréglalos de arriba
  abajo con la guía de esa semana (la tabla del [inicio](../README.md) dice el tema de cada una) y, al terminar cada
  semana, entrega su tarea con el mismo enlace.
- **Si te trabas**, escribe por Google Chat con el paso de la guía y el mensaje exacto del revisor o de la terminal.

## Antes de empezar

- Haber terminado la semana 4, porque el molde se arma con la cabecera y el pie que ya acomodaste para el celular.
- Mira los dos vídeos de la semana. En ellos Café Orquídea, el sitio del ejemplo, se reorganiza con los mismos pasos
  de esta guía.
- Esta semana escribes un poco de JavaScript. No hace falta haber programado antes, porque el paso 8 lo explica desde
  cero.

## Palabras nuevas

| Palabra | Qué es |
| :-- | :-- |
| Componente | Un archivo `.astro` con una parte de la página que se escribe una vez y se usa donde haga falta, como `<Footer />` |
| Molde de página | En inglés, *layout*. El componente con lo que comparten todas las páginas, el `<head>`, la cabecera y el pie. Cada página pone solo su contenido |
| Props | Los datos que le pasas a un componente al usarlo, como `title="Carta"`. Se escriben igual que los atributos de una etiqueta |
| `<slot />` | El hueco del molde donde entra el contenido de cada página |
| `import` | La línea que trae un componente, una foto o unos datos de otro archivo para usarlos aquí |
| Archivo de datos | Un archivo `.js` en `src/data/` con la información de tus productos o servicios, separada del diseño |
| `.map()` | Recorre una lista y, por cada elemento, devuelve algo. Aquí, una tarjeta |

## Paso 1. Actualiza el revisor y enciende el sitio

1. Abre tu repositorio en VS Code y, en la terminal, escribe

   ```
   npm run revisar -- actualizar
   ```

   **Así sabes que te salió.** Dice «Revisor actualizado». La semana 5 necesita el revisor 5; con uno anterior te
   pedirá que lo actualices.
2. Escribe `npm run revisar -- 5`. Marca **Falta** en lo nuevo de esta semana, el molde, los componentes y el
   catálogo. Café Orquídea, con la semana 4 completa, empieza con **74 de 100**. Al terminar la guía, todo dice
   **Cuadra**.
3. Enciende el sitio con `npm run dev` y abre `http://localhost:4321`.

## Paso 2. El pie, tu primer componente

Un componente es un archivo `.astro` dentro de `src/components/`. Lo que escribes debajo de los `---` es lo que se
pinta en cada lugar donde lo uses. El pie dice lo mismo en todas las páginas, así que es el más fácil para empezar.

1. En el explorador de VS Code, haz clic derecho sobre `src` y elige **New File** (Nuevo archivo). Escribe
   `components/Footer.astro` y pulsa **Enter**. VS Code crea la carpeta y el archivo juntos.
2. Abre `src/pages/index.astro`, copia todo el `<footer>`, desde `<footer` hasta `</footer>`, y pégalo en
   `Footer.astro` debajo de dos líneas `---`. Por ahora no lo borres de las páginas; eso se hace en el paso 5.

```astro
---
// El pie de todas las páginas. No necesita props, porque dice lo mismo en todo el sitio.
---

<footer class="bg-selva text-sm text-crema">
	<div class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-start md:justify-between md:gap-8">
		<address class="not-italic">
			Jr. Grau 345, Rioja, San Martín<br />
			<a href="tel:+51942123456" class="font-semibold text-orquidea-claro underline underline-offset-4">Llamar al 942 123 456</a>
		</address>
		<p class="max-w-sm">Café Orquídea es un negocio ficticio, creado para el curso Diseño Web del IESTP John A. Mackay.</p>
	</div>
</footer>
```

El nombre del archivo empieza con mayúscula, `Footer`, porque así Astro sabe que `<Footer />` es un componente tuyo y
no una etiqueta de HTML. Las líneas que empiezan con `//` son comentarios, notas para quien lee el código que no se
ven en la página.

**Así sabes que te salió.** VS Code no marca nada en rojo en `Footer.astro`. En el navegador todavía no cambia nada,
porque el componente aún no se usa. Lo usará el molde del paso 4.

## Paso 3. La cabecera, un componente con props

La cabecera es casi igual en todas las páginas, con una diferencia. El enlace de la página que estás viendo lleva
`aria-current="page"` y va subrayado. Para saber cuál es, la cabecera recibe un dato, la dirección de la página, por
**props**.

1. Crea `src/components/Header.astro` igual que el pie y copia ahí el `<header>` de una de tus páginas.
2. Arriba, entre los `---`, recibe el prop `pagina`, y en cada enlace del menú cambia el `aria-current` fijo por uno
   que dependa de ese dato.

```astro
---
// La cabecera de todas las páginas. Recibe por props «pagina», la dirección de la página que se
// está viendo, y marca ese enlace del menú con aria-current="page". La clase
// aria-[current=page]:underline subraya solo el enlace que tiene esa marca.
const { pagina } = Astro.props;
---

<header class="bg-selva">
	<div class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
		<a href="/" class="font-titulo text-2xl font-semibold text-crema">Café Orquídea</a>
		<nav aria-label="Principal">
			<ul class="flex flex-wrap gap-x-6 gap-y-2">
				<li><a href="/" aria-current={pagina === '/' ? 'page' : undefined} class="font-semibold text-crema underline-offset-4 hover:text-orquidea-claro aria-[current=page]:underline">Inicio</a></li>
				<li><a href="/carta" aria-current={pagina === '/carta' ? 'page' : undefined} class="font-semibold text-crema underline-offset-4 hover:text-orquidea-claro aria-[current=page]:underline">Carta</a></li>
				<li><a href="/nosotros" aria-current={pagina === '/nosotros' ? 'page' : undefined} class="font-semibold text-crema underline-offset-4 hover:text-orquidea-claro aria-[current=page]:underline">Nosotros</a></li>
				<li><a href="/contacto" aria-current={pagina === '/contacto' ? 'page' : undefined} class="font-semibold text-crema underline-offset-4 hover:text-orquidea-claro aria-[current=page]:underline">Contacto</a></li>
			</ul>
		</nav>
	</div>
</header>
```

Tres cosas nuevas.

- `const { pagina } = Astro.props;` saca de los props el dato `pagina`. `Astro.props` trae todo lo que se escribió al
  usar el componente, como `pagina="/carta"`.
- Las llaves `{ }` en un atributo le dicen a Astro que ahí va JavaScript y no un texto fijo.
  `pagina === '/carta' ? 'page' : undefined` se lee así. Si `pagina` es igual a `'/carta'`, pon `'page'`; si no, no
  pongas nada. `===` compara dos valores y `? :` elige entre dos respuestas.
- `aria-[current=page]:underline` es una clase de Tailwind que subraya el enlace solo cuando tiene
  `aria-current="page"`. Por eso la misma clase va en los cuatro enlaces y solo se subraya el de la página actual.

**Así sabes que te salió.** VS Code no marca nada en rojo. En el navegador todavía no cambia nada, igual que con el
pie.

## Paso 4. El molde de página

Cada página repite el `<html>`, el `<head>`, las fuentes, la cabecera y el pie. El molde lo junta todo en un archivo y
deja un hueco, `<slot />`, donde entra lo propio de cada página.

1. Haz clic derecho sobre `src`, elige **New File** y escribe `layouts/Layout.astro`.
2. Copia el molde de Café Orquídea.

```astro
---
// El molde de página de Café Orquídea (en inglés, «layout»). Las cuatro páginas lo usan, así el
// <head>, la cabecera y el pie se escriben una sola vez. Cada página le pasa por props su título,
// su descripción y su dirección, y su contenido entra donde dice <slot />.
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
// Las fuentes de la marca y los estilos de Tailwind, una sola vez para todo el sitio.
import '@fontsource/fraunces/600.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '../styles/global.css';

const { title, description, pagina } = Astro.props;
---

<html lang="es">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<link rel="icon" href="/favicon.ico" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="description" content={description} />
		<meta name="generator" content={Astro.generator} />
		<title>{title}</title>
	</head>
	<body class="bg-crema font-texto leading-relaxed text-cafe-oscuro antialiased">
		<Header pagina={pagina} />
		<slot />
		<Footer />
	</body>
</html>
```

- `import Header from '../components/Header.astro';` trae la cabecera. La ruta empieza con `../` porque el molde está
  en `src/layouts` y hay que subir a `src` para entrar a `components`.
- Las líneas de las fuentes y de `global.css` se mudan aquí desde las páginas. Copia las tuyas, que tienen las fuentes
  de tu marca.
- El molde recibe tres props. `title` va en el `<title>` de la pestaña. `description` va en la etiqueta nueva
  `<meta name="description">`, el texto que Google muestra debajo del título. `pagina` pasa a la cabecera con
  `<Header pagina={pagina} />`.
- `<slot />` es el hueco. Lo que una página escriba entre `<Layout>` y `</Layout>` aparece justo ahí, entre la cabecera
  y el pie.

## Paso 5. Cada página usa el molde

1. Abre `src/pages/index.astro`. Entre los `---`, borra las líneas de las fuentes y de `global.css`, que ahora están en
   el molde, y agrega `import Layout from '../layouts/Layout.astro';`.
2. Borra todo lo que ahora pone el molde, con sus etiquetas de cierre. El `<html>`, el `<head>` con todo lo de adentro,
   el `<body>`, el `<header>` y el `<footer>`. Queda solo el `<main>`.
3. Envuelve el `<main>` en `<Layout>` con sus tres props.

```astro
---
// Inicio de Café Orquídea, el ejemplo del curso (negocio ficticio).
// Las fotos viven en src/assets y se importan para que Astro las optimice.
import { Image } from 'astro:assets';
import fotoLocal from '../assets/local.jpg';
import fotoCafe from '../assets/cafe-pasado.jpg';
import fotoDesayuno from '../assets/desayuno.jpg';
import fotoPostre from '../assets/postre.jpg';
// El molde de página pone el <head>, la cabecera, el pie, las fuentes y los estilos.
import Layout from '../layouts/Layout.astro';
---

<Layout title="Café Orquídea | Cafetería en Rioja" description="Café de la provincia, desayunos de la selva y postres caseros a media cuadra de la Plaza de Armas de Rioja. Pide por WhatsApp y pasa a recoger." pagina="/">
	<main>
		<!-- Todo lo que ya tenías dentro de <main>, sin cambios -->
	</main>
</Layout>
```

4. Haz lo mismo en Carta, Nosotros y Contacto. Cada página le pasa su propio título, su descripción y su dirección.

```astro
<Layout title="Carta | Café Orquídea" description="La carta de Café Orquídea con precios en soles. Café pasado, capuchino, tacacho con cecina, tamales, tortas y alfajores hechos en casa." pagina="/carta">
	<main class="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-16">
```

| Archivo | `title` | `pagina` |
| :-- | :-- | :-- |
| `index.astro` | `Café Orquídea \| Cafetería en Rioja` | `/` |
| `carta.astro` | `Carta \| Café Orquídea` | `/carta` |
| `nosotros.astro` | `Nosotros \| Café Orquídea` | `/nosotros` |
| `contacto.astro` | `Contacto \| Café Orquídea` | `/contacto` |

La `description` es una frase de unos 150 caracteres con lo que el cliente encuentra en esa página, distinta en cada
una.

**Así sabes que te salió.** Las cuatro páginas se ven igual que en la semana 4 y el enlace de la página que ves sigue
subrayado. Para comprobar que la cabecera ahora es una sola, cambia en `Header.astro` el texto «Contacto» por
«Contáctanos», guarda y mira que cambie en las cuatro páginas; luego déjalo como estaba. El revisor marca **Cuadra** en
«Todas las páginas usan el molde de página, con su `<slot />` y el `<head>`» y en «La cabecera y el pie son
componentes de src/components».

## Paso 6. El error típico, el molde sin `<slot />`

Si borras `<slot />` o te olvidas de escribirlo, Astro no avisa nada. La terminal de `npm run dev` no muestra errores y
hasta `npm run build` termina con «Complete!». Pero en el navegador cada página queda con la cabecera y el pie, y nada
entre ellos, porque el molde no tiene dónde poner el contenido.

El revisor sí lo encuentra.

```
Falta    Todas las páginas usan el molde de página, con su <slot /> y el <head>
         src/layouts/Layout.astro no tiene <slot />. Sin él, el contenido de las páginas no aparece. Escribe <slot /> entre la cabecera y el pie.
```

Debajo aparecen otras líneas de **Falta** de las semanas anteriores, como las del encabezado principal o las imágenes,
porque sin contenido las páginas se quedan sin ellos, y el puntaje se desploma. En Café Orquídea completo baja de 100 a
73. Todas se arreglan con lo mismo, escribiendo `<slot />` entre `<Header pagina={pagina} />` y `<Footer />`.

**Así sabes que te salió.** El contenido vuelve a aparecer y el revisor marca **Cuadra** otra vez en el molde.

## Paso 7. La tarjeta, un componente que recibe datos

En Inicio las tres tarjetas tienen la misma forma y solo cambian los datos. La tarjeta pasa a un componente con cinco
props, y en la página cada tarjeta se vuelve un `<Tarjeta />` con sus datos.

1. Crea `src/components/Tarjeta.astro` con el `<article>` de una de tus tarjetas, cambiando cada dato por su prop.

```astro
---
// Una tarjeta de producto. Recibe sus datos por props (nombre, descripcion, precio, foto y alt),
// así la misma tarjeta sirve para cualquier producto de la carta.
import { Image } from 'astro:assets';

const { nombre, descripcion, precio, foto, alt } = Astro.props;
---

<article class="flex flex-col overflow-hidden rounded-3xl bg-crema-claro shadow-lg shadow-cafe-oscuro/10">
	<Image class="aspect-4/3 w-full object-cover" src={foto} alt={alt} width={640} />
	<div class="flex flex-1 flex-col gap-2 p-6">
		<h3 class="font-titulo text-2xl font-semibold text-cafe">{nombre}</h3>
		<p>{descripcion}</p>
		<p class="mt-auto pt-2 text-xl font-semibold text-selva">{precio}</p>
	</div>
</article>
```

   `{nombre}` entre llaves pinta el valor del prop. Los nombres de los props van sin tildes ni espacios, como
   `descripcion`, para escribirlos igual en todas partes.
2. En `index.astro`, entre los `---`, agrega `import Tarjeta from '../components/Tarjeta.astro';`. Luego cambia cada
   `<article>` de la grilla por un `<Tarjeta />` con sus datos.

```astro
<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
	<Tarjeta
		nombre="Café pasado"
		descripcion="Café de altura del Alto Mayo, pasado en filtro de tela al momento."
		precio="S/ 5.00"
		foto={fotoCafe}
		alt="Taza de café pasado con granos tostados sobre una mesa de madera"
	/>
	<Tarjeta
		nombre="Tacacho con cecina"
		descripcion="El desayuno de la selva, con plátano verde asado y cecina ahumada."
		precio="S/ 18.00"
		foto={fotoDesayuno}
		alt="Plato de tacacho con cecina, salsa criolla y una taza de café"
	/>
	<Tarjeta
		nombre="Torta de chocolate"
		descripcion="Hecha en casa cada mañana con cacao de San Martín."
		precio="S/ 8.00"
		foto={fotoPostre}
		alt="Tajada de torta de chocolate con cobertura de chocolate en un plato blanco"
	/>
</div>
```

   Los textos van entre comillas. `foto={fotoCafe}` va entre llaves, porque no es un texto sino la foto que importaste.

**Así sabes que te salió.** Inicio se ve igual. Si en `Tarjeta.astro` cambias `rounded-3xl` por `rounded-lg`, cambian
las tres tarjetas a la vez (luego déjalo como estaba). El revisor sigue en **Falta** en el catálogo, «No hay ningún
archivo de datos en src/data…», y es lo esperado, porque eso se hace en la lección 5.2. Café Orquídea en este punto
tiene **88 de 100**.

### En tu proyecto, lección 5.1

1. Crea `Footer.astro` y `Header.astro` en `src/components` con tu pie y tu cabecera (pasos 2 y 3). Cada enlace de tu
   menú lleva su `aria-current` con la dirección de su página.
2. Crea `src/layouts/Layout.astro` (paso 4) y muda ahí las líneas de tus fuentes y de `global.css`.
3. Pasa tus cuatro páginas al molde (paso 5), cada una con su `title`, su `description` y su `pagina`.
4. Busca lo que en tu sitio se repite con la misma forma y conviértelo en un componente con props (paso 7).
5. Comprueba en el navegador que las cuatro páginas se vean como antes y escribe `npm run revisar -- 5`.

| Negocio | Lo que pasa a componente | Sus props |
| :-- | :-- | :-- |
| Taller de estructuras metálicas | `TarjetaTrabajo.astro`, un trabajo terminado con su foto | `nombre`, `descripcion`, `precio` (el precio desde), `foto`, `alt` |
| Concesionario | `TarjetaAuto.astro`, un modelo con su foto | `modelo`, `anio`, `precio`, `foto`, `alt` |
| Bodega | `TarjetaOferta.astro`, un producto en oferta | `nombre`, `presentacion`, `precio`, `foto`, `alt` |

## Paso 8. JavaScript desde cero, lo justo para esta semana

Para que las tarjetas salgan de un archivo de datos hace falta un poco de **JavaScript**, el lenguaje de programación
de la web. Si nunca programaste, son seis ideas y todas aparecen en el archivo de Café Orquídea.

Piensa en el cuaderno de pedidos de un negocio. Cada producto es una **ficha** con su nombre, su descripción y su
precio. El cuaderno con todas las fichas es una **lista**. Y armar la vitrina es pasar las hojas una por una y, por
cada ficha, poner una tarjeta. En JavaScript, la ficha es un objeto, la lista es un arreglo y pasar las hojas es
`.map()`.

| Idea | Cómo se escribe | Qué es |
| :-- | :-- | :-- |
| Constante | `const negocio = 'Café Orquídea';` | Un nombre que guarda un dato. Después usas el nombre en vez del dato. `const` dice que ese nombre no cambia de valor |
| Texto y número | `'Café pasado'` y `5` | El texto va entre comillas. El número va sin comillas, para poder hacer cuentas con él |
| Objeto | `{ nombre: 'Café pasado', precio: 5 }` | Una ficha. Cada dato tiene su nombre, dos puntos y su valor, y los datos se separan con comas |
| Arreglo | `[ ficha1, ficha2, ficha3 ]` | Una lista en orden, entre corchetes, con los elementos separados por comas |
| Función | `function soles(precio) { return 'S/ ' + precio.toFixed(2); }` | Una receta que recibe un dato y devuelve otro. `return` dice qué devuelve |
| `export` e `import` | `export const productos = […]` y `import { productos } from '../data/carta.js';` | `export` deja usar algo desde otro archivo e `import` lo trae. El nombre entre llaves debe ser idéntico al del `export` |

**Pruébalo.** Abre cualquier página en Chrome, pulsa **F12** y entra a la pestaña **Console**. Escribe
`const precio = 5;` y pulsa **Enter**. Luego escribe `'S/ ' + precio.toFixed(2)` y pulsa **Enter**. La consola
responde `'S/ 5.00'`. Así se arman los precios de esta semana.

## Paso 9. El archivo de datos

1. Haz clic derecho sobre `src`, elige **New File** y escribe `data/carta.js`. Termina en `.js` y no en `.astro`,
   porque solo lleva JavaScript, sin HTML.
2. Copia las fotos y el arreglo de productos. Por ahora con los tres productos de Inicio.

```js
// Los productos de Café Orquídea que salen en tarjetas en la página de inicio. La página se arma
// sola con lo que haya aquí, así que para agregar, quitar o cambiar un producto se cambia solo
// este archivo.

// Las fotos se importan aquí, igual que en una página, para que Astro las optimice.
import fotoCafe from '../assets/cafe-pasado.jpg';
import fotoDesayuno from '../assets/desayuno.jpg';
import fotoPostre from '../assets/postre.jpg';

// Un arreglo, entre [ ], con un objeto, entre { }, por producto. Todos los objetos tienen los
// mismos datos con los mismos nombres, porque cada uno se vuelve una <Tarjeta />.
export const productos = [
	{
		nombre: 'Café pasado',
		descripcion: 'Café de altura del Alto Mayo, pasado en filtro de tela al momento.',
		precio: 5,
		foto: fotoCafe,
		alt: 'Taza de café pasado con granos tostados sobre una mesa de madera',
	},
	{
		nombre: 'Tacacho con cecina',
		descripcion: 'El desayuno de la selva, con plátano verde asado y cecina ahumada.',
		precio: 18,
		foto: fotoDesayuno,
		alt: 'Plato de tacacho con cecina, salsa criolla y una taza de café',
	},
	{
		nombre: 'Torta de chocolate',
		descripcion: 'Hecha en casa cada mañana con cacao de San Martín.',
		precio: 8,
		foto: fotoPostre,
		alt: 'Tajada de torta de chocolate con cobertura de chocolate en un plato blanco',
	},
];
```

- Las fotos se importan en el archivo de datos, igual que en una página. La ruta empieza con `../assets/` porque
  `carta.js` está en `src/data`.
- Cada objeto tiene los mismos cinco datos con los mismos nombres que los props de `Tarjeta.astro`, porque cada uno
  se volverá una tarjeta.
- El precio va como número, `5`, sin comillas y sin «S/». El formato se lo pone la función del paso 10.
- Ojo con las comas, entre dato y dato y entre objeto y objeto. La coma después del último es opcional.

**Así sabes que te salió.** En el navegador todavía no cambia nada. El revisor ya encuentra tu archivo y dice «El
arreglo más largo de src/data/carta.js tiene 3 objeto(s) y la semana pide 4». Es lo esperado; el cuarto llega en el
paso 12.

## Paso 10. Una función para escribir los precios

Al final de `carta.js`, debajo del arreglo, agrega la función `soles`.

```js
// Una función recibe un dato y devuelve otro. Esta recibe un precio, como 5, y devuelve cómo se
// escribe en soles, «S/ 5.00». toFixed(2) escribe el número con dos decimales.
export function soles(precio) {
	return 'S/ ' + precio.toFixed(2);
}
```

`precio.toFixed(2)` escribe el número con dos decimales, así `5` se vuelve `5.00` y `22.5`, `22.50`. El `+` junta
textos, y `'S/ ' + '5.00'` da `'S/ 5.00'`. Con la función, todos los precios del sitio salen con el mismo formato, y si
un día quieres escribirlos distinto, cambias solo la función.

**Así sabes que te salió.** VS Code no marca nada en rojo. Si quieres probarla, repite en la consola lo del paso 8.

## Paso 11. `.map()`, una tarjeta por producto

1. En `index.astro`, entre los `---`, borra los `import` de las tres fotos de productos, que ahora están en `carta.js`,
   y agrega el de los datos.

```astro
---
// Inicio de Café Orquídea, el ejemplo del curso (negocio ficticio).
// Las fotos viven en src/assets y se importan para que Astro las optimice.
import { Image } from 'astro:assets';
import fotoLocal from '../assets/local.jpg';
// El molde de página pone el <head>, la cabecera, el pie, las fuentes y los estilos.
import Layout from '../layouts/Layout.astro';
// La tarjeta de producto es un componente: se escribe una vez y se usa con distintos datos.
import Tarjeta from '../components/Tarjeta.astro';
// Los productos y la función que escribe los precios en soles vienen del archivo de datos.
import { productos, soles } from '../data/carta.js';
---
```

2. Dentro de la grilla, cambia los tres `<Tarjeta />` escritos a mano por un solo `.map()`.

```astro
<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{productos.map((producto) => (
		<Tarjeta
			nombre={producto.nombre}
			descripcion={producto.descripcion}
			precio={soles(producto.precio)}
			foto={producto.foto}
			alt={producto.alt}
		/>
	))}
</div>
```

Línea por línea.

- Las llaves `{ }` de afuera le dicen a Astro que ahí va JavaScript.
- `productos.map((producto) => ( … ))` recorre la lista. A cada objeto lo llama `producto` mientras lo usa y devuelve
  lo que está entre los paréntesis, una `<Tarjeta />`.
- `producto.nombre` lee el dato `nombre` de esa ficha. El punto entra a un dato del objeto.
- `precio={soles(producto.precio)}` pasa el precio por la función, así la tarjeta recibe «S/ 5.00» y no solo 5.
- Los paréntesis después de `=>` devuelven la tarjeta. Si en su lugar pones llaves `{ }`, tienes que escribir `return`
  antes de `<Tarjeta`; si lo olvidas, no sale ninguna tarjeta y tampoco ningún error.
- Al final quedan `))}`, que cierran, en orden, la tarjeta devuelta, el `.map(` y las llaves de afuera.

**Así sabes que te salió.** Inicio se ve igual, con las mismas tres tarjetas, pero en `index.astro` ya no queda ningún
nombre ni precio de producto.

## Paso 12. Agrega un producto tocando solo el archivo de datos

Aquí se ve para qué sirve todo lo anterior.

1. En `carta.js`, agrega el `import` de la foto nueva junto a los otros y un cuarto objeto al final del arreglo.

```js
import fotoGranos from '../assets/granos.jpg';
```

```js
	{
		nombre: 'Café en grano para llevar',
		descripcion: 'Bolsa de 250 g del café que servimos, tostado cada semana. En grano o molido, como lo prefieras.',
		precio: 25,
		foto: fotoGranos,
		alt: 'Rama de cafeto con granos maduros de color rojo, como los de las fincas de donde sale nuestro café',
	},
```

2. Guarda y mira Inicio. Aparece la cuarta tarjeta sin que hayas tocado `index.astro`.
3. Cuatro tarjetas en tres columnas dejan una sola en la última fila. En la grilla de `index.astro` cambia
   `lg:grid-cols-3` por `lg:grid-cols-4`.

```astro
<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
```

4. La Carta todavía tiene sus tablas escritas a mano. Agrega ahí también la fila del producto nuevo, en Bebidas, para
   que aparezca en las dos páginas.

```astro
<tr>
	<td class="border-b border-cafe/20 py-2 pr-4">Café en grano para llevar (250 g)</td>
	<td class="border-b border-cafe/20 py-2 text-right whitespace-nowrap">S/ 25.00</td>
</tr>
```

**Así sabes que te salió.** Inicio muestra cuatro tarjetas. Con las herramientas del paso 5 de la semana 4, a 1280 px
van las cuatro en una fila, a 768 px de a dos y a 375 px una debajo de otra, sin nada que se salga. El revisor marca
**Cuadra** en «El catálogo sale de un archivo de datos de src/data, con 4 elementos o más pintados con un componente».

### En tu proyecto, lección 5.2

1. Crea en `src/data/` el archivo de tu catálogo, con cuatro elementos o más y los mismos datos en cada uno (pasos 9 y
   12).
2. Si tus productos o servicios tienen precio, agrega la función `soles` (paso 10).
3. En la página de tus tarjetas, importa los datos y cambia las tarjetas escritas a mano por un `.map()` (paso 11).
4. Ajusta las columnas de la grilla al número de tarjetas y comprueba a 375, 768 y 1280 px.

Así se vería `src/data/` en otros negocios. En cada uno, el `.map()` de la página pinta su propio componente.

**Taller de estructuras metálicas**, `src/data/trabajos.js`, con la tarjeta `TarjetaTrabajo`.

```js
import fotoPorton from '../assets/porton.jpg';
import fotoReja from '../assets/reja.jpg';

export const trabajos = [
	{
		nombre: 'Portón levadizo',
		descripcion: 'Tubo cuadrado de 2 pulgadas y plancha estriada, con pintura anticorrosiva.',
		precio: 1800,
		foto: fotoPorton,
		alt: 'Portón levadizo de fierro pintado de negro en la cochera de una casa',
	},
	{
		nombre: 'Reja de ventana',
		descripcion: 'Fierro liso de media pulgada, a la medida de tu ventana e instalada.',
		precio: 350,
		foto: fotoReja,
		alt: 'Reja de fierro con diseño de rombos en la ventana de una fachada',
	},
	// El techo metálico y la escalera de caracol, con la misma forma
];
```

En la página, el precio puede decir «Desde S/ 1800.00» con `precio={'Desde ' + soles(trabajo.precio)}`.

**Concesionario**, `src/data/autos.js`, con la tarjeta `TarjetaAuto`.

```js
import fotoSedan from '../assets/sedan.jpg';

export const autos = [
	{
		modelo: 'Sedán 1.6 mecánico',
		anio: 2026,
		precio: 68900,
		foto: fotoSedan,
		alt: 'Sedán plateado estacionado frente al local de exhibición',
	},
	// La camioneta, el auto compacto y la moto, con la misma forma
];

export function soles(precio) {
	return 'S/ ' + precio.toLocaleString('es-PE', { minimumFractionDigits: 2 });
}
```

Con precios grandes, `toLocaleString('es-PE', …)` agrega la coma de los miles, así `68900` se escribe «S/ 68,900.00».

**Bodega**, `src/data/ofertas.js`, con la tarjeta `TarjetaOferta`.

```js
import fotoArroz from '../assets/arroz.jpg';

export const ofertas = [
	{
		nombre: 'Arroz extra',
		presentacion: 'Bolsa de 5 kg',
		precio: 22.5,
		foto: fotoArroz,
		alt: 'Bolsa de arroz de 5 kg en el estante de la bodega',
	},
	// El aceite, la leche y el detergente de la semana, con la misma forma
];
```

Con `soles(22.5)` la tarjeta dice «S/ 22.50». Cada semana cambias las ofertas en este archivo y la página no se toca.

## Paso 13. Revisa tu entrega

En una segunda terminal escribe

```
npm run revisar -- 5
```

Lee cada línea que dice **Falta** y lo que tiene debajo. Corrige, guarda y vuelve a revisar. Este revisor también
comprueba lo de las semanas 2 a 4, así que si al mover el `<head>` o la cabecera al molde algo de antes se rompió,
aquí aparece.

## Paso 14. Guarda tu avance en GitHub

1. En **Control de código fuente** (**Ctrl + Shift + G**) escribe el mensaje `Semana 5, componentes, molde de página y
   datos`.
2. Pulsa **Commit** y luego **Sync Changes**.

**Así sabes que te salió.** El revisor dice **Puntaje 100 de 100** y en GitHub ves las carpetas `src/components`,
`src/layouts` y `src/data`.

## Entrega

En el aula, en la tarea **Semana 5**, pega el enlace de tu repositorio, el mismo de las semanas anteriores, y responde
el cuestionario de la semana. Ritmo sugerido hasta el domingo 15 de noviembre. Todo cierra el domingo 29 de noviembre
a las 23:59.

## Si algo falla

| Lo que ves | Qué hacer |
| :-- | :-- |
| En el navegador solo se ven la cabecera y el pie, sin nada entre ellos | Al molde le falta `<slot />`. El revisor dice «src/layouts/Layout.astro no tiene <slot />. Sin él, el contenido de las páginas no aparece. Escribe <slot /> entre la cabecera y el pie.» (paso 6) |
| El contenido sale debajo del pie, o encima de la cabecera | El `<slot />` está en otro lugar del molde. Muévelo entre `<Header pagina={pagina} />` y `<Footer />` |
| La cabecera o el pie salen dos veces | La página todavía tiene su propio `<header>` o `<footer>`. Bórralo, porque ahora lo pone el molde. El revisor dice «… todavía escribe su propio <header>. Bórralo…» |
| El revisor dice «… no usa el molde» | Esa página no importa `Layout` o su contenido no está entre `<Layout …>` y `</Layout>` (paso 5) |
| El revisor dice «… todavía escribe su propio <html> o <head>» | Borra de esa página el `<html>`, el `<head>` y el `<body>`, porque ahora los pone el molde |
| Una pantalla de error con `Failed to resolve import` o `Could not resolve` y una ruta | La ruta del `import` está mal escrita. Revisa que la carpeta y el archivo existan con ese nombre exacto, con sus mayúsculas, y que desde una página empiece con `../`, como `'../layouts/Layout.astro'` o `'../data/carta.js'` |
| Un error que dice `No matching import has been found for` y el nombre de un componente | Usas `<Header />`, `<Footer />` o `<Tarjeta />` sin importarlo. Agrega su `import` entre los `---` del archivo donde lo usas |
| La página sale sin colores y con otra letra | Las líneas de `global.css` y de las fuentes no llegaron al molde. Deben estar entre los `---` de `Layout.astro` |
| Todas las pestañas dicen lo mismo, o el revisor dice que dos páginas «tienen el mismo título» | Falta pasar `title="…"` en el `<Layout>` de alguna página, o en el molde el `<title>` no dice `{title}` |
| Ningún enlace del menú sale subrayado | La página no pasa `pagina="/…"` al `<Layout>`, o la dirección no es igual a la del `Header.astro`, con su `/` delante |
| Una tarjeta sale sin nombre o sin precio | El prop tiene otro nombre en la página y en el componente, como `titulo=` en la página y `nombre` en `Astro.props`. Usa el mismo nombre, letra por letra, en los dos lados |
| Un error de `<Image />` que menciona `src` y `undefined` | La foto no llega a la tarjeta. Revisa que el objeto tenga `foto:` con la foto importada y que el prop se llame igual en la página y en `Tarjeta.astro` |
| No aparece ninguna tarjeta y no hay ningún error | El `.map()` tiene llaves `{ }` después de `=>` y no tiene `return`. Cambia esas llaves por paréntesis `( )`, como en el paso 11 |
| `precio.toFixed is not a function` | El precio está entre comillas, como `'5'`. Escríbelo como número, `5`, sin comillas ni «S/» |
| `productos is not defined` o `soles is not defined` | Falta el `import { productos, soles } from '../data/carta.js';` entre los `---` de la página |
| `Cannot read properties of undefined (reading 'map')` | La lista no llegó. Revisa que el archivo de datos diga `export const productos` y que en el `import` el nombre entre llaves sea el mismo |
| El revisor dice «El arreglo más largo de src/data/… tiene 3 objeto(s) y la semana pide 4» | Agrega un objeto `{ }` por cada producto o servicio que falte, con los mismos datos que los demás |
| El revisor dice «El .map() de … no pinta un componente» | En el `.map()` escribiste el `<article>` completo. Pásalo a `src/components/Tarjeta.astro` (paso 7) y en el `.map()` escribe `<Tarjeta … />` |
| En la computadora queda una tarjeta sola en la última fila | El número de columnas no va con el de tarjetas. Con cuatro, usa `lg:grid-cols-4` (paso 12) |
| `la ejecución de scripts está deshabilitada en este sistema` | Estás en PowerShell; cambia la terminal a **Símbolo del sistema**, como en el paso 7 de la semana 1 |

## Para saber más

- [Componentes en Astro](https://docs.astro.build/es/basics/astro-components/), en español
- [Moldes de página en Astro](https://docs.astro.build/es/basics/layouts/), en español; ahí se llaman *layouts*
- [`.map()`, en español](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- La semana que viene tu sitio responde a lo que hace la persona, con JavaScript en el navegador. El menú del celular
  se abre y se cierra con un botón.
