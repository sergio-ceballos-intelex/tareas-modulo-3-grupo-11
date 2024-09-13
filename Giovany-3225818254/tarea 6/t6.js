// Ejercicio de Bucle For con Arrays:--------------------------------------------------------------------------------------------
// let numeros = [9, 4, 7, 3, 2];
// let resultado = [];

// for (let i = 0; i < numeros.length; i++) {
//     resultado.push(numeros[i] * 2);
// }

// console.log(resultado);



//Ejercicio de Búsqueda en Arrays de Objetos:--------------------------------------------------------------------------------------------
// let productos = [
//     { nombre: "Camisa", precio: 500 },
//     { nombre: "Pantalón", precio: 1000 },
//     { nombre: "Zapatos", precio: 800 },
// ];

// let productoMasBarato = productos[0];for (let i = 1; i < productos.length; i++) {
//     if (productos[i].precio < productoMasBarato.precio) {
//         productoMasBarato = productos[i];
//     }
// }
// console.log(`El producto más barato es ${productoMasBarato.nombre} con un precio de $${productoMasBarato.precio}.`);





//Ejercicio de Modificación de Propiedades de Objetos en un Array:-------------------------------------------------------------------------------
// let estudiantes = [
//     { nombre: "Juan", edad: 24 },
//     { nombre: "María", edad: 25 },
//     { nombre: "Pedro", edad: 26 },
// ];

// for (let i = 0; i < estudiantes.length; i++) {
//     estudiantes[i].edad += 1;
// }
// console.log(estudiantes);


//Ejercicio de Filtrado de Arrays de Objetos:--------------------------------------------------------------------------------------------
// let libros = [
//     { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
//     { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
//     { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
// ];

// let librosConEl = [];

// for (let i = 0; i < libros.length; i++) {
//     if (libros[i].titulo.toLowerCase().includes("el")) {
//         librosConEl.push(libros[i]);
//     }
// }
// console.log(librosConEl);


//Ejercicio de Concatenación de Arrays:-------------------------------------------------------------------------------------------
let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let i = 0; i < frutas2.length; i++) {
    frutas1.push(frutas2[i]);
}

console.log(frutas1);
