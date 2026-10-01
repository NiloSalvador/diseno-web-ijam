# Semana 1 — Tu primer sitio con Astro

Esta semana preparas tu taller de trabajo y arrancas el proyecto del curso, el sitio web de un negocio real de tu
entorno. Al terminar tendrás

- Node.js, Git y VS Code instalados y funcionando.
- Tu propio repositorio en GitHub, creado desde la plantilla del curso.
- El sitio encendido en tu PC con el nombre del negocio.
- El brief y el boceto del proyecto.

> **Clase en vivo.** Esta semana la hacemos juntos en clase. Si no pudiste estar, sigue esta guía paso a paso, que está
> escrita para que lo logres solo.

## Antes de empezar

- Una PC o laptop con Windows 10 u 11 y conexión a internet. Si tu equipo no te deja instalar programas, salta al
  apartado [Si tu PC no te deja instalar](#si-tu-pc-no-te-deja-instalar).
- Un correo electrónico que revises (para crear tu cuenta de GitHub).
- Elegir el negocio. Puede ser de un familiar, un vecino o un conocido, como una bodega, un restaurante, un taller, un
  hospedaje, un consultorio. Pídele permiso al dueño antes de empezar y usa solo sus datos públicos.

## Palabras nuevas

| Palabra | Qué es |
| :-- | :-- |
| Node.js | El programa que hace funcionar Astro en tu PC |
| Astro | La herramienta con la que construimos el sitio; genera páginas HTML rápidas |
| Repositorio | La carpeta de tu proyecto guardada en GitHub, con todo su historial |
| Commit | Una foto de tu avance, con un mensaje que dice qué cambiaste |
| Push o «Sync» | Subir tus commits a GitHub |
| Terminal | La ventana donde se escriben comandos como `npm run dev` |

## Paso 1. Instala Node.js

1. Entra a **https://nodejs.org** y descarga el instalador de Windows de la versión **LTS**.
2. Ábrelo y pulsa **Next** hasta terminar. En la pantalla «Tools for Native Modules» **no marques** la casilla,
   porque instala herramientas que este curso no usa y tarda mucho.
3. Comprueba. Abre el **Símbolo del sistema** (escribe `cmd` en el buscador de Windows) y escribe

   ```
   node -v
   ```

   **Así sabes que te salió:** aparece `v22.12` o un número mayor (por ejemplo `v24.10.0`).

## Paso 2. Instala Git

1. Entra a **https://git-scm.com/download/win** y descarga el instalador.
2. Ábrelo y deja todas las opciones como vienen, pulsando **Next** hasta **Install**.
3. Cierra el Símbolo del sistema, ábrelo de nuevo y escribe

   ```
   git --version
   ```

   **Así sabes que te salió:** aparece `git version` con un número.
4. Dile a Git quién eres (una sola vez). Cambia los datos por los tuyos y escribe cada línea por separado

   ```
   git config --global user.name "Tu Nombre Apellido"
   git config --global user.email "tucorreo@ejemplo.com"
   ```

## Paso 3. Instala VS Code

1. Entra a **https://code.visualstudio.com** y descarga la versión para Windows.
2. Instálalo con las opciones que vienen marcadas.
3. Ábrelo. En la barra de la izquierda pulsa el ícono de **Extensiones** (cuatro cuadraditos), busca **Astro** e
   instala la extensión oficial (la de «Astro» con la marca de verificación).
4. Si quieres VS Code en español, busca e instala **Spanish Language Pack** y reinicia VS Code.

## Paso 4. Crea tu cuenta de GitHub

1. Entra a **https://github.com/signup** y crea tu cuenta con tu correo.
2. Elige un nombre de usuario serio, porque lo verán quienes visiten tus proyectos (por ejemplo `juan-perez-dev`).
3. Confirma tu correo con el código que te llega.

## Paso 5. Crea tu repositorio desde la plantilla

1. Entra a **https://github.com/NiloSalvador/diseno-web-ijam-plantilla**.
2. Pulsa el botón verde **Use this template** y luego **Create a new repository**.
3. En **Repository name** escribe `sitio-` y el nombre del negocio, sin espacios ni tildes (por ejemplo
   `sitio-bodega-don-lucho`).
4. Deja marcado **Public** y pulsa **Create repository**.

**Así sabes que te salió:** estás en la página de tu repositorio, con tu usuario delante del nombre, y ves las
carpetas `src`, `boceto` y `revisor`.

## Paso 6. Abre tu repositorio en VS Code

1. En tu repositorio pulsa el botón verde **Code**, elige **HTTPS** y copia la dirección con el botón de copiar.
2. En VS Code abre la paleta de comandos con **Ctrl + Shift + P**, escribe `Git: Clone` y pulsa Enter.
3. Pega la dirección y pulsa Enter. Elige una carpeta para guardarlo, por ejemplo **Documentos**.
4. Cuando pregunte si quieres abrir el repositorio, pulsa **Open** (Abrir). Si pregunta si confías en los autores,
   pulsa **Yes, I trust the authors** (Sí, confío).

## Paso 7. Enciende el sitio

1. Abre una terminal con el menú **Terminal → New Terminal** (Terminal → Nuevo terminal).
2. Cambia la terminal a **Símbolo del sistema**, porque PowerShell suele bloquear `npm`. Pulsa **Ctrl + Shift + P**,
   escribe `Terminal: Select Default Profile`, elige **Command Prompt** y abre una terminal nueva.
3. Instala lo que necesita el proyecto (solo la primera vez; tarda uno o dos minutos)

   ```
   npm install
   ```

4. Enciende el sitio

   ```
   npm run dev
   ```

5. Mantén pulsado **Ctrl** y haz clic en `http://localhost:4321`.

**Así sabes que te salió:** el navegador muestra «Nombre de tu negocio».

## Paso 8. Tu primer cambio

1. En el explorador de VS Code abre `src/pages/index.astro`.
2. Cambia **Nombre de tu negocio** por el nombre real del negocio en dos lugares, dentro de `<title>` (el título de
   la pestaña) y dentro de `<h1>` (el encabezado principal).
3. Guarda con **Ctrl + S** y mira el navegador.

**Así sabes que te salió:** el navegador se actualiza solo y la pestaña muestra el nombre del negocio.

## Paso 9. El brief

El brief es el acuerdo de qué vas a construir y para quién. Sin él, el diseño se decide al azar.

1. Abre `BRIEF.md` y completa los ocho apartados con tus palabras. Borra cada línea que empieza con «Escribe aquí».
2. Para ver cómo queda, pulsa **Ctrl + Shift + V**.
3. Si te trabas, mira el brief del ejemplo del curso:
   [ejemplo/BRIEF.md](../ejemplo/BRIEF.md).

## Paso 10. El boceto

1. En una hoja, dibuja con lápiz cómo se verá la página de inicio. Usa cajas y rótulos, como en el
   [boceto del ejemplo](../ejemplo/boceto/boceto-inicio.svg), con la cabecera, el contenido principal y el pie.
2. Tómale una foto con el celular y pásala a tu PC (por WhatsApp Web, correo o cable).
3. Arrastra la imagen a la carpeta `boceto` en el explorador de VS Code.

## Paso 11. Revisa tu entrega

1. Abre una segunda terminal con el botón **+** del panel de la terminal (la primera sigue con el sitio encendido).
2. Escribe

   ```
   npm run revisar -- 1
   ```

3. Lee el resultado. Cada línea dice **Cuadra** o **Falta**, y debajo de cada «Falta» está lo que te queda por hacer.

Es normal que «Hay al menos un commit tuyo» diga Falta hasta que hagas el paso 12.

## Paso 12. Guarda tu avance en GitHub

1. En la barra de la izquierda pulsa el ícono de **Control de código fuente** (o **Ctrl + Shift + G**).
2. En el cuadro de mensaje escribe `Semana 1, brief y boceto`.
3. Pulsa **Commit** (Confirmar). Si pregunta si quieres preparar todos los cambios, pulsa **Yes** (Sí).
4. Pulsa **Sync Changes** (Sincronizar cambios). La primera vez se abre el navegador para que autorices tu cuenta de
   GitHub. Pulsa **Authorize** o **Sign in with your browser**.
5. Vuelve a correr `npm run revisar -- 1`.

**Así sabes que te salió:** el revisor dice **Puntaje 100 de 100** y en la página de tu repositorio en GitHub ya
aparece tu `BRIEF.md` lleno y la foto del boceto.

## Entrega

En el aula, en la tarea **Semana 1**, pega el enlace de tu repositorio (por ejemplo
`https://github.com/juan-perez-dev/sitio-bodega-don-lucho`). Plazo hasta el miércoles 7 de octubre a las 23:59.

## Si algo falla

| Lo que ves | Qué hacer |
| :-- | :-- |
| `"npm" no se reconoce como un comando` | Cierra VS Code y vuelve a abrirlo, porque no había visto Node recién instalado |
| `la ejecución de scripts está deshabilitada en este sistema` | Estás en PowerShell; haz el punto 2 del paso 7 |
| `Node.js v20… is not supported by Astro` | Tu Node es antiguo; instala la versión LTS del paso 1 |
| `Please tell me who you are` al hacer commit | Falta el punto 4 del paso 2 |
| `Port 4321 is in use` | Astro usa otro puerto; abre la dirección que muestra la terminal |
| El revisor dice «Faltan las dependencias» | Escribe `npm install` en la terminal |
| El navegador no cambia al guardar | Revisa que guardaste con Ctrl + S y que `npm run dev` sigue encendido |

## Si tu PC no te deja instalar

Usa **GitHub Codespaces**, que te da VS Code dentro del navegador con Node y Git ya instalados. Con la cuenta
gratuita alcanza para todo el curso.

1. Haz los pasos 4 y 5.
2. En tu repositorio pulsa **Code**, elige la pestaña **Codespaces** y pulsa **Create codespace on main**.
3. Sigue desde el punto 3 del paso 7. Cuando enciendas el sitio, pulsa **Open in Browser** en el aviso que aparece.

## Para saber más

- Documentación de Astro en español: https://docs.astro.build/es/getting-started/
- La semana que viene armamos las páginas del sitio con HTML semántico.
