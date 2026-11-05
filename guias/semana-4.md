# Semana 4 — Maquetación para celular y computadora

Esta semana tu sitio deja de ser una sola columna larga. Primero acomodas cada parte con Flexbox y Grid, el menú en
una fila y las tarjetas en columnas. Luego lo pruebas en el ancho de un celular y lo arreglas empezando por el
celular, que es donde la mayoría de tus clientes lo va a abrir. Al terminar tendrás

- La barra de navegación en una fila, con el nombre a un lado y el menú al otro.
- Tus productos o servicios en tarjetas, acomodados en columnas con Grid.
- Las cuatro páginas pensadas primero para el celular, con `sm:`, `md:` y `lg:` para las pantallas grandes.
- Ninguna parte que se salga de la pantalla a 375 px, el ancho de un celular común.
- Ocho capturas en la carpeta `capturas`, cada página a 375 y a 1280 px.

Esta semana es la **evaluación intermedia** del curso.

> **Plazo.** Todas las tareas y cuestionarios del curso cierran el **domingo 29 de noviembre a las 23:59**. Para
> llegar sin apuro, termina las semanas 4 y 5 hasta el domingo 15 de noviembre. En el aula tienes dos vídeos. La
> **Lección 4.1, Flexbox y Grid para acomodar tu página** acompaña los pasos 2 al 4 y la **Lección 4.2, Primero el
> celular con sm:, md: y lg:**, los pasos 5 al 9. Las dudas van por Google Chat.

## Cómo terminar el curso

| Semanas | Termínalas hasta el |
| :-- | :-- |
| 1 a 3, si te falta alguna | Cuanto antes, para seguir con la 4 |
| 4 y 5 | Domingo 15 de noviembre |
| 6 y 7 | Domingo 22 de noviembre |
| 8 y la sustentación | Domingo 29 de noviembre, 23:59 (cierre de todo) |

- **Una sola entrega que crece.** Todas las tareas llevan el mismo enlace, el de tu repositorio. El revisor de cada
  semana comprueba también lo de las semanas anteriores.
- **Si vas atrasado**, no empieces otro proyecto. Sigue las guías en orden sobre tu mismo sitio y, al terminar cada
  una, entrega su tarea con el mismo enlace. `npm run revisar -- 4` te dice todo lo que te falta hasta esta semana.
- **Si te trabas**, escribe por Google Chat con el paso de la guía y el mensaje exacto del revisor o de la terminal.

## Antes de empezar

- Haber terminado la semana 3, porque esta semana se construye sobre las clases de Tailwind y los colores de tu marca.
- Mira los dos vídeos de la semana. En ellos Café Orquídea, el sitio del ejemplo, se acomoda con los mismos pasos de
  esta guía.
- Usa Google Chrome o Microsoft Edge, porque el paso 5 usa sus herramientas para ver el sitio como en un celular.

## Palabras nuevas

| Palabra | Qué es |
| :-- | :-- |
| Maquetar | Decidir dónde va cada parte de la página, qué va al lado de qué y qué va debajo |
| Flexbox | Una forma de poner cosas **en una fila** (o en una columna) y alinearlas. Se activa con la clase `flex` |
| Grid | Una forma de acomodar cosas **en columnas y filas**, como una cuadrícula. Se activa con la clase `grid` |
| `gap` | El espacio entre las cosas de una fila o de una grilla, como `gap-6` |
| Punto de quiebre | El ancho de pantalla desde el que cambia el diseño. En Tailwind son `sm:` (640 px), `md:` (768 px) y `lg:` (1024 px) |
| Móvil primero | Escribir primero las clases para el celular y agregar después las que cambian en pantallas más grandes |
| Viewport | El área de la pantalla donde se ve la página. La etiqueta `<meta name="viewport">` le dice al celular qué ancho usar |

## Paso 1. Actualiza el revisor y enciende el sitio

