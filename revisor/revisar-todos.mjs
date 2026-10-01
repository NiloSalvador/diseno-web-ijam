// Revisa de una vez los repositorios de todos los alumnos (para el docente).
//
// Uso, desde la carpeta del curso:
//   node revisor/revisar-todos.mjs <semana> <lista.txt> [carpeta-de-trabajo]
//
// lista.txt lleva un alumno por línea, el nombre y el enlace de su repositorio separados por
// punto y coma o por tabulación (así salen al copiar dos columnas de Excel):
//   Pérez Ruiz, Juan;https://github.com/juan-perez-dev/sitio-bodega-don-lucho
// Las líneas vacías o que empiezan con # se saltan.
//
// Por cada alumno clona su repositorio (o lo pone al día si ya estaba clonado), le copia encima
// este revisor y sus rúbricas, para que cuente la versión vigente y no una copia que el alumno
// pudo cambiar, y lo compila y revisa. Al final muestra la tabla y la guarda en semana-N.csv,
// dentro de la carpeta de trabajo, para abrirla en Excel. Revisa lo que hay en GitHub en ese
// momento, así que conviene correrlo al cerrar el plazo.
//
// La carpeta de trabajo (por defecto revisiones-diseno-web, al lado de la carpeta del curso) es
// solo de este script: cada clon se pone al día descartando lo local. No guardes nada tuyo ahí.
// Las dependencias se instalan una vez por cada package.json distinto y los clones las comparten
// con un enlace, así treinta alumnos no ocupan treinta copias de node_modules.
//
// Compila el código de cada repositorio en esta PC. Úsalo solo con los repositorios de tus alumnos.

import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, lstatSync, mkdirSync, readdirSync, readFileSync, symlinkSync, unlinkSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const CARPETA_REVISOR = path.dirname(fileURLToPath(import.meta.url));
const [semanaTexto, lista, carpetaTexto] = process.argv.slice(2);
const semana = Number(semanaTexto);
if (!Number.isInteger(semana) || semana < 1 || semana > 8 || !lista || !existsSync(lista)) {
	console.log('\nUso, desde la carpeta del curso');
	console.log('  node revisor/revisar-todos.mjs <semana> <lista.txt> [carpeta-de-trabajo]\n');
	process.exit(1);
}
const TRABAJO = path.resolve(carpetaTexto ?? path.join(CARPETA_REVISOR, '..', '..', 'revisiones-diseno-web'));

