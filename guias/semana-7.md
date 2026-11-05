# Semana 7 — El formulario de WhatsApp y tu sitio listo para Google y las redes

Tu sitio ya se ve bien y responde a lo que hace la persona. Esta semana le ahorra trabajo a quien te escribe y lo deja
listo para que lo encuentren. Primero, en Contacto, un formulario con los datos que tu negocio necesita, que al
enviarlo abre WhatsApp con el mensaje ya escrito. Luego preparas cada página para Google y para las redes, con su
descripción, la vista previa que sale al compartir el enlace y el mapa del sitio, y mides la calidad con Lighthouse.
Al terminar tendrás

- En Contacto, un formulario con cada campo y su etiqueta, que el navegador revisa solo antes de enviar.
- Un `<script>` que arma el mensaje con lo que escribió la persona y abre WhatsApp, sin que nada se corte.
- Cada página con su título y su descripción, y la vista previa de Open Graph para WhatsApp y Facebook.
- El mapa del sitio que Astro genera al compilar, para que Google encuentre todas tus páginas.
- Un informe de Lighthouse con 90 o más en Rendimiento, Accesibilidad, Prácticas recomendadas y SEO.

> **Plazo.** Todas las tareas y cuestionarios del curso cierran el **domingo 29 de noviembre a las 23:59**. Para
> llegar sin apuro, termina las semanas 6 y 7 hasta el domingo 22 de noviembre. En el aula tienes dos vídeos. La
> **Lección 7.1, El formulario que arma el mensaje de WhatsApp** acompaña los pasos 2 al 5 y la **Lección 7.2, Que
> Google y las redes entiendan tu sitio**, los pasos 6 al 10. Las dudas van por Google Chat.

## Cómo terminar el curso

- **Ritmo.** Semanas 6 y 7 hasta el domingo 22 de noviembre, y la 8 con la sustentación hasta el domingo 29 de
  noviembre a las 23:59, cuando cierra todo. Si todavía te faltan semanas anteriores, ponte al día con la ruta corta.
- **Una sola entrega que crece.** Todas las tareas llevan el mismo enlace, el de tu repositorio, y el revisor de cada
  semana comprueba también lo de las anteriores.
- **Si vas atrasado, la ruta corta.** No empieces otro proyecto. En tu mismo repositorio actualiza el revisor (paso 1)
  y escribe `npm run revisar -- 7`. Cada **Falta** es algo pendiente de las semanas 1 a 7. Arréglalos de arriba
  abajo con la guía de esa semana (la tabla del [inicio](../README.md) dice el tema de cada una) y, al terminar cada
  semana, entrega su tarea con el mismo enlace.
- **Si te trabas**, escribe por Google Chat con el paso de la guía y el mensaje exacto del revisor, de la terminal o de
  la consola del navegador.

## Antes de empezar

- Haber terminado la semana 6, porque el formulario usa lo que viste ahí, un `<script>` que busca una etiqueta y
  escucha un evento con `addEventListener`.
- Mira los dos vídeos de la semana. En ellos Café Orquídea, el sitio del ejemplo, recibe su formulario y queda listo
  para Google con los mismos pasos de esta guía.
- Ten a mano Google Chrome o Microsoft Edge. Lighthouse viene dentro de sus herramientas para desarrolladores, las de
  **F12**.

## Palabras nuevas

| Palabra | Qué es |
| :-- | :-- |
| `<form>` | La etiqueta que agrupa los campos de un formulario y su botón de enviar |
| `<label for="…">` | El texto que dice qué va en un campo. Su `for` lleva el mismo texto que el `id` del campo y así quedan unidos |
| `name` | El nombre con el que el script encuentra lo que la persona escribió en un campo |
| `required` | Hace obligatorio un campo. Si está vacío, el navegador no deja enviar el formulario |
| `type` | El tipo de dato de un campo, como `text`, `time`, `email` o `tel`. Con él el navegador revisa el dato y el celular muestra el teclado que corresponde |
| `submit` | El evento que avisa que la persona envió el formulario |
| `preventDefault()` | Le dice al navegador que no haga lo que haría solo, en este caso mandar el formulario y recargar la página |
| `encodeURIComponent` | Cambia los espacios, las tildes, los saltos de línea, el `&` y el `#` por códigos que viajan seguros dentro de un enlace |
| Descripción | El texto de `<meta name="description">`. Google lo muestra debajo del título en sus resultados |
| Open Graph | Las etiquetas `og:` que dicen qué título, texto e imagen mostrar cuando alguien comparte tu enlace por WhatsApp o Facebook |
| `site` | La dirección donde se publicará tu sitio. Va en `astro.config.mjs` |
| Mapa del sitio | En inglés *sitemap*. Un archivo con la lista de todas tus páginas, para que Google las encuentre |
| Lighthouse | La herramienta de Chrome y Edge que pone nota de 0 a 100 a tu página en Rendimiento, Accesibilidad, Prácticas recomendadas y SEO |