1. Abre tu repositorio en VS Code y, en la terminal, escribe

   ```
   npm run revisar -- actualizar
   ```

   **Así sabes que te salió.** Dice «Revisor actualizado». La semana 4 necesita el revisor 4; con uno anterior te
   pedirá que lo actualices.
2. Enciende el sitio con `npm run dev` y abre `http://localhost:4321`.

## Paso 2. Flexbox, la barra de navegación en una fila

Hasta ahora cada cosa va debajo de la anterior. `flex` pone a los hijos de una etiqueta **uno al lado del otro**, y
otras tres clases deciden cómo se reparten.

| Clase | Qué hace |
| :-- | :-- |
| `flex` | Pone a los hijos en una fila |
| `justify-between` | Manda el primero a la izquierda, el último a la derecha y reparte el espacio entre ellos |
| `items-center` | Los centra en el alto, para que el nombre y el menú queden a la misma altura |
| `gap-6` | Deja 1,5 rem (24 px) entre uno y otro |

1. Abre `src/pages/index.astro`. Dentro del `<header>`, envuelve el nombre y el `<nav>` en un `<div>` que los ponga
   en fila. Al `<ul>` del menú también dale `flex`, para que los enlaces queden en fila, y quítale a cada `<li>` las
   clases que usabas para separarlos, como `mr-4 inline-block`, porque ahora el espacio lo da `gap-6`.

   ```astro
   <header class="bg-selva">
   	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
   		<a href="/" class="font-titulo text-2xl font-semibold text-crema">Café Orquídea</a>
   		<nav aria-label="Principal">
   			<ul class="flex gap-6">
   				<li><a href="/" aria-current="page" class="font-semibold text-crema underline underline-offset-4">Inicio</a></li>
   				<li><a href="/carta" class="font-semibold text-crema hover:text-orquidea-claro">Carta</a></li>
   				<li><a href="/nosotros" class="font-semibold text-crema hover:text-orquidea-claro">Nosotros</a></li>
   				<li><a href="/contacto" class="font-semibold text-crema hover:text-orquidea-claro">Contacto</a></li>
   			</ul>
   		</nav>
   	</div>
   </header>
   ```

   El fondo verde queda en el `<header>`, que ocupa todo el ancho. El `<div>` de adentro tiene `max-w-6xl mx-auto`,
   así el contenido no pasa de 72 rem (1152 px) y queda centrado en las pantallas anchas.
2. Copia la cabecera nueva en las otras tres páginas. En cada una, el `aria-current="page"` va en el enlace de esa
   página.

**Así sabes que te salió.** En la computadora, el nombre del negocio queda a la izquierda y los cuatro enlaces a la
derecha, en una sola fila, en las cuatro páginas.

## Paso 3. Grid, las tarjetas en columnas

`grid` acomoda a los hijos en una cuadrícula y `grid-cols-3` le pide tres columnas del mismo ancho. Cada tarjeta es un
`<article>`, y la grilla las reparte sola.

1. En Inicio, envuelve tus productos en un `<div>` con `grid grid-cols-3 gap-6`. Cada producto es una tarjeta con su
   foto arriba y su texto debajo.

   ```astro
   <div class="mt-8 grid grid-cols-3 gap-6">
   	<article class="flex flex-col overflow-hidden rounded-3xl bg-crema-claro shadow-lg shadow-cafe-oscuro/10">
   		<Image class="aspect-4/3 w-full object-cover" src={fotoCafe} alt="Taza de café pasado con granos tostados sobre una mesa de madera" width={640} />
   		<div class="flex flex-1 flex-col gap-2 p-6">
   			<h3 class="font-titulo text-2xl font-semibold text-cafe">Café pasado</h3>
   			<p>Café de altura del Alto Mayo, pasado en filtro de tela al momento.</p>
   			<p class="mt-auto pt-2 text-xl font-semibold text-selva">S/ 5.00</p>
   		</div>
   	</article>
   	<!-- Las otras dos tarjetas, con la misma forma -->
   </div>
   ```

