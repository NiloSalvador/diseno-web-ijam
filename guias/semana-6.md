# Semana 6 — El menú del celular y un componente interactivo

Hasta ahora tu sitio solo se mira. Esta semana responde a lo que hace la persona, con JavaScript que corre en su
navegador. Primero el menú, que en el celular ocupa media pantalla, se esconde detrás de un botón «Menú» que lo abre y
lo cierra, también con la tecla Escape. Luego eliges un componente interactivo para una de tus páginas. La lección lo
hace con preguntas frecuentes que se abren al pulsarlas. Al terminar tendrás

- En el celular, la cabecera en un solo renglón, con tu nombre y el botón «Menú» que abre y cierra la lista de enlaces.
- Un botón que avisa a quien usa lector de pantalla si el menú está abierto o cerrado, y la tecla Escape que lo cierra.
- En la computadora, el menú en fila como antes y sin botón.
- Un componente interactivo en una de tus páginas, preguntas frecuentes, una galería, un testimonio al azar o el modo
  oscuro.
- Todo el JavaScript dentro de un `<script>` y ningún evento escrito en el HTML, como `onclick`.

> **Plazo.** Todas las tareas y cuestionarios del curso cierran el **domingo 29 de noviembre a las 23:59**. Para
> llegar sin apuro, termina las semanas 6 y 7 hasta el domingo 22 de noviembre. En el aula tienes dos vídeos. La
> **Lección 6.1, El menú del celular con JavaScript** acompaña los pasos 2 al 6 y la **Lección 6.2, Preguntas
> frecuentes con details y summary**, los pasos 7 al 9. Las dudas van por Google Chat.

## Cómo terminar el curso

- **Ritmo.** Semanas 6 y 7 hasta el domingo 22 de noviembre, y la 8 con la sustentación hasta el domingo 29 de
  noviembre a las 23:59, cuando cierra todo. Si todavía te faltan la 4 o la 5, ponte al día con la ruta corta.
- **Una sola entrega que crece.** Todas las tareas llevan el mismo enlace, el de tu repositorio, y el revisor de cada
  semana comprueba también lo de las anteriores.
- **Si vas atrasado, la ruta corta.** No empieces otro proyecto. En tu mismo repositorio actualiza el revisor (paso 1)
  y escribe `npm run revisar -- 6`. Cada **Falta** es algo pendiente de las semanas 1 a 6. Arréglalos de arriba
  abajo con la guía de esa semana (la tabla del [inicio](../README.md) dice el tema de cada una) y, al terminar cada
  semana, entrega su tarea con el mismo enlace.
- **Si te trabas**, escribe por Google Chat con el paso de la guía y el mensaje exacto del revisor, de la terminal o de
  la consola del navegador.

## Antes de empezar

- Haber terminado la semana 5, porque el menú se arma dentro de `src/components/Header.astro`, el componente de la
  cabecera.
- Mira los dos vídeos de la semana. En ellos Café Orquídea, el sitio del ejemplo, recibe su menú del celular y sus
  preguntas frecuentes con los mismos pasos de esta guía.
- Ten a mano Google Chrome o Microsoft Edge. Sus herramientas para desarrolladores, las de **F12**, te muestran el
  sitio como en un celular y los errores de JavaScript.

## Palabras nuevas

| Palabra | Qué es |
| :-- | :-- |
| `<script>` | La etiqueta donde va el JavaScript que corre en el navegador de quien visita tu sitio |
| DOM | La página tal como la tiene el navegador mientras está abierta. JavaScript puede buscar sus etiquetas y cambiarlas |
| Evento | Algo que pasa en la página, como un clic en un botón o una tecla que se pulsa |
| `addEventListener` | Le dice al navegador «cuando pase este evento, haz esto» |
| `id` | El nombre único de una etiqueta, como `id="boton-menu"`. Con él, JavaScript la encuentra |
| Lector de pantalla | El programa que lee la página en voz alta a quien no ve o ve poco, como NVDA en la computadora o TalkBack en el celular |
| `aria-expanded` | Avisa al lector de pantalla si lo que abre un botón está abierto (`"true"`) o cerrado (`"false"`) |
| `aria-controls` | Dice qué abre y cierra el botón, con el `id` de esa parte de la página |
| Consola | La pestaña de las herramientas del navegador (**F12**) donde aparecen los errores de JavaScript |
| `<details>` y `<summary>` | Un bloque que se abre y se cierra solo, sin JavaScript. `<summary>` es la parte que se ve siempre |

## Paso 1. Actualiza el revisor y enciende el sitio