## Paso 1. Actualiza el revisor y enciende el sitio

1. Abre tu repositorio en VS Code y, en la terminal, escribe

   ```
   npm run revisar -- actualizar
   ```

   **Así sabes que te salió.** Dice «Revisor actualizado». La semana 7 necesita el revisor 7; con uno anterior te
   pedirá que lo actualices.
2. Escribe `npm run revisar -- 7`. Marca **Falta** en lo nuevo de esta semana, el formulario, su script, Open Graph,
   el mapa del sitio y Lighthouse. Café Orquídea, con la semana 6 completa, empieza con **65 de 100**. Al terminar
   la guía, todo dice **Cuadra**.
3. Enciende el sitio con `npm run dev` y abre `http://localhost:4321/contacto`.

## Paso 2. El formulario y sus campos

Hoy, quien quiere reservar o pedir pulsa «Escríbenos por WhatsApp» y escribe todo desde cero. A veces se olvida de la
hora, a veces de su nombre, y el negocio tiene que preguntar de vuelta. Un formulario pide justo lo que el negocio
necesita y entrega el mensaje completo de una vez.

1. Abre `src/pages/contacto.astro`.
2. Antes de la sección de las preguntas frecuentes, la que empieza con
   `<section class="mt-16 max-w-3xl space-y-4">`, pega esta sección

```astro
		<section class="mt-16 max-w-3xl space-y-4 rounded-3xl bg-crema-claro p-6 shadow-lg shadow-cafe-oscuro/10 sm:p-8">
			<h2 class="font-titulo text-3xl font-semibold text-cafe">Arma tu mensaje</h2>
			<p>Llena tus datos y te abrimos WhatsApp con el mensaje escrito. Solo te queda pulsar Enviar.</p>
			<form class="grid gap-5 sm:grid-cols-2">
				<div class="flex flex-col gap-2">
					<label for="nombre" class="font-semibold">Tu nombre</label>
					<input id="nombre" name="nombre" type="text" autocomplete="name" required class="rounded-xl border-2 border-cafe/30 bg-crema px-4 py-3 focus:border-orquidea focus:outline-2 focus:outline-offset-2 focus:outline-orquidea" />
				</div>
				<div class="flex flex-col gap-2">
					<label for="motivo" class="font-semibold">Qué necesitas</label>
					<select id="motivo" name="motivo" required class="rounded-xl border-2 border-cafe/30 bg-crema px-4 py-3 focus:border-orquidea focus:outline-2 focus:outline-offset-2 focus:outline-orquidea">
						<option value="">Elige una opción</option>
						<option value="Quiero reservar una mesa">Reservar una mesa</option>
						<option value="Quiero pedir para recoger">Pedir para recoger</option>
					</select>
				</div>
				<div class="flex flex-col gap-2">
					<label for="hora" class="font-semibold">A qué hora vienes</label>
					<input id="hora" name="hora" type="time" required class="rounded-xl border-2 border-cafe/30 bg-crema px-4 py-3 focus:border-orquidea focus:outline-2 focus:outline-offset-2 focus:outline-orquidea" />
				</div>
				<div class="flex flex-col gap-2 sm:col-span-2">
					<label for="mensaje" class="font-semibold">Tu pedido o cuántas personas vienen</label>
					<textarea id="mensaje" name="mensaje" rows="4" required placeholder="Por ejemplo, dos capuchinos y una torta de chocolate" class="rounded-xl border-2 border-cafe/30 bg-crema px-4 py-3 focus:border-orquidea focus:outline-2 focus:outline-offset-2 focus:outline-orquidea"></textarea>
				</div>
				<button type="submit" class="justify-self-start rounded-full bg-orquidea px-6 py-3 font-semibold text-crema-claro hover:bg-orquidea-oscuro focus:outline-2 focus:outline-offset-2 focus:outline-orquidea">Enviar por WhatsApp</button>
			</form>
		</section>
```

- `<form>` agrupa los campos y el botón. No lleva `action` porque no se manda a ningún servidor; lo manda el script
  del paso 4.
- Cada campo va en un `<div>` con su `<label>` arriba. El `for` del label y el `id` del campo dicen lo mismo, como
  `for="nombre"` y `id="nombre"`. Así quedan unidos. Al pulsar el texto «Tu nombre» se marca el campo, y el lector de
  pantalla dice «Tu nombre» cuando la persona llega a él.
