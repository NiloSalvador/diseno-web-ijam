// Los productos de Café Orquídea. Las páginas recorren estas listas con .map(),
// así que para cambiar un precio o agregar un plato basta con editar este archivo.
import fotoCafe from '../assets/cafe-pasado.jpg';
import fotoDesayuno from '../assets/desayuno.jpg';
import fotoPostre from '../assets/postre.jpg';

// Los tres productos que se muestran en tarjetas en la página de inicio.
export const masPedidos = [
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

// La carta completa, una tarjeta con foto por categoría. Los precios están en soles, con IGV incluido.
export const carta = [
	{
		categoria: 'Bebidas',
		foto: fotoCafe,
		alt: 'Taza de café pasado con granos tostados sobre una mesa de madera',
		descripcion: 'Café de la provincia, tostado cada semana.',
		productos: [
			{ nombre: 'Café pasado', precio: 5 },
			{ nombre: 'Café con leche', precio: 6 },
			{ nombre: 'Capuchino', precio: 8 },
			{ nombre: 'Chocolate caliente de cacao', precio: 7 },
			{ nombre: 'Jugo de piña', precio: 7 },
		],
	},
	{
		categoria: 'Desayunos',
		foto: fotoDesayuno,
		alt: 'Plato de tacacho con cecina, salsa criolla y una taza de café',
		descripcion: 'Cocina de la selva para empezar el día.',
		productos: [
			{ nombre: 'Tacacho con cecina', precio: 18 },
			{ nombre: 'Tamal con café pasado', precio: 10 },
			{ nombre: 'Pan con chicharrón', precio: 9 },
			{ nombre: 'Pan con palta y huevo', precio: 8 },
		],
	},
	{
		categoria: 'Postres',
		foto: fotoPostre,
		alt: 'Tajada de torta de chocolate con cobertura de chocolate en un plato blanco',
		descripcion: 'Hechos en casa cada mañana.',
		productos: [
			{ nombre: 'Torta de chocolate', precio: 8 },
			{ nombre: 'Tres leches', precio: 8 },
			{ nombre: 'Alfajores de maicena (tres unidades)', precio: 5 },
		],
	},
];