2. Por dentro, la tarjeta también usa Flexbox, pero en columna (`flex flex-col`). El precio lleva `mt-auto`, un margen
   de arriba que toma todo el espacio que sobra, así baja al fondo de la tarjeta y los precios de las tres quedan a la
   misma altura aunque una descripción sea más larga.
3. `aspect-4/3 object-cover` recorta las fotos a la misma forma, así las tres tarjetas se ven parejas aunque las fotos
   tengan tamaños distintos.
4. Junto al título de la sección, el enlace «Ver la carta completa» va en una fila con `flex items-end
   justify-between`, como la cabecera.

**Así sabes que te salió.** En la computadora ves tres tarjetas una al lado de la otra, del mismo ancho y con los
precios alineados abajo.

## Paso 4. Grid en el resto de las páginas

La misma idea sirve para todo lo que va lado a lado. Estas son las grillas de Café Orquídea.

| Página | Qué se acomoda | Clases |
| :-- | :-- | :-- |
| Inicio | La portada, el texto y la foto del local | `grid grid-cols-2 items-center gap-10` |
| Inicio | Horario y dirección, en dos tarjetas | `grid grid-cols-2 gap-6` |
| Carta | Una tarjeta por categoría, cada una con su tabla | `grid grid-cols-3 items-start gap-6` |
| Nosotros | La foto de los granos y su texto | `grid grid-cols-2 items-center gap-10` |
| Nosotros | Una **galería** de cuatro fotos | `grid grid-cols-4 gap-4` |
| Contacto | Los botones y el horario a un lado, el mapa al otro | `grid grid-cols-2 gap-10` |

1. Para la galería, pon las fotos una tras otra dentro del `<div>` de la grilla. `aspect-square` las recorta
   cuadradas.

   ```astro
   <div class="mt-8 grid grid-cols-4 gap-4">
   	<Image class="aspect-square w-full rounded-2xl object-cover" src={fotoLocal} alt="Mesas de madera del salón con plantas junto a la ventana" width={400} />
   	<Image class="aspect-square w-full rounded-2xl object-cover" src={fotoCafe} alt="Taza de café pasado recién servida junto a granos tostados" width={400} />
   	<Image class="aspect-square w-full rounded-2xl object-cover" src={fotoDesayuno} alt="Desayuno de tacacho con cecina servido en la mesa" width={400} />
   	<Image class="aspect-square w-full rounded-2xl object-cover" src={fotoPostre} alt="Tajada de torta de chocolate de la vitrina de postres" width={400} />
   </div>
   ```

2. En el pie, el texto de la dirección y el aviso van en una fila con `flex items-start justify-between gap-8`.
3. Como ahora hay columnas, el contenido puede ser más ancho. Cambia `max-w-3xl` por `max-w-6xl` en el `<main>` o
   en cada sección.

**Así sabes que te salió.** En la computadora, las cuatro páginas tienen partes lado a lado y nada se ve como una
columna larga y angosta. El revisor ya marca **Cuadra** en «Pones cosas en fila con Flexbox» y «Acomodas en columnas
con Grid».

### En tu proyecto, lección 4.1

1. Abre `src/pages/index.astro` y pon tu cabecera en fila (paso 2). Cópiala a las otras tres páginas.
2. Busca en tu sitio lo que se repite con la misma forma y conviértelo en tarjetas dentro de una grilla (paso 3).
3. Elige una página para tu galería de fotos (paso 4).
4. Comprueba en el navegador, a pantalla completa, que cada página tenga partes lado a lado.

| Negocio | Tarjetas | Galería |
| :-- | :-- | :-- |
| Taller de estructuras metálicas | Portones, rejas, techos metálicos y escaleras, cada uno con su foto y «Cotiza por WhatsApp» | Trabajos terminados en casas y negocios |
| Concesionario | Cada modelo con su foto, el año y el precio desde | El local de exhibición y la entrega de unidades |
| Bodega | Las ofertas de la semana o las categorías (abarrotes, bebidas, limpieza) | La tienda por dentro y los productos de la zona |