- `name` es el nombre con el que el script busca lo escrito. Puede ser igual al `id`, y así es más fácil.
- `<input>` es un campo de una línea, `<select>` una lista para elegir y `<textarea>` un texto de varias líneas.
- En el `<select>`, cada `<option>` tiene dos textos. El de adentro es el que ve la persona, «Reservar una mesa», y su
  `value` es el que llega al mensaje, «Quiero reservar una mesa». La primera opción tiene `value=""`, vacío, para que
  nadie la envíe sin elegir.
- `autocomplete="name"` deja que el celular ofrezca el nombre guardado, con un toque.
- El botón dice `type="submit"`. Pulsarlo es enviar el formulario.
- `grid` y `sm:grid-cols-2` ponen los campos uno debajo de otro en el celular y en dos columnas desde 640 px, como en
  la semana 4. `sm:col-span-2` hace que el mensaje ocupe las dos columnas.

**Así sabes que te salió.** A 375 px (**F12**, luego **Ctrl + Shift + M** y `375` en el primer número de arriba) ves
la tarjeta «Arma tu mensaje» con los cuatro campos uno debajo de otro, cada uno con su texto encima. Haz clic en el
texto «Tu nombre» y el campo de abajo queda marcado.

## Paso 3. El navegador revisa los campos solo

Lo que hacen `required` y `type` lo trae el navegador. No hay que escribir JavaScript para eso.

- `required` en los cuatro campos. Si uno está vacío, el navegador no envía el formulario, marca ese campo y muestra
  un globo con el aviso.
- `type="time"` en la hora. En la computadora el campo se llena por partes, hora y minutos, y en el celular abre el
  reloj para elegir. El dato siempre llega igual, como `10:30`, sin que nadie escriba «10 y media» o «diez».
- `type="text"` en el nombre, que acepta cualquier texto.

Si tu negocio pide otros datos, elige su `type`. Un correo va con `type="email"`, y el navegador revisa que tenga
`@`. Un celular va con `type="tel"`, y el celular muestra el teclado de números. Una fecha va con `type="date"`, que
abre el calendario.

**Así sabes que te salió.** Sin llenar nada, pulsa **Enviar por WhatsApp**. El navegador marca «Tu nombre» y muestra
el globo **Completa este campo** (en Edge el texto puede ser otro). Llena el nombre y vuelve a pulsar. Ahora el globo
sale en «Qué necesitas». Todavía no pasa nada más al llenar todo, porque falta el script.

## Paso 4. El script que arma el mensaje

1. En el mismo `src/pages/contacto.astro`, al final del archivo, debajo de `</Layout>`, pega

```astro
<script>
	// El formulario de «Arma tu mensaje». En esta página hay uno solo, así que basta con buscar <form>.
	const formulario = document.querySelector('form');

	// Al pulsar «Enviar por WhatsApp», el navegador revisa primero los campos con required. Si
	// alguno está vacío, lo marca y no sigue. Si todo está lleno, avisa con el evento submit.
	formulario.addEventListener('submit', (evento) => {
		// Sin esta línea, el navegador mandaría el formulario y volvería a cargar la página.
		evento.preventDefault();

		// Lo que escribió la persona, buscado por el name de cada campo.
		const datos = new FormData(formulario);
		const texto = [
			`Hola, Café Orquídea. Soy ${datos.get('nombre')}.`,
			`${datos.get('motivo')} para las ${datos.get('hora')}.`,
			datos.get('mensaje'),
		].join('\n');

		// encodeURIComponent cambia los espacios, las tildes, los saltos de línea, el & y el # por
		// códigos que viajan seguros dentro de un enlace. Sin él, el mensaje llega cortado.
		const enlace = `https://wa.me/51942123456?text=${encodeURIComponent(texto)}`;
		window.open(enlace, '_blank');
	});
</script>
```

- `document.querySelector('form')` busca el primer `<form>` de la página. En Contacto hay uno solo.
- `addEventListener('submit', …)` escucha el envío, igual que el menú escuchaba el clic en la semana 6. El evento
  `submit` llega solo cuando el navegador ya revisó los campos del paso 3.
- `evento.preventDefault()` evita lo que el navegador haría solo, mandar el formulario y recargar la página.
- `new FormData(formulario)` reúne lo escrito en todos los campos, y `datos.get('nombre')` trae lo del campo con
  `name="nombre"`.
- El texto se arma con tres renglones entre comillas invertidas, las de `` ` ``, que dejan meter datos con `${…}`.
  `.join('\n')` los une con un salto de línea entre uno y otro.