1. Abre tu repositorio en VS Code y, en la terminal, escribe

   ```
   npm run revisar -- actualizar
   ```

   **Así sabes que te salió.** Dice «Revisor actualizado». La semana 6 necesita el revisor 6; con uno anterior te
   pedirá que lo actualices.
2. Escribe `npm run revisar -- 6`. Marca **Falta** en lo nuevo de esta semana, el menú del celular y el componente
   interactivo. Café Orquídea, con la semana 5 completa, empieza con **75 de 100**. Al terminar la guía, todo dice
   **Cuadra**.
3. Enciende el sitio con `npm run dev` y abre `http://localhost:4321`.

## Paso 2. La cabecera en el celular

Mira tu sitio con el ancho de un celular, como en el paso 5 de la semana 4. Pulsa **F12**, luego **Ctrl + Shift + M**,
haz clic en el primer número de la barra de arriba, escribe `375` y pulsa **Enter**.

En Café Orquídea la cabecera ocupa tres renglones, el nombre y dos de enlaces, y empuja la foto de Inicio hacia abajo.
Con cuatro enlaces todavía se aguanta, pero un negocio con seis páginas llenaría media pantalla antes de mostrar algo.
La solución que usan casi todos los sitios es esconder la lista en el celular y poner en su lugar un botón «Menú» que
la muestra y la vuelve a esconder. En la computadora, donde sobra espacio, el menú se queda en fila como está.

Se arma en dos partes. El HTML, un botón y la lista con un nombre propio cada uno (paso 3). Y el JavaScript, que
escucha el clic del botón (paso 4) y la tecla Escape (paso 5).

**Así sabes que te salió.** Ves la cabecera de tu sitio en tres renglones o más a 375 px. Si en tu sitio ya entra en
uno, igual haz los pasos, porque el revisor pide el botón.

## Paso 3. El botón «Menú» y la lista escondida

1. Abre `src/components/Header.astro`.
2. Cambia las clases del `<div>` que está dentro del `<header>` por las del ejemplo, para que el nombre y el botón
   queden en un renglón y la lista baje al siguiente.
3. Entre el nombre y el `<nav>`, escribe el `<button>`.
4. Al `<nav>` agrégale `w-full md:w-auto`. A la `<ul>`, `id="menu-principal"` y las clases `hidden pt-3 md:flex
   md:gap-6 md:pt-0`. A cada enlace, `block py-3` al principio y `md:py-0` al final de sus clases.

```astro
<header class="bg-selva">
	<div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 px-4 py-4 sm:px-6">
		<a href="/" class="font-titulo text-2xl font-semibold text-crema">Café Orquídea</a>
		<button
			id="boton-menu"
			type="button"
			aria-expanded="false"
			aria-controls="menu-principal"
			class="rounded-full border-2 border-crema px-5 py-2 font-semibold text-crema hover:bg-crema hover:text-selva md:hidden"
		>
			Menú
		</button>
		<nav aria-label="Principal" class="w-full md:w-auto">
			<ul id="menu-principal" class="hidden pt-3 md:flex md:gap-6 md:pt-0">
				<li><a href="/" aria-current={pagina === '/' ? 'page' : undefined} class="block py-3 font-semibold text-crema underline-offset-4 hover:text-orquidea-claro aria-[current=page]:underline md:py-0">Inicio</a></li>
				<li><a href="/carta" aria-current={pagina === '/carta' ? 'page' : undefined} class="block py-3 font-semibold text-crema underline-offset-4 hover:text-orquidea-claro aria-[current=page]:underline md:py-0">Carta</a></li>
				<li><a href="/nosotros" aria-current={pagina === '/nosotros' ? 'page' : undefined} class="block py-3 font-semibold text-crema underline-offset-4 hover:text-orquidea-claro aria-[current=page]:underline md:py-0">Nosotros</a></li>
				<li><a href="/contacto" aria-current={pagina === '/contacto' ? 'page' : undefined} class="block py-3 font-semibold text-crema underline-offset-4 hover:text-orquidea-claro aria-[current=page]:underline md:py-0">Contacto</a></li>
			</ul>
		</nav>
	</div>
</header>
```

Lo nuevo, atributo por atributo.

- `id="boton-menu"` es el nombre del botón. Con ese nombre lo busca el script del paso 4. Un `id` no se repite en la
  página.
- `type="button"` dice que el botón no envía nada; solo hace lo que le pida tu script.
- `aria-expanded="false"` dice que el menú empieza cerrado. El script lo cambia a `"true"` cuando lo abre.
- `aria-controls="menu-principal"` dice qué abre el botón, la lista que tiene `id="menu-principal"`. Los dos textos
  tienen que ser iguales, letra por letra.
