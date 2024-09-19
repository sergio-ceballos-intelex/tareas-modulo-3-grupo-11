//Tarea 7: Manipulación Básica de Arrays y Objetos orientado a ES6

//punto 1
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const productosEnStock = productos.filter(producto => producto.stock > 0);
console.log(productosEnStock);

const nombresDeProductos = productos.map(producto => producto.nombre);
console.log(nombresDeProductos);

const precioTotal = productosEnStock.reduce((total, producto) => total + producto.precio, 0);
console.log(`El precio total de los productos disponibles es: $${precioTotal}`);


//punto 2

// const estudiantes = [
//     { nombre: "Camilo", edad: 33, promedio: 10 },
//     { nombre: "Juan", edad: 30, promedio: 6 },
//     { nombre: "Andres", edad: 29, promedio: 8.7 },
// ];

// console.log("Nombre del segundo estudiante:", estudiantes[1].nombre);

// estudiantes[0].edad = 25;

// console.log("Información del primer estudiante después de la actualización:");
// console.log(estudiantes[0]);

//punto 3

// const sumaEdades = estudiantes.reduce((total, estudiante) => total + estudiante.edad, 0);
// console.log(`La suma de las edades es: ${sumaEdades}`);

// const cantidadEstudiantes = estudiantes.length;
// const promedioEdad = sumaEdades / cantidadEstudiantes;
// console.log(`El promedio de edad de los estudiantes es: ${promedioEdad.toFixed(2)}`);

//punto 4

// const estudiantes = [
//     {
//         nombre: "Ana",
//         edad: 20,
//         promedio: 85,
//         genero: "Femenino",
//         carrera: "Ingeniería Civil",
//         ciudad: "Bogotá",
//     },
//     {
//         nombre: "Juan",
//         edad: 22,
//         promedio: 78,
//         genero: "Masculino",
//         carrera: "Medicina",
//         ciudad: "Medellín",
//     },
//     {
//         nombre: "María",
//         edad: 21,
//         promedio: 90,
//         genero: "Femenino",
//         carrera: "Administración de Empresas",
//         ciudad: "Cali",
//     },
//     {
//         nombre: "Pedro",
//         edad: 23,
//         promedio: 82,
//         genero: "Masculino",
//         carrera: "Derecho",
//         ciudad: "Barranquilla",
//     },
//     {
//         nombre: "Laura",
//         edad: 24,
//         promedio: 88,
//         genero: "Femenino",
//         carrera: "Arquitectura",
//         ciudad: "Cartagena",
//     },
//     {
//         nombre: "Carlos",
//         edad: 20,
//         promedio: 75,
//         genero: "Masculino",
//         carrera: "Ingeniería de Sistemas",
//         ciudad: "Santa Marta",
//     },
//     {
//         nombre: "Sofía",
//         edad: 22,
//         promedio: 95,
//         genero: "Femenino",
//         carrera: "Psicología",
//         ciudad: "Pereira",
//     },
// ];
// const estudianteConPromedioMasAlto = estudiantes.reduce((estudianteActual, estudiante) => {
//     return estudiante.promedio > estudianteActual.promedio ? estudiante : estudianteActual;
// });

// console.log("Estudiante con el promedio más alto:");
// console.log("Nombre:", estudianteConPromedioMasAlto.nombre);
// console.log("Edad:", estudianteConPromedioMasAlto.edad);

// const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);
// console.log("Estudiantes mayores de 20 años:");
// console.log(estudiantesMayores);