- `https://wa.me/` lleva el número con el 51 del Perú delante, sin `+` ni espacios, el mismo de tus botones de
  WhatsApp. Después de `?text=` va el mensaje.
- `encodeURIComponent(texto)` prepara el mensaje para viajar dentro del enlace. El paso 5 muestra qué pasa sin él.
- `window.open(enlace, '_blank')` abre el enlace en otra pestaña. En el celular abre la aplicación de WhatsApp.

**Así sabes que te salió.** Llena el formulario con tu nombre, «Pedir para recoger», una hora y el mensaje
`2 cafés pasados & 1 tamal`. Pulsa **Enviar por WhatsApp**. Se abre otra pestaña con «Chatea en WhatsApp con el
+51 942 123 456» y debajo el mensaje completo, con el `&` y el «1 tamal». La página de Contacto sigue abierta en su
pestaña, sin recargarse. Escribe `npm run revisar -- 7` y el formulario y su script dicen **Cuadra**. Café Orquídea en
este punto tiene **81 de 100**; lo que falta es de la lección 7.2.

## Paso 5. El error típico, el mensaje sin `encodeURIComponent`

Si en el enlace pones el texto tal cual, `?text=${texto}`, Astro no avisa nada y el botón abre WhatsApp. Pero el
mensaje llega cortado. En un enlace, algunos signos tienen un trabajo propio.

- `&` separa un dato del siguiente. Todo lo que viene después se toma como otro dato y WhatsApp lo descarta.
- `#` marca una parte de la página. Lo que viene después no llega a WhatsApp.
- El salto de línea no puede ir en un enlace. El navegador lo borra y los renglones quedan pegados.

Para verlo, cambia `${encodeURIComponent(texto)}` por `${texto}`, guarda y envía el mismo mensaje del paso 4,
`2 cafés pasados & 1 tamal`. WhatsApp muestra

```
Hola, Café Orquídea. Soy Ana.Quiero pedir para recoger para las 10:30.2 cafés pasados
```

Se perdió «& 1 tamal» y los tres renglones quedaron pegados, «Ana.Quiero» y «10:30.2 cafés». En la barra de
direcciones se ve por qué. El enlace termina en `…pasados+&type=phone_number&app_absent=0`, sin el tamal. Con un `#`
pasa lo mismo, «Somos 4, mesa #2» llega como «Somos 4, mesa».

El revisor también lo encuentra.

```
Falta    Un <script> escucha el envío del formulario, evita que la página se recargue y abre WhatsApp con el texto pasado por encodeURIComponent
         El script de src/pages/contacto.astro pone el texto en el enlace sin encodeURIComponent. Escribe ?text=${encodeURIComponent(texto)}, porque sin él un &, un # o un salto de línea cortan el mensaje.
```

Se arregla volviendo a escribir `${encodeURIComponent(texto)}`. Con él, el `&` viaja como `%26`, el salto de línea
como `%0A` y la `é` como `%C3%A9`, y WhatsApp los convierte de vuelta.

**Así sabes que te salió.** El mensaje con `&` llega completo, en tres renglones, y el revisor marca **Cuadra** otra
vez en el script.

### En tu proyecto, lección 7.1

1. Decide qué datos necesita tu negocio para atender sin preguntar de vuelta. Tres o cuatro campos bastan; cada campo
   de más es una razón para no llenarlo.
2. Abre `src/pages/contacto.astro` y pega la sección del paso 2. Cambia los `<label>`, los `id`, los `name` y las
   opciones del `<select>` por los tuyos. Si tu marca tiene otros colores, cambia `bg-crema-claro`, `border-cafe/30`,
   `bg-crema` y `orquidea` por los de tu `@theme`.
3. Pega el script del paso 4. Cambia el saludo, los `datos.get('…')` por los `name` de tus campos y el número por el
   de tu negocio, con el 51 delante.
4. A 375 px envía el formulario vacío y mira el globo. Luego llénalo con un `&` en el mensaje y comprueba que llegue
   completo a WhatsApp.
5. Escribe `npm run revisar -- 7`. El formulario y su script dicen **Cuadra**.

| Negocio | Sus campos | El mensaje que llega |
| :-- | :-- | :-- |
| Taller de estructuras metálicas | Nombre, qué necesita (`<select>` con portón, reja, techo o escalera), medidas aproximadas y distrito | «Hola, soy Luis. Necesito un portón. Mide 3 m de ancho por 2,5 m de alto. Es en Nueva Cajamarca.» |
| Concesionario | Nombre, modelo que le interesa (`<select>`), forma de pago (contado o crédito) y día para la prueba de manejo (`type="date"`) | «Hola, soy Rosa. Me interesa la camioneta 4x4, a crédito. ¿Puedo probarla el 2026-11-20?» |
| Bodega | Nombre, el pedido (`<textarea>`), recoge o envío (`<select>`) y dirección | «Hola, soy Pedro. Quiero 1 aceite, 2 kg de arroz & 1 leche. Paso a recoger.» El `&` llega bien gracias a `encodeURIComponent` |