- `md:hidden` esconde el botón desde 768 px, porque en la computadora el menú se ve siempre.
- `hidden` esconde la lista, y `md:flex` la vuelve a mostrar en fila desde 768 px.
- `block py-3` hace que en el celular cada enlace ocupe su propio renglón, alto y fácil de tocar con el dedo.
  `md:py-0` lo deja como antes en la computadora.

**Por qué importa `aria-expanded`.** Quien no ve la pantalla usa un lector de pantalla, que lee en voz alta lo que
hay en la página. Al llegar al botón dice algo como «Menú, botón, contraído», y al abrirlo, «expandido». Sin
`aria-expanded` oiría solo «Menú, botón» y, al pulsarlo, no sabría si pasó algo, porque no ve la lista aparecer.

**Así sabes que te salió.** A 375 px la cabecera tiene un solo renglón, el nombre y el botón «Menú». Si lo pulsas no
pasa nada todavía, porque falta el script. A 1280 px el menú está en fila como antes y el botón no aparece.

## Paso 4. El DOM, los eventos y el script que abre el menú

Antes del código, dos ideas.

- **El DOM.** Cuando el navegador abre tu página, lee el HTML y arma con él una copia viva que guarda mientras la
  página está abierta. Esa copia es el DOM. JavaScript no cambia tu archivo `Header.astro`, cambia el DOM, y lo que
  cambia se ve al instante en la pantalla. Si recargas la página, todo vuelve a ser como dice el HTML.
- **Los eventos.** Un evento es algo que pasa en la página, como un clic o una tecla. Tu script le pide al navegador
  que le avise cuando pase un evento en un elemento, y que en ese momento haga algo. Ese pedido se escribe con
  `addEventListener`.

El script hace tres cosas, en orden. Busca el botón y la lista, escucha el clic del botón y, cuando llega, cambia la
lista.

1. Al final de `Header.astro`, después de `</header>`, escribe

```astro
<script>
	// El botón y la lista del menú, buscados por su id. El id tiene que ser igual aquí y en el
	// HTML de arriba; si no, getElementById devuelve null y el menú no funciona.
	const boton = document.getElementById('boton-menu');
	const menu = document.getElementById('menu-principal');

	// Al pulsar el botón, el menú se abre si estaba cerrado y se cierra si estaba abierto.
	// aria-expanded le dice al lector de pantalla si el menú está abierto ("true") o cerrado ("false").
	boton.addEventListener('click', () => {
		const abierto = boton.getAttribute('aria-expanded') === 'true';
		boton.setAttribute('aria-expanded', abierto ? 'false' : 'true');
		menu.classList.toggle('hidden');
	});
</script>
```

Línea por línea.

- `<script>` en un componente de Astro va al navegador y corre una vez cuando la página termina de cargar. Como la
  cabecera está en todas las páginas, el menú funciona en las cuatro.
- `document.getElementById('boton-menu')` busca en la página la etiqueta con `id="boton-menu"`. `document` es la
  página entera. Lo que encuentra se guarda en la constante `boton`, como las constantes de la semana 5. La línea de
  abajo hace lo mismo con la lista y la guarda en `menu`.
- `boton.addEventListener('click', () => { … })` quiere decir «cuando hagan clic en el botón, haz lo que está entre
  las llaves». La flecha `=>` es una función sin nombre, como la del `.map()` de la semana 5. Aquí lleva llaves y no
  paréntesis, porque no devuelve nada; hace varias cosas, una por línea.
- `boton.getAttribute('aria-expanded') === 'true'` lee el atributo del botón. `abierto` vale `true` si el menú está
  abierto y `false` si está cerrado.
- `boton.setAttribute('aria-expanded', abierto ? 'false' : 'true')` escribe el atributo al revés de como estaba. Es la
  misma pregunta con `?` y `:` que usaste en la semana 5 para `aria-current`.
- `menu.classList.toggle('hidden')` quita la clase `hidden` si la lista la tiene y la pone si no la tiene. Sin
  `hidden`, la lista se ve.

**Así sabes que te salió.** A 375 px pulsa «Menú». La lista aparece debajo, con un enlace por renglón, y al pulsar otra
vez se esconde. Para ver el atributo, haz clic derecho sobre el botón, elige **Inspeccionar** y mira cómo
`aria-expanded` cambia de `"false"` a `"true"` cada vez que lo pulsas.

## Paso 5. Escape cierra el menú

Hay personas que navegan solo con el teclado. Con **Tab** saltan de enlace en enlace y con **Enter** pulsan. Para
ellas, la tecla **Escape** cierra lo que está abierto, y el foco, la marca que dice dónde está el teclado, vuelve al
botón. Así no se pierden en la página.