// Acepta el enlace tal como lo pega el alumno (con /tree/main, .git o barra final).
const GITHUB = /^https?:\/\/(?:www\.)?github\.com\/([A-Za-z0-9-]+)\/([A-Za-z0-9._-]+?)(?:\.git)?(?:[/?#].*)?$/;

function git(args, cwd) {
	// Sin pedir usuario ni contraseña: un repositorio privado o borrado falla en lugar de quedarse esperando.
	return spawnSync('git', ['-c', 'credential.helper=', ...args], {
		cwd,
		encoding: 'utf8',
		timeout: 180000,
		env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GCM_INTERACTIVE: 'never' },
	});
}

function ponerAlDia(enlace, carpeta) {
	if (existsSync(path.join(carpeta, '.git'))) {
		if (git(['fetch', '--quiet', 'origin'], carpeta).status !== 0) {
			return 'No se pudo traer el repositorio. Puede que lo hayan borrado o vuelto privado.';
		}
		// El clon es de este script: se descarta lo local y queda igual que en GitHub.
		if (git(['reset', '--quiet', '--hard', '@{u}'], carpeta).status !== 0) return 'No se pudo poner al día el clon.';
		return null;
	}
	mkdirSync(TRABAJO, { recursive: true });
	if (git(['clone', '--quiet', enlace, carpeta]).status !== 0) {
		return 'No se pudo clonar. Revisa que el enlace sea correcto y que el repositorio sea público.';
	}
	return null;
}

function enlazarModulos(carpeta) {
	const archivo = path.join(carpeta, 'package.json');
	if (!existsSync(archivo)) return 'El repositorio no tiene package.json en la raíz. Puede que no sea el proyecto del curso.';
	let pkg;
	try {
		pkg = JSON.parse(readFileSync(archivo, 'utf8'));
	} catch {
		return 'El package.json del repositorio está dañado.';
	}
	const destino = path.join(carpeta, 'node_modules');
	let actual = null;
	try {
		actual = lstatSync(destino);
	} catch {}
	if (actual && !actual.isSymbolicLink()) return null; // el alumno subió su node_modules; se usa ese

	const dependencias = { dependencies: pkg.dependencies ?? {}, devDependencies: pkg.devDependencies ?? {} };
	const huella = createHash('sha256').update(JSON.stringify(dependencias)).digest('hex').slice(0, 12);
	const compartida = path.join(TRABAJO, '_modulos', huella);
	if (!existsSync(path.join(compartida, 'instalado'))) {
		mkdirSync(compartida, { recursive: true });
		const base = { name: 'modulos-compartidos', private: true, type: 'module', ...dependencias, allowScripts: pkg.allowScripts };
		writeFileSync(path.join(compartida, 'package.json'), JSON.stringify(base, null, '\t'));
		console.log('  Instalando dependencias, una sola vez por cada package.json distinto…');
		const r = spawnSync('npm install --no-audit --no-fund', { cwd: compartida, shell: true, encoding: 'utf8', timeout: 900000 });
		if (r.status !== 0) return 'npm install falló con las dependencias de su package.json.';
		writeFileSync(path.join(compartida, 'instalado'), new Date().toISOString());
	}
	if (actual) unlinkSync(destino); // quita solo el enlace, no las dependencias compartidas
	symlinkSync(path.join(compartida, 'node_modules'), destino, 'junction');
	return null;
}

function revisar(carpeta) {
	mkdirSync(path.join(carpeta, 'revisor'), { recursive: true });
	for (const nombre of readdirSync(CARPETA_REVISOR).filter((n) => /^(revisar\.mjs|semana-\d+\.json)$/.test(n))) {
		copyFileSync(path.join(CARPETA_REVISOR, nombre), path.join(carpeta, 'revisor', nombre));
	}
	const r = spawnSync(process.execPath, ['revisor/revisar.mjs', String(semana)], {
		cwd: carpeta,
		encoding: 'utf8',
		timeout: 600000,
		env: { ...process.env, NO_COLOR: '1' },
	});
	const salida = r.stdout ?? '';
	const puntaje = /Puntaje (\d+) de 100/.exec(salida);
	if (!puntaje) {
		const ultima = salida.split('\n').map((l) => l.trim()).filter(Boolean).at(-1);
		return { puntaje: null, nota: ultima ?? 'El revisor no terminó.' };
	}
	// Solo las líneas de criterio (dos espacios de sangría), no las de detalle que van debajo.
	const faltas = [...salida.matchAll(/^ {2}Falta\s+(.+)$/gm)].map((m) => m[1].trim());
	return { puntaje: Number(puntaje[1]), nota: faltas.join(', ') };
}

const alumnos = readFileSync(lista, 'utf8')
	.replace(/^\uFEFF/, '')
	.split(/\r?\n/)
	.map((l) => l.trim())
	.filter((l) => l && !l.startsWith('#'))
	.map((l) => {
		const partes = l.split(/[;\t]/).map((p) => p.trim()).filter(Boolean);
		const enlace = partes.at(-1);
		return { nombre: partes.length > 1 ? partes.slice(0, -1).join(' ') : enlace, enlace };
	});

console.log(`\nRevisando ${alumnos.length} repositorios, semana ${semana}`);
console.log(`Carpeta de trabajo ${TRABAJO}\n`);

const filas = [];
const vistos = new Map();
for (const [i, { nombre, enlace }] of alumnos.entries()) {
	console.log(`${i + 1}/${alumnos.length}  ${nombre}`);
	const m = GITHUB.exec(enlace);
	let fila;
	if (!m) {
		fila = { puntaje: null, nota: 'El enlace no es de un repositorio de GitHub.' };
	} else {
		const repo = `https://github.com/${m[1]}/${m[2]}`;
		const clave = repo.toLowerCase();
		if (vistos.has(clave)) {
			fila = { ...vistos.get(clave).fila, nota: `Mismo repositorio que ${vistos.get(clave).nombre}.` };
		} else {
			const carpeta = path.join(TRABAJO, `${m[1]}__${m[2]}`.toLowerCase());
			const error = ponerAlDia(`${repo}.git`, carpeta) ?? enlazarModulos(carpeta);
			fila = error ? { puntaje: null, nota: error } : revisar(carpeta);
			vistos.set(clave, { nombre, fila });
		}
	}
	filas.push({ nombre, enlace, ...fila });
}

const ancho = Math.min(40, Math.max(6, ...filas.map((f) => f.nombre.length)));
console.log(`\n${'Alumno'.padEnd(ancho)}  Puntaje  Qué falta`);
for (const f of filas) {
	console.log(`${f.nombre.slice(0, ancho).padEnd(ancho)}  ${String(f.puntaje ?? '-').padStart(7)}  ${f.nota}`);
}

const celda = (v) => (/[;"\n]/.test(String(v)) ? `"${String(v).replaceAll('"', '""')}"` : String(v));
const csv = ['Alumno;Repositorio;Puntaje;Qué falta', ...filas.map((f) => [f.nombre, f.enlace, f.puntaje ?? '', f.nota].map(celda).join(';'))];
mkdirSync(TRABAJO, { recursive: true });
const destinoCsv = path.join(TRABAJO, `semana-${semana}.csv`);
writeFileSync(destinoCsv, `\uFEFF${csv.join('\r\n')}\r\n`);
console.log(`\nTabla guardada en ${destinoCsv}\n`);