## Paso 6. Título y descripción de cada página

Cuando alguien busca en Google, cada resultado muestra dos textos de tu página. Arriba, en grande, el título de la
pestaña, el `<title>`. Debajo, en dos renglones, la descripción, el `<meta name="description">`. Los dos llegan desde
la semana 5 por props al molde de página, así que aquí solo se revisan y se mejoran.

1. Abre cada archivo de `src/pages` y lee el `title` y la `description` que le pasa a `<Layout>`.
2. Que cada página tenga los suyos. Si dos páginas dicen lo mismo, Google no sabe cuál mostrar.
3. La descripción, de 50 a 160 caracteres. Más corta no ayuda a decidir; más larga, Google la corta con «…».
4. Que diga lo que la persona encuentra en esa página y por qué le sirve, con palabras que escribiría al buscar, como
   «cafetería en Rioja», «precios» o «cómo llegar».

Así quedaron las de Café Orquídea. La de Contacto cambió para contar que ahora se puede armar el pedido.

| Página | `title` | `description` |
| :-- | :-- | :-- |
| Inicio | Café Orquídea \| Cafetería en Rioja | Café de la provincia, desayunos de la selva y postres caseros a media cuadra de la Plaza de Armas de Rioja. Pide por WhatsApp y pasa a recoger. |
| Carta | Carta \| Café Orquídea | La carta de Café Orquídea con precios en soles. Café pasado, capuchino, tacacho con cecina, tamales, tortas y alfajores hechos en casa. |
| Nosotros | Nosotros \| Café Orquídea | La historia de Café Orquídea, el café de altura del Alto Mayo que servimos y fotos del local en el centro de Rioja. |
| Contacto | Contacto \| Café Orquídea | Arma tu pedido o reserva y te abrimos WhatsApp con el mensaje escrito. Llámanos o visítanos en Jr. Grau 345, Rioja, con horario y mapa. |

En `src/pages/contacto.astro` la primera línea de la página queda así

```astro
<Layout title="Contacto | Café Orquídea" description="Arma tu pedido o reserva y te abrimos WhatsApp con el mensaje escrito. Llámanos o visítanos en Jr. Grau 345, Rioja, con horario y mapa." pagina="/contacto">
```

**Así sabes que te salió.** `npm run revisar -- 7` marca **Cuadra** en «Cada página tiene su propia descripción».
Si una es muy larga, el revisor dice cuántos caracteres tiene.

## Paso 7. La dirección de tu sitio en `astro.config.mjs`

Open Graph y el mapa del sitio necesitan direcciones completas, con `https://`, porque WhatsApp y Google las leen
desde fuera de tu sitio. Astro las arma con `site`, la dirección donde se publicará.

1. Abre `astro.config.mjs`, en la raíz del proyecto.
2. Dentro de `defineConfig({`, arriba de `vite`, agrega `site` con tu usuario de GitHub en minúsculas. En Café
   Orquídea queda así

```js
export default defineConfig({
  // La dirección donde se publicará el sitio, en GitHub Pages: https:// y tu usuario de GitHub.
  // Con ella Astro escribe las direcciones completas del mapa del sitio y de Open Graph.
  // La «base», el nombre del repositorio, se agrega en la semana 8, al publicar.
  site: 'https://nilosalvador.github.io',

  vite: {
    plugins: [tailwindcss()]
  },
```

- Tu sitio se publicará en la semana 8 en GitHub Pages, en `https://tu-usuario.github.io/nombre-del-repositorio`. La
  primera parte va hoy en `site`. El nombre del repositorio se agrega en la semana 8 en otra línea, `base`, junto con
  la publicación. Si pones hoy el nombre del repositorio dentro de `site`, en la semana 8 tendrías que cambiarlo otra
  vez.
- Si no recuerdas tu usuario, abre tu repositorio en GitHub. Es lo que va después de `github.com/` en la dirección.

**Así sabes que te salió.** Guarda el archivo. Astro se reinicia solo y el sitio se ve igual que antes. Si la
terminal muestra un error en rojo, revisa las comillas y la coma al final de la línea de `site`.

## Paso 8. Open Graph, la vista previa al compartir