1. En el mismo `<script>`, debajo del `});` del clic y antes de `</script>`, agrega

```astro
	// Con el menú abierto, la tecla Escape lo cierra y devuelve el foco al botón.
	document.addEventListener('keydown', (evento) => {
		if (evento.key === 'Escape' && boton.getAttribute('aria-expanded') === 'true') {
			boton.setAttribute('aria-expanded', 'false');
			menu.classList.add('hidden');
			boton.focus();
		}
	});
```

- `document.addEventListener('keydown', …)` escucha las teclas en toda la página, no solo en el botón, porque cuando
  la persona pulsa Escape el foco puede estar en un enlace del menú.
- `evento` trae los datos de lo que pasó y `evento.key` es el nombre de la tecla.
- `&&` quiere decir «y». El menú se cierra si la tecla es Escape **y** está abierto.
- `menu.classList.add('hidden')` usa `add` y no `toggle`, porque Escape solo cierra, nunca abre.
- `boton.focus()` devuelve el foco al botón.

**Así sabes que te salió.** A 375 px haz clic en un espacio vacío de la página y pulsa **Tab** hasta que el botón
«Menú» quede marcado. Pulsa **Enter** y el menú se abre. Pulsa **Escape** y se cierra, con el botón todavía marcado.
Luego pon el ancho en `1280`. El menú está en fila, sin botón, como antes. Escribe `npm run revisar -- 6` y el menú
dice **Cuadra**. Café Orquídea en este punto tiene **89 de 100**; lo que falta es el componente de la lección 6.2.

## Paso 6. El error típico, un id escrito distinto

Si en el script escribes un `id` que no está en la página, por ejemplo `getElementById('boton-menus')` con una «s» de
más, Astro no avisa nada. La terminal de `npm run dev` no muestra errores y `npm run build` termina con «Complete!».
Pero el botón «Menú» ya no hace nada.

Lo que pasa es esto. `getElementById` no encuentra ninguna etiqueta con ese nombre y devuelve `null`, que en
JavaScript quiere decir «nada». Más abajo el script le pide a esa «nada» que escuche el clic, y ahí se detiene. Lo que
viene después, incluida la tecla Escape, no llega a correr.

Para verlo, pulsa **F12** y elige la pestaña **Consola** (en inglés, *Console*). El error sale en rojo.

```
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
```

Quiere decir «no se puede leer `addEventListener` de null». A la derecha dice de dónde viene,
`Header.astro?astro&type=script&index=0&lang.ts:7:7`. Lo que importa es el nombre del archivo, `Header.astro`; los
números del final pueden ser otros en tu sitio.

El revisor también lo encuentra.

```
Falta    En el celular el menú se abre y se cierra con el botón «Menú», que tiene aria-expanded, y Escape lo cierra
         El script de src/components/Header.astro busca el id «boton-menus» y ninguna página tiene un elemento con id="boton-menus". Escribe el id igual en el HTML y en el script, porque si no, getElementById da null y nada funciona.
```

Se arregla escribiendo el `id` igual en el HTML y en el script. Las mayúsculas cuentan, así que `Boton-menu` y
`boton-menu` son dos nombres distintos.

**Así sabes que te salió.** El botón vuelve a abrir el menú, la consola ya no muestra el error al recargar con **F5** y
el revisor marca **Cuadra** otra vez en el menú.

### En tu proyecto, lección 6.1

1. Abre `src/components/Header.astro` y arma el botón y la lista como en el paso 3. Si tu cabecera tiene otros
   colores, cambia `border-crema`, `text-crema`, `hover:bg-crema` y `hover:text-selva` del botón por los de tu marca,
   para que se lea sobre tu fondo.
2. Copia el `<script>` de los pasos 4 y 5 al final del archivo. Si usaste los mismos `id`, no cambia nada.
3. A 375 px comprueba que el menú se abra, que se cierre y que Escape lo cierre. A 1280 px, que se vea en fila y sin
   botón.
4. Escribe `npm run revisar -- 6`. El menú dice **Cuadra** y el componente interactivo sigue en **Falta** hasta la
   lección 6.2.

| Negocio | Su menú | Lo que gana con el botón |
| :-- | :-- | :-- |
| Taller de estructuras metálicas | Inicio, Trabajos, Nosotros, Contacto | Quien busca un portón desde el celular ve primero la foto de un trabajo terminado y no una lista de enlaces |
| Concesionario | Inicio, Autos, Motos, Financiamiento, Taller, Contacto | Seis enlaces en fila no caben en un celular. Detrás del botón no importa cuántos sean |
| Bodega | Inicio, Ofertas, Pedidos, Contacto | Las ofertas de la semana y el botón de WhatsApp para pedir quedan a la vista sin bajar |