## Paso 5. Mira tu sitio como en un celular

Ahora mira lo que hiciste en el ancho de un celular, sin salir de la computadora.

1. Con tu sitio abierto en Chrome o Edge, pulsa **F12** para abrir las herramientas para desarrolladores.
2. Pulsa **Ctrl + Shift + M**. Arriba de la página aparece una barra con dos números, el ancho y el alto.
3. Haz clic en el primer número, escribe `375` y pulsa **Enter**. Si en vez de números ves el nombre de un celular,
   haz clic en ese nombre y elige la primera opción de la lista.

**Así sabes que te salió.** La página se ve angosta, como en un celular. En Café Orquídea a este ancho el menú se sale
por la derecha, aparece una barra para moverse a los lados y las tres tarjetas quedan apretadísimas. Eso es lo que se
arregla en los pasos siguientes.

## Paso 6. El meta viewport

Sin esta etiqueta, el celular hace como si la pantalla tuviera 980 px de ancho y muestra la página chiquita. En el
`<head>` de las cuatro páginas, deja así la línea del viewport.

```astro
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

`width=device-width` le pide usar el ancho real del celular, e `initial-scale=1` que empiece sin acercar ni alejar. No
agregues `user-scalable=no` ni `maximum-scale=1`, porque impiden que la persona amplíe la página con los dedos.

**Así sabes que te salió.** El revisor marca **Cuadra** en «Cada página se ajusta al ancho del celular con su meta
viewport».

## Paso 7. Móvil primero con `sm:`, `md:` y `lg:`

En Tailwind, una clase sin prefijo vale **para todas las pantallas**, desde la más angosta. Una clase con prefijo vale
**desde ese ancho para arriba**.

| Prefijo | Desde | Piensa en |
| :-- | :-- | :-- |
| (ninguno) | 0 px | El celular |
| `sm:` | 640 px | Un celular echado o una tableta pequeña |
| `md:` | 768 px | Una tableta |
| `lg:` | 1024 px | Una laptop o una computadora |

Por eso se escribe primero para el celular y luego se agrega lo que cambia en pantallas más grandes.
`grid gap-6 sm:grid-cols-2 lg:grid-cols-3` se lee así. En el celular, una columna. Desde 640 px, dos. Desde 1024 px,
tres.

1. **La cabecera.** En el celular, el nombre arriba y el menú debajo. Desde 640 px, en una fila. Al menú agrégale
   `flex-wrap`, para que un enlace que no entra pase a la línea de abajo en vez de salirse.

   ```astro
   <div class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
   	<a href="/" class="font-titulo text-2xl font-semibold text-crema">Café Orquídea</a>
   	<nav aria-label="Principal">
   		<ul class="flex flex-wrap gap-x-6 gap-y-2">
   ```

2. **Las grillas.** Quita el número de columnas de la clase base y ponlo con prefijo.

   | Antes (paso 3 y 4) | Ahora, móvil primero |
   | :-- | :-- |
   | `grid grid-cols-3 gap-6` (tarjetas de Inicio) | `grid gap-6 sm:grid-cols-2 lg:grid-cols-3` |
   | `grid grid-cols-2 items-center gap-10` (portada) | `grid gap-8 md:grid-cols-2 md:items-center md:gap-10` |
   | `grid grid-cols-3 items-start gap-6` (Carta) | `grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3` |
   | `grid grid-cols-4 gap-4` (galería) | `grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4` |
   | `grid grid-cols-2 gap-10` (Contacto) | `grid gap-10 md:grid-cols-2` |

   La galería empieza con **dos** columnas y no con una, porque dos fotos cuadradas sí entran bien en un celular.
3. **Las filas.** Lo que va en fila en la computadora, en el celular va una cosa debajo de otra.
   - Pie de página `flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8`.
   - Los dos botones de Contacto `flex flex-wrap gap-3`.
   - El título «Lo más pedido» y su enlace `flex flex-wrap items-end justify-between gap-4`.
4. **Letras y márgenes.** Un título de `text-6xl` no entra en 375 px. Empieza más chico y crece con la pantalla.
   - Títulos `h1` con `text-4xl sm:text-5xl lg:text-6xl`.
   - Márgenes de los lados `px-4 sm:px-6`, y de arriba y abajo `py-10 md:py-16`.

**Así sabes que te salió.** En las herramientas del paso 5, cambia el ancho a 375, 768 y 1280. A 375 px nada se sale y
no aparece la barra para moverse a los lados. A 768 px las tarjetas van de a dos y a 1280 px, de a tres.

## Paso 8. El error típico, un ancho fijo

Para que algo «se vea como en la computadora» es tentador darle un ancho fijo, como `w-[1200px]`. En la computadora
se ve bien, pero en el celular esa caja sigue midiendo 1200 px y todo se sale por la derecha.

```astro
<section class="mx-auto grid w-[1200px] max-w-6xl grid-cols-2 items-center gap-10 px-6 py-16">
```

El revisor lo encuentra y te dice en qué archivo y en qué línea está.

```
Falta    Nada tiene un ancho fijo que se salga de la pantalla del celular
         En src/pages/index.astro, línea 42, w-[1200px] fija un ancho que no cabe en la pantalla de un celular de 375 px.