Cuando alguien pega tu enlace en WhatsApp o Facebook, aparece una tarjeta con una foto, un título y un texto. Esa
tarjeta sale de las etiquetas Open Graph del `<head>`. Sin ellas, el enlace se comparte pelado o con una foto
cualquiera de la página.

1. Prepara la foto para compartir. Tiene que ser ancha, de 1200 × 630 px, y pesar menos de 300 KB. Café Orquídea usa
   la foto del local recortada a esa medida. Guárdala en la carpeta `public` con el nombre `compartir.jpg`. Lo que está
   en `public` se publica tal cual, sin que Astro lo cambie, por eso va ahí y no en `src/assets`.
2. Abre `src/layouts/Layout.astro`. Debajo de la línea `const { title, description, pagina } = Astro.props;`, antes
   del `---`, agrega

```astro
// Open Graph: lo que muestran WhatsApp y Facebook cuando alguien comparte un enlace del sitio.
// Las direcciones van completas, con https://, armadas con el «site» de astro.config.mjs.
const direccion = new URL(Astro.url.pathname, Astro.site);
const imagen = new URL('/compartir.jpg', Astro.site);
```

3. En el `<head>`, debajo de `<meta name="description" content={description} />`, agrega

```astro
		<meta property="og:type" content="website" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:url" content={direccion} />
		<meta property="og:image" content={imagen} />
```

- `Astro.site` es el `site` del paso 7 y `Astro.url.pathname` es la parte de la dirección de cada página, como
  `/contacto/`. `new URL(…)` las junta en una dirección completa.
- `og:title` y `og:description` usan el mismo `title` y la misma `description` del paso 6. Así se escriben una sola
  vez por página.
- `og:url` es la dirección de la página, distinta en cada una, y `og:image` la foto para compartir.
- `og:type` dice qué es. Para un negocio, `website`.

**Así sabes que te salió.** En el navegador pulsa **Ctrl + U** para ver el código de la página. Busca con **Ctrl + F**
el texto `og:` y aparecen las cinco etiquetas, con `og:url` y `og:image` empezando con `https://`. En Contacto,
`og:url` dice `https://nilosalvador.github.io/contacto/`, con tu usuario.

## Paso 9. El mapa del sitio

El mapa del sitio es un archivo con la lista de tus páginas. Google lo lee para no perderse ninguna. Astro lo genera
solo al compilar, con su integración `@astrojs/sitemap`.

1. Detén `npm run dev` con **Ctrl + C** y escribe

   ```
   npx astro add sitemap
   ```

2. Astro pregunta dos veces si continúa. Responde que sí con **Enter** las dos. Instala `@astrojs/sitemap` y agrega
   dos cosas a `astro.config.mjs`, arriba `import sitemap from '@astrojs/sitemap';` y abajo
   `integrations: [sitemap()]`. En Café Orquídea el archivo queda así

```js
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
```

3. Escribe `npm run build`.

**Así sabes que te salió.** Al final de la compilación, la terminal dice ``[@astrojs/sitemap] `sitemap-index.xml` created at `dist` ``. En la
carpeta `dist` hay dos archivos nuevos, `sitemap-index.xml` y `sitemap-0.xml`. Abre `sitemap-0.xml` y verás tus cuatro
páginas, cada una entre `<loc>` y `</loc>`, con la dirección de `site` delante. Si no pusiste `site`, Astro no genera
el mapa y avisa en la terminal que lo necesita.

## Paso 10. Lighthouse sobre el sitio compilado

Lighthouse abre tu página como lo haría un celular con internet regular, la mide y le pone cuatro notas de 0 a 100.

| Categoría | Qué mide |
| :-- | :-- |
| Rendimiento | Qué tan rápido aparece y se puede usar la página |
| Accesibilidad | Si la puede usar quien ve poco, usa lector de pantalla o solo el teclado. Revisa el contraste, los `alt` y los `label` |
| Prácticas recomendadas | Si la página es segura y no tiene errores en la consola |
| SEO | Si Google la puede leer, con su título, su descripción y su `lang` |

Se mide sobre el sitio compilado, porque es el que se publica. `npm run dev` sirve el sitio sin optimizar, con
herramientas extra para programar, y saca menos en Rendimiento aunque tu sitio esté bien.

1. En la terminal escribe `npm run build` y luego

   ```
   npm run preview
   ```

   La terminal muestra la dirección, `http://localhost:4321/`. Es tu sitio tal como se publicará.
2. Abre una ventana de incógnito con **Ctrl + Shift + N** y entra a `http://localhost:4321/`. En incógnito no corren
   las extensiones del navegador, que bajan la nota de Rendimiento sin que sea culpa de tu sitio.