## Paso 7. Elige tu componente interactivo

El revisor pide uno de estos cuatro. Vale cualquiera, así que elige el que le sirve a tu negocio.

| Opción | Qué hace | A quién le sirve | JavaScript |
| :-- | :-- | :-- | :-- |
| Preguntas frecuentes con `<details>` | Cada pregunta abre su respuesta al pulsarla | A casi cualquier negocio, para responder una vez lo que todos preguntan por WhatsApp, como reservas, envíos, formas de pago o garantía | Ninguno |
| Galería con `<dialog>` | Una foto se abre en grande sobre la página | A quien vende algo que se mira de cerca, como un taller, un hospedaje o un concesionario | Un poco |
| Testimonio al azar | Cada visita muestra otra opinión de un cliente | A quien gana clientes por recomendación, como un consultorio, una academia o un restaurante | Un poco |
| Modo oscuro | Un botón cambia la página a fondo oscuro | A un sitio que se lee de noche, como la carta de una pollería. En un negocio pequeño es la que menos ayuda y la que más trabajo da, porque cada color necesita su pareja oscura | Un poco |

La lección 6.2 hace las preguntas frecuentes en Café Orquídea, porque le sirven a casi todos y no necesitan
JavaScript. Si dudas, elige esa. Las otras tres están después del paso 9, con su código completo.

## Paso 8. Las preguntas, en un arreglo

En la semana 5 escribiste tus productos en un arreglo de objetos y los pintaste con `.map()`. Las preguntas frecuentes
se arman igual. Como solo se usan en una página, el arreglo va entre los `---` de esa página y no en `src/data/`.

1. Abre `src/pages/contacto.astro`, o la página donde tus clientes buscan cómo comprarte.
2. Entre los `---`, debajo de los `import`, escribe tus preguntas.

```astro
// Las preguntas frecuentes. Cada una se pinta abajo con <details> y <summary>, y el navegador la
// abre y la cierra solo al pulsar la pregunta, sin JavaScript.
const preguntas = [
	{
		pregunta: '¿Puedo reservar una mesa?',
		respuesta: 'Sí. Escríbenos por WhatsApp con el día, la hora y cuántas personas vienen, y te confirmamos la reserva.',
	},
	{
		pregunta: '¿Puedo pedir para recoger?',
		respuesta: 'Sí. Mándanos tu pedido por WhatsApp y dinos a qué hora pasas. Te lo tenemos listo en la barra.',
	},
	{
		pregunta: '¿Hacen envíos a domicilio?',
		respuesta: 'Por ahora no. Pide por WhatsApp y recoge tu pedido en Jr. Grau 345, a media cuadra de la Plaza de Armas.',
	},
	{
		pregunta: '¿De dónde es el café que sirven?',
		respuesta: 'De fincas de la provincia de Rioja, en el Alto Mayo. Lo preparamos pasado, espresso o con leche.',
	},
];
```

Cada objeto tiene dos datos, `pregunta` y `respuesta`. Escribe las que de verdad te hacen tus clientes, por WhatsApp o
en el mostrador, tres como mínimo. Las preguntas abren con «¿» y cierran con «?».

**Así sabes que te salió.** En la página no cambia nada, porque el arreglo todavía no se pinta, y VS Code no marca nada
en rojo.

## Paso 9. Cada pregunta, un `<details>`

1. Al final del `<main>`, antes de `</main>`, escribe la sección.

```astro
<section class="mt-16 max-w-3xl space-y-4">
	<h2 class="font-titulo text-3xl font-semibold text-cafe">Preguntas frecuentes</h2>
	{preguntas.map((p) => (
		<details class="rounded-2xl bg-crema-claro shadow-md shadow-cafe-oscuro/10">
			<summary class="cursor-pointer p-5 font-semibold text-cafe marker:text-orquidea hover:text-orquidea-oscuro">{p.pregunta}</summary>
			<p class="px-5 pb-5">{p.respuesta}</p>
		</details>
	))}
</section>
```

- `<details>` es un bloque plegado. `<summary>` es la parte que se ve siempre, la pregunta. Al pulsarla, el navegador
  muestra u oculta lo demás, sin una sola línea de JavaScript. También funciona con **Tab** y **Enter**, y el lector
  de pantalla dice si está abierta o cerrada.
- `.map((p) => ( … ))` lleva paréntesis, como el catálogo de la semana 5. En cada vuelta, `p` es una pregunta del
  arreglo, y `{p.pregunta}` y `{p.respuesta}` pintan sus dos datos.
