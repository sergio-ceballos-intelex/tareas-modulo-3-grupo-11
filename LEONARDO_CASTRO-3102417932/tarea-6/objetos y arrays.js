let numeros = [1, 2, 3, 4, 5];
let numerosMultiplicados = [2, 5];

for (let i = 0; i < numeros.length; i++) {
  numerosMultiplicados.push(numeros[i] * 2);
}

console.log(numerosMultiplicados);// [2, 4, 6, 8, 10]






let productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];

let productoMasBarato = productos[0]; // Inicializamos con el primer producto

for (let i = 1; i < productos.length; i++) {
  if (productos[i].precio < productoMasBarato.precio) {
    productoMasBarato = productos[i];
  }
}

console.log(`Producto más barato: ${productoMasBarato.nombre}, Precio: ${productoMasBarato.precio}`);
// Producto más barato: Camisa, Precio: 20






let estudiantes = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];

for (let i = 0; i < estudiantes.length; i++) {
  estudiantes[i].edad += 1;
}

console.log(estudiantes);
/* 
[
  { nombre: "Juan", edad: 21 },
  { nombre: "María", edad: 23 },
  { nombre: "Pedro", edad: 20 }
]
*/







let libros = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];

let librosConEl = [];

for (let i = 0; i < libros.length; i++) {
  if (libros[i].titulo.includes("El")) {
    librosConEl.push(libros[i]);
  }
}

console.log(librosConEl);
/*
[
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" }
]
*/





let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let i = 0; i < frutas2.length; i++) {
  frutas1.push(frutas2[i]);
}

console.log(frutas1);
// ["Manzana", "Plátano", "Naranja", "Fresa", "Uva", "Piña"]