3. Pulsa **F12** y elige la pestaña **Lighthouse**. Si no la ves, pulsa **»** al final de las pestañas.
4. Deja **Navegación**, **Celular** (en inglés, *Mobile*) y las cuatro categorías marcadas. Pulsa **Analizar la carga
   de la página** (*Analyze page load*). Tarda menos de un minuto.
5. Arriba del informe salen las cuatro notas en círculos. Verde es de 90 a 100. Si una sale en naranja o en rojo,
   baja hasta esa categoría y abre cada aviso; cada uno dice qué arreglar y en qué etiqueta.
6. Guarda el informe. Arriba a la derecha del informe pulsa el menú de los tres puntos, **⋮**, y elige **Guardar como
   JSON** (*Save as JSON*). El archivo se guarda en tu carpeta Descargas, con un nombre como
   `localhost_4321-20261120T153000.json`.
7. En VS Code crea la carpeta `lighthouse` en la raíz del proyecto, al lado de `src` y `capturas`, y arrastra ahí el
   archivo. Puedes cambiarle el nombre a `inicio.json`.

El revisor lee las cuatro notas de ese archivo. No sirve una captura, porque el revisor no puede leer una imagen.

Café Orquídea sacó 96 en Rendimiento y 100 en Accesibilidad, Prácticas recomendadas y SEO en Inicio, medido en
Celular. Su informe está en `ejemplo/lighthouse/inicio.json`.

**Así sabes que te salió.** Las cuatro notas del informe están en verde, en 90 o más. Escribe `npm run revisar -- 7`
y Lighthouse dice **Cuadra**. Si mediste con `npm run dev`, el revisor lo nota y te pide medir otra vez con
`npm run preview`. Detén `npm run preview` con **Ctrl + C** cuando termines.

### En tu proyecto, lección 7.2

1. Revisa el `title` y la `description` de tus cuatro páginas (paso 6). Escribe cada descripción pensando en lo que
   buscaría tu cliente.
2. Pon `site` con tu usuario de GitHub en `astro.config.mjs` (paso 7).
3. Recorta una foto de tu negocio a 1200 × 630 px, guárdala como `public/compartir.jpg` y agrega Open Graph al molde
   (paso 8). Si tu foto tiene otro nombre, cámbialo también en `new URL('/compartir.jpg', Astro.site)`.
4. Escribe `npx astro add sitemap` y luego `npm run build` (paso 9).
5. Mide Inicio con Lighthouse sobre `npm run preview` y guarda el JSON en la carpeta `lighthouse` (paso 10).

| Negocio | Descripción de Inicio | Foto para compartir |
| :-- | :-- | :-- |
| Taller de estructuras metálicas | Portones, rejas, techos y escaleras de fierro a medida en Nueva Cajamarca. Medimos gratis y te enviamos el presupuesto por WhatsApp. | Un portón terminado, de frente y con buena luz |
| Concesionario | Autos, camionetas y motos nuevas en Moyobamba, al contado o a crédito. Separa tu prueba de manejo por WhatsApp. | La camioneta más vendida en la vitrina |
| Bodega | Abarrotes, bebidas y productos de limpieza en el barrio de Rioja. Haz tu pedido por WhatsApp y pasa a recoger sin hacer cola. | El mostrador con los productos ordenados |

Si en tu informe algo baja de 90, estos son los avisos que más salen en un sitio como el tuyo.

| Categoría | Aviso de Lighthouse | Qué hacer |
| :-- | :-- | :-- |
| Rendimiento | Las imágenes son muy pesadas o no tienen el tamaño adecuado | Que toda foto pase por `<Image />` de Astro, como en la semana 2, y no por `<img>` desde `public` |
| Accesibilidad | El contraste entre el fondo y el texto no es suficiente | Usa un color más oscuro para el texto o más claro para el fondo, de tu `@theme` |
| Accesibilidad | Los elementos del formulario no tienen etiquetas asociadas | A ese campo le falta su `<label for="…">` con el mismo texto que su `id` (paso 2) |
| SEO | El documento no tiene una metadescripción | Pásale `description="…"` al molde en esa página (paso 6) |

## Paso 11. Revisa tu entrega

En una segunda terminal escribe

```
npm run revisar -- 7
```

Lee cada línea que dice **Falta** y lo que tiene debajo. Corrige, guarda y vuelve a revisar. Este revisor también
comprueba lo de las semanas 1 a 6, así que si algo de antes se rompió, aquí aparece. Si cambias algo que se ve,
como un color o una foto, vuelve a medir con Lighthouse y reemplaza el JSON de la carpeta `lighthouse`.

## Paso 12. Guarda tu avance en GitHub