- `p-5` en el `<summary>` hace que toda la franja de la pregunta se pueda pulsar, no solo el texto.
- `marker:text-orquidea` pinta del color de la marca el triangulito que gira al abrir, y `cursor-pointer` muestra la
  manito al pasar el ratón.

**Así sabes que te salió.** En Contacto aparecen tus preguntas, cerradas. Al pulsar una se abre su respuesta y al
pulsarla otra vez se cierra. Pruébalo también con **Tab** y **Enter**. Escribe `npm run revisar -- 6` y todo dice
**Cuadra**, con **Puntaje 100 de 100**.

### Las otras tres opciones

Si elegiste otra opción, copia su código, cambia los textos y las fotos por los tuyos y comprueba que cada `id` del
script sea igual al del HTML. El `<script>` va al final del archivo de la página, después de `</Layout>`.

**Galería con `<dialog>`.** Una foto que, al pulsarla, se abre en grande sobre la página con el fondo oscurecido.
Entre los `---` de la página van `Image` y la foto. En el ejemplo la foto se importa como `local`; usa el nombre con
que importaste la tuya.

```astro
---
import { Image } from 'astro:assets';
import Layout from '../layouts/Layout.astro';
import local from '../assets/local.jpg';
---
```

```astro
<button id="abrir-foto" type="button" class="block overflow-hidden rounded-3xl">
	<Image src={local} alt="El salón de Café Orquídea con sus mesas de madera" width={400} />
</button>
<dialog id="foto-grande" class="m-auto max-w-3xl rounded-3xl p-0 backdrop:bg-cafe-oscuro/70">
	<Image src={local} alt="El salón de Café Orquídea con sus mesas de madera" width={1200} />
	<form method="dialog" class="p-4 text-right">
		<button class="rounded-full bg-selva px-5 py-2 font-semibold text-crema">Cerrar</button>
	</form>
</dialog>
```

```astro
<script>
	const abrir = document.getElementById('abrir-foto');
	const foto = document.getElementById('foto-grande');

	abrir.addEventListener('click', () => {
		foto.showModal();
	});
</script>
```

`<dialog>` es una ventana que el navegador ya sabe abrir y cerrar. `showModal()` la abre encima de todo y oscurece lo
demás con el color de `backdrop:`. El botón «Cerrar» va dentro de un `<form method="dialog">`, que la cierra sin
JavaScript, y la tecla Escape también la cierra. La clase `m-auto` es necesaria, porque Tailwind le quita el margen a
todas las etiquetas y, sin ella, la ventana sale pegada a una esquina.

**Testimonio al azar.** Cada vez que se abre la página aparece la opinión de un cliente distinto, y el botón muestra
otra. Escribe opiniones reales de tus clientes, con su permiso.

```astro
<figure class="rounded-3xl bg-crema-claro p-6">
	<blockquote id="testimonio" class="font-titulo text-xl text-cafe">«El mejor café pasado de Rioja.» Rosa, cliente desde 2019</blockquote>
	<button id="otro-testimonio" type="button" class="mt-4 rounded-full border-2 border-selva px-5 py-2 font-semibold text-selva">Ver otra opinión</button>
</figure>
```

```astro
<script>
	const testimonios = [
		'«El mejor café pasado de Rioja.» Rosa, cliente desde 2019',
		'«Reservé para mi equipo por WhatsApp y todo salió puntual.» Jorge',
		'«Los postres caseros valen el viaje.» Lucía, de paso por el Alto Mayo',
	];
	const testimonio = document.getElementById('testimonio');
	const otro = document.getElementById('otro-testimonio');

	function mostrarUnoAlAzar() {
		const numero = Math.floor(Math.random() * testimonios.length);
		testimonio.textContent = testimonios[numero];
	}

	mostrarUnoAlAzar();
	otro.addEventListener('click', mostrarUnoAlAzar);
</script>
```

`Math.random()` da un número al azar entre 0 y 1, sin llegar a 1. Multiplicado por la cantidad de testimonios y
redondeado hacia abajo con `Math.floor`, da 0, 1 o 2, la posición de uno de ellos en el arreglo. `textContent` escribe
ese texto dentro del `<blockquote>`. La función `mostrarUnoAlAzar` corre una vez al cargar y otra con cada clic. El
primer testimonio también está escrito en el HTML, así algo se ve aunque el script tarde.

**Modo oscuro.** Un botón cambia la página a fondo oscuro y letras claras. Primero, en `src/styles/global.css`,
debajo de `@import "tailwindcss";`, escribe la segunda línea.

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