```

La solución es no fijar el ancho, sino ponerle un **tope**. `max-w-6xl` dice «hasta 1152 px como máximo», así la caja
toma todo el ancho del celular y en la computadora no pasa del tope. Lo mismo vale para `min-w-[…]` y para clases
como `w-300`, que también son anchos fijos.

**Así sabes que te salió.** El revisor marca **Cuadra** en «Nada tiene un ancho fijo que se salga de la pantalla del
celular».

## Paso 9. Las capturas a 375 y 1280 px

El docente mira tu diseño en estas capturas, así que tómalas cuando todo esté listo.

1. En tu proyecto, al lado de `package.json`, crea la carpeta `capturas`.
2. Abre Inicio con las herramientas del paso 5 y pon el ancho en `375`.
3. En la barra de arriba, abre el menú de los tres puntos y elige la captura de pantalla de **tamaño completo**. Chrome
   guarda la página entera, de arriba abajo, en tu carpeta de Descargas.
4. Mueve la imagen a `capturas` y cámbiale el nombre a `inicio-375.png`.
5. Repite con el ancho en `1280`, y con Carta, Nosotros y Contacto. Al final tienes ocho imágenes.

| Página | Celular | Computadora |
| :-- | :-- | :-- |
| Inicio | `inicio-375.png` | `inicio-1280.png` |
| Carta | `carta-375.png` | `carta-1280.png` |
| Nosotros | `nosotros-375.png` | `nosotros-1280.png` |
| Contacto | `contacto-375.png` | `contacto-1280.png` |

**Así sabes que te salió.** En las capturas a 375 no hay nada cortado a la derecha. El revisor mide cada imagen y, si
una salió más ancha de lo que dice su nombre, te avisa, porque eso pasa cuando algo de la página se sale.

### En tu proyecto, lección 4.2

1. Cambia el meta viewport en el `<head>` de tus cuatro páginas (paso 6).
2. Abre cada página de `src/pages/` y, en cada `grid-cols-` y en cada fila de `flex`, decide cómo se ve en el celular
   y desde qué ancho cambia (paso 7).
3. Busca en tus archivos con **Ctrl + Shift + F** el texto `w-[` y revisa que ningún ancho fijo pase de 400 px
   (paso 8).
4. Comprueba cada página a 375, 768 y 1280 px y saca tus ocho capturas (paso 9).

| Negocio | En el celular | En la computadora |
| :-- | :-- | :-- |
| Taller de estructuras metálicas | Un trabajo por fila, con el botón «Cotiza por WhatsApp» a todo el ancho | Tres trabajos por fila y el botón a su tamaño |
| Concesionario | Cada auto en una tarjeta a todo el ancho, con el precio grande | Dos o tres autos por fila y la ficha técnica al lado de la foto |
| Bodega | Las ofertas de a una y la galería de a dos | Las ofertas de a cuatro y la galería en una sola fila |

## Paso 10. Revisa tu entrega

En una segunda terminal escribe

```
npm run revisar -- 4
```

Lee cada línea que dice **Falta** y lo que tiene debajo. Corrige, guarda y vuelve a revisar. Este revisor también
comprueba lo de las semanas 2 y 3, así que si algo de antes se rompió, aquí aparece.

## Paso 11. Guarda tu avance en GitHub

1. En **Control de código fuente** (**Ctrl + Shift + G**) escribe el mensaje `Semana 4, maquetación para celular y
   computadora`.
2. Pulsa **Commit** y luego **Sync Changes**.

**Así sabes que te salió.** El revisor dice **Puntaje 100 de 100** y en GitHub ves tu carpeta `capturas` con las ocho
imágenes.

## Entrega

En el aula, en la tarea **Semana 4**, pega el enlace de tu repositorio, el mismo de las semanas anteriores. Esta semana
es la evaluación intermedia. Además del revisor, el docente mira en tus capturas que el contenido sea el real de tu
negocio, que los colores y las letras sean coherentes y que se vea bien en el celular. Ritmo sugerido hasta el domingo
15 de noviembre; cierre de todo el domingo 29 de noviembre a las 23:59.

## Si algo falla

| Lo que ves | Qué hacer |
| :-- | :-- |
| El revisor dice «… fija un ancho que no cabe en la pantalla de un celular» | Es un ancho fijo, como `w-[1200px]`, `min-w-[500px]` o `w-300`. Cámbialo por un tope con `max-w-` (paso 8) |
| A 375 px el menú se sale por la derecha | Al `<ul>` del menú le falta `flex-wrap`, o la fila de la cabecera no pasa a columna en el celular (`flex-col sm:flex-row`) |
| A 375 px las tarjetas siguen de a tres, muy angostas | El número de columnas está en la clase base. Cambia `grid-cols-3` por `sm:grid-cols-2 lg:grid-cols-3` |
| Escribiste `md:grid-cols-2` y en la computadora sigue una sola columna | A esa etiqueta le falta la clase `grid`. `grid-cols-` solo funciona junto a `grid` |
| Una clase con `md:` no hace nada | Revisa que el prefijo lleve dos puntos y no guion (`md:flex-row`, no `md-flex-row`) |
| Escribiste `md:grid-cols-1` para el celular y no cambia | `md:` vale **desde** 768 px para arriba, no para el celular. Lo del celular va sin prefijo |
| Algo se sale a 375 px y no encuentras qué | En las herramientas del paso 5, pulsa el botón de la flecha (arriba a la izquierda) y pasa el mouse por la página hasta ver qué caja es más ancha que la pantalla |
| Una tabla larga se sale en el celular | Envuélvela en un `<div class="overflow-x-auto">`, así solo la tabla se mueve a los lados |
| El revisor dice «La captura … mide … px de ancho y no corresponde» | La tomaste con otro ancho o algo de esa página se sale. Pon el ancho exacto en la barra del paso 5, arregla lo que se sale y vuelve a tomarla |
| El revisor dice «hay 0 captura(s) a 375 px» | La carpeta debe llamarse `capturas`, estar al lado de `package.json` y cada nombre debe llevar el ancho, como `inicio-375.png` |
| `la ejecución de scripts está deshabilitada en este sistema` | Estás en PowerShell; cambia la terminal a **Símbolo del sistema**, como en el paso 7 de la semana 1 |

## Para saber más

- [Flexbox, en español](https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Grid, en español](https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Grids)
- [Diseño adaptable en Tailwind](https://tailwindcss.com/docs/responsive-design), en inglés; explica `sm:`, `md:` y `lg:`
- La semana que viene la cabecera y el pie se escriben una sola vez, en un molde que comparten las cuatro páginas, y
  las tarjetas salen de un archivo de datos.