1. En **Control de código fuente** (**Ctrl + Shift + G**) escribe el mensaje `Semana 7, formulario de WhatsApp, Open
   Graph, mapa del sitio y Lighthouse`.
2. Pulsa **Commit** y luego **Sync Changes**.

**Así sabes que te salió.** El revisor dice **Puntaje 100 de 100** y en GitHub ves la carpeta `lighthouse` con tu
informe y, en `src/pages/contacto.astro`, el formulario y su `<script>`.

## Entrega

En el aula, en la tarea **Semana 7**, pega el enlace de tu repositorio, el mismo de las semanas anteriores, y responde
el cuestionario de la semana. Ritmo sugerido hasta el domingo 22 de noviembre. Todo cierra el domingo 29 de noviembre
a las 23:59.

## Si algo falla

| Lo que ves | Qué hacer |
| :-- | :-- |
| WhatsApp muestra el mensaje cortado, sin lo que venía después de un `&` o un `#`, y con los renglones pegados | Falta `encodeURIComponent`. El revisor dice «El script de src/pages/contacto.astro pone el texto en el enlace sin encodeURIComponent…». Escribe `?text=${encodeURIComponent(texto)}` (paso 5) |
| Pulsas «Enviar por WhatsApp», la página se recarga y no se abre WhatsApp | El script no llegó a correr o le falta `evento.preventDefault()`. Revisa que el `<script>` esté en `contacto.astro`, debajo de `</Layout>` (paso 4), y abre la consola con **F12** por si hay un error en rojo |
| WhatsApp dice que el número no es válido o abre otro chat | El número de `wa.me/` va con el 51 delante y sin `+`, espacios ni guiones, como `wa.me/51942123456`. El revisor dice «Escríbelo con el 51 del Perú delante de los 9 dígitos…» |
| En el mensaje sale `null` en lugar de un dato | El `name` del campo no es igual al de `datos.get('…')`. Las mayúsculas cuentan. Escribe el mismo texto en los dos lados |
| El formulario se envía con un campo vacío | A ese campo le falta `required`. En el `<select>`, la primera opción tiene que llevar `value=""` |
| El revisor dice «… el campo id="…" no tiene su etiqueta…» | Escribe encima del campo `<label for="…">` con el mismo texto que su `id` (paso 2) |
| VS Code subraya `formulario` y dice «'formulario' is possibly 'null'» | Es el mismo aviso del editor de la semana 6. No impide compilar y el revisor no lo cuenta. Si el formulario abre WhatsApp, puedes dejarlo así |
| El revisor dice «Falta site en astro.config.mjs…» | Agrega `site: 'https://tu-usuario.github.io',` dentro de `defineConfig({`, arriba de `vite` (paso 7) |
| El revisor dice «La compilación no generó dist/sitemap-index.xml…» | Escribe `npx astro add sitemap` y responde que sí (paso 9). Si ya lo hiciste, revisa que `site` esté escrito |
| El revisor dice que og:image u og:url «necesita la dirección completa, con https://» | Arma esas dos con `new URL(…, Astro.site)` como en el paso 8, no con una ruta suelta como `/compartir.jpg` |
| El revisor dice «La imagen de og:image … no está en el sitio» | La foto no está en `public` o tiene otro nombre. El nombre del archivo y el de `new URL('/…', Astro.site)` tienen que ser iguales, con la misma extensión |
| El revisor dice «… se midió con npm run dev…» | Detén `npm run dev`, escribe `npm run build` y `npm run preview`, mide otra vez y reemplaza el JSON de la carpeta `lighthouse` (paso 10) |
| El revisor dice «… no es un informe de Lighthouse» | Guardaste otro archivo, o el informe como HTML. En el menú **⋮** del informe elige **Guardar como JSON** |
| Rendimiento sale bajo y en el informe aparecen extensiones de Chrome | Mide en una ventana de incógnito (**Ctrl + Shift + N**), donde no corren las extensiones (paso 10) |
| `la ejecución de scripts está deshabilitada en este sistema` | Estás en PowerShell; cambia la terminal a **Símbolo del sistema**, como en el paso 7 de la semana 1 |

## Para saber más

- [Formularios en HTML, en español](https://developer.mozilla.org/es/docs/Learn/Forms)
- [`encodeURIComponent`, en español](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
- [Open Graph](https://ogp.me/), en inglés
- [Integración de sitemap de Astro](https://docs.astro.build/es/guides/integrations-guide/sitemap/), en español
- [Lighthouse en Chrome](https://developer.chrome.com/docs/lighthouse/overview?hl=es-419), en español
- La semana que viene publicas tu sitio en GitHub Pages, con `base`, y preparas la sustentación de 3 a 5 minutos.