Sin esa línea, Tailwind aplica las clases `dark:` según el ajuste del celular o la computadora de la persona, y no
según tu botón. Luego pon el botón en la página y agrega una clase `dark:` a cada etiqueta que tenga color. Así quedan
el `<main>`, el título y el botón en la página de prueba del ejemplo. En la tuya, agrega solo las clases que empiezan
con `dark:` a tus etiquetas.

```astro
<main class="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 dark:bg-cafe-oscuro dark:text-crema">
	<h1 class="font-titulo text-4xl font-semibold text-cafe dark:text-crema">Opciones</h1>

	<button id="boton-tema" type="button" aria-pressed="false" class="rounded-full border-2 border-selva px-5 py-2 font-semibold text-selva dark:border-crema dark:text-crema">Modo oscuro</button>
```

```astro
<script>
	const botonTema = document.getElementById('boton-tema');

	botonTema.addEventListener('click', () => {
		const oscuro = document.documentElement.classList.toggle('dark');
		botonTema.setAttribute('aria-pressed', oscuro ? 'true' : 'false');
	});
</script>
```

`document.documentElement` es la etiqueta `<html>`. `classList.toggle('dark')` le pone la clase `dark` o se la quita,
y con ella se encienden todas las clases `dark:` de la página. `aria-pressed` le dice al lector de pantalla si el modo
oscuro está encendido. Para que cambie el fondo de toda la página y no solo el del `<main>`, pon también
`dark:bg-cafe-oscuro` en el `<body>` de `src/layouts/Layout.astro`. Al pasar a otra página vuelven los colores claros,
porque cada página empieza sin la clase `dark`; por eso conviene en una página larga que se lee de corrido, como la
carta.

### En tu proyecto, lección 6.2

1. Elige la opción que le sirve a tu negocio (paso 7).
2. Si son preguntas frecuentes, escribe el arreglo en la página (paso 8), con tres preguntas o más de las que de verdad
   te hacen, y píntalo con `<details>` (paso 9). Cambia `orquidea`, `cafe` y `crema-claro` por los colores de tu
   marca.
3. Si es otra opción, copia su código de «Las otras tres opciones» y cambia textos, fotos y colores.
4. Comprueba a 375 px que se abra y se cierre con el dedo y con el teclado, y escribe `npm run revisar -- 6`.

| Negocio | Le conviene | Por qué |
| :-- | :-- | :-- |
| Taller de estructuras metálicas | Galería con `<dialog>` | Quien encarga un portón o una escalera quiere ver de cerca la soldadura y el acabado antes de llamar. Cada trabajo terminado se abre en grande |
| Concesionario | Preguntas frecuentes | Antes de ir al local todos preguntan por la inicial, las cuotas, los documentos y la prueba de manejo. Si ya lo leyeron, llegan decididos |
| Bodega | Una oferta al azar, con el código del testimonio | El vecino que entra todos los días ve otra oferta cada vez. En el arreglo van las ofertas en lugar de las opiniones y el botón dice «Ver otra oferta» |

Así empezaría el arreglo del concesionario.

```js
const preguntas = [
	{
		pregunta: '¿Cuánto es la inicial?',
		respuesta: 'Desde el 20 % del precio del auto. El resto lo pagas en cuotas de 12 a 60 meses.',
	},
	{
		pregunta: '¿Puedo probar el auto antes de comprarlo?',
		respuesta: 'Sí. Escríbenos por WhatsApp para separar la prueba de manejo y trae tu licencia de conducir.',
	},
	// La pregunta de los documentos, con la misma forma
];
```

## Paso 10. Revisa tu entrega

En una segunda terminal escribe

```
npm run revisar -- 6
```

Lee cada línea que dice **Falta** y lo que tiene debajo. Corrige, guarda y vuelve a revisar. Este revisor también
comprueba lo de las semanas 2 a 5, así que si al tocar la cabecera algo de antes se rompió, aquí aparece.

## Paso 11. Guarda tu avance en GitHub

1. En **Control de código fuente** (**Ctrl + Shift + G**) escribe el mensaje `Semana 6, menú del celular y componente
   interactivo`.
2. Pulsa **Commit** y luego **Sync Changes**.

**Así sabes que te salió.** El revisor dice **Puntaje 100 de 100** y en GitHub, al abrir `src/components/Header.astro`,
ves el `<script>` del menú al final.

## Entrega

En el aula, en la tarea **Semana 6**, pega el enlace de tu repositorio, el mismo de las semanas anteriores, y responde
el cuestionario de la semana. Ritmo sugerido hasta el domingo 22 de noviembre. Todo cierra el domingo 29 de noviembre
a las 23:59.

