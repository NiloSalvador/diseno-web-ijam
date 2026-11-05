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