## Si algo falla

| Lo que ves | Qué hacer |
| :-- | :-- |
| Pulsas «Menú» y no pasa nada, y la consola (**F12**) dice `Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')` | El `id` del script no es igual al del HTML. El revisor dice «El script de src/components/Header.astro busca el id «boton-menus» y ninguna página tiene un elemento con id="boton-menus"…», con el id que escribiste. Escríbelo igual en los dos lados (paso 6) |
| Pulsas «Menú», no pasa nada y la consola no muestra ningún error | El `<script>` no está en `Header.astro`, o `classList.toggle` dice otra clase que no es `hidden`. El script va al final del archivo, después de `</header>` (paso 4). Guarda y recarga con **F5** |
| El botón «Menú» se ve también en la computadora | Falta `md:hidden` en el botón. El revisor dice «El botón del menú se ve también en la computadora. Agrégale la clase md:hidden en src/components/Header.astro.» |
| En la computadora el menú no se ve, o en el celular se ve sin pulsar el botón | La lista necesita las dos clases, `hidden` y `md:flex`. El revisor dice «La lista del menú (id="menu-principal") tiene que llevar la clase hidden, para esconderse en el celular, y md:flex, para verse siempre en la computadora.» |
| El revisor dice «El botón dice aria-controls="…" y ningún elemento tiene id="…"» | El `aria-controls` del botón y el `id` de la lista tienen que ser el mismo texto, `menu-principal` |
| El revisor dice «El botón del menú empieza con aria-expanded="true"…» | En el HTML escribe `aria-expanded="false"`, porque al abrir la página el menú está cerrado. El script lo cambia solo |
| El revisor dice «Ningún <script> cambia aria-expanded al pulsar el botón…» | Tu script abre la lista, pero no avisa al lector de pantalla. Agrega la línea del `setAttribute('aria-expanded', …)` del paso 4 |
| El revisor dice «El menú no se cierra con la tecla Escape…» | Falta el `keydown` del paso 5, o el nombre de la tecla está escrito distinto. Es `'Escape'`, con E mayúscula |
| VS Code subraya `boton` y dice «'boton' is possibly 'null'» | Es un aviso del editor, que sabe que `getElementById` puede dar `null`, justo el error del paso 6. No impide compilar y el revisor no lo cuenta. Si el menú funciona en el navegador, puedes dejarlo así |
| El revisor dice «… la etiqueta lleva el atributo onclick, un evento escrito en el HTML.» | Borra ese atributo de la etiqueta y escucha el clic con `addEventListener` dentro de un `<script>`, como el del menú |
| El revisor dice «Tienes 2 pregunta(s) con <details> y la semana pide 3.» | Agrega objetos al arreglo `preguntas` hasta tener tres o más, cada uno con su `pregunta` y su `respuesta` |
| La foto grande del `<dialog>` sale pegada a una esquina | Falta `m-auto` en el `<dialog>`. Tailwind le quita el margen y la ventana deja de centrarse |
| El revisor dice «Hay un <dialog>, pero ningún script lo abre…» | En el `<script>`, al pulsar la foto, llama a `showModal()` del `<dialog>`, como en «Las otras tres opciones» |
| El revisor dice «Tu script elige al azar con Math.random(), pero no escribe nada en la página…» | Falta la línea `testimonio.textContent = testimonios[numero];`, la que pone el texto elegido en la página |
| Pulsas «Modo oscuro» y los colores no cambian | Falta `@custom-variant dark (&:where(.dark, .dark *));` en `src/styles/global.css`, debajo de `@import "tailwindcss";`. El revisor dice «Tu script pone la clase dark, pero Tailwind todavía sigue el ajuste del equipo…» |
| En modo oscuro un texto no se lee | Esa etiqueta no tiene su clase `dark:`. Agrégale un color claro, como `dark:text-crema` |
| `la ejecución de scripts está deshabilitada en este sistema` | Estás en PowerShell; cambia la terminal a **Símbolo del sistema**, como en el paso 7 de la semana 1 |

## Para saber más

- [Scripts en Astro](https://docs.astro.build/es/guides/client-side-scripts/), en español
- [`addEventListener`, en español](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
- [`<details>`, en español](https://developer.mozilla.org/es/docs/Web/HTML/Element/details)
- [`<dialog>`, en español](https://developer.mozilla.org/es/docs/Web/HTML/Element/dialog)
- La semana que viene armas un formulario de contacto que escribe el mensaje de WhatsApp por la persona, y preparas tu
  sitio para los buscadores con el título y la descripción de cada página.
