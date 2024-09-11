
// Ejercicio de Bucle For con Arrays:

// Dado el siguiente array de números:

let numeros = [1, 2, 3, 4, 5]

// Utiliza un bucle for para multiplicar cada número por 2
// y almacenar el resultado en un nuevo array. Luego, imprime el nuevo array:

let arregloPorDos = []

for (let i = 0; i < numeros.length; i++){
    arregloPorDos.push(numeros[i] * 2)
}

console.log(arregloPorDos)

// -------------------------------------------------------------------------------------------------- //

// Ejercicio de Búsqueda en Arrays de Objetos:

// Dado el siguiente array de objetos que representan productos:

let productos = [
    { nombre: "Camisa", precio: 20},
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 10},
];

// Utiliza un bucle for para encontrar el producto con el precio más bajo.
// Luego, imprime el nombre y el precio de ese producto.

let menorPrecio = []
let minPrice = []

for(let i = 0; i < productos.length; i++){

    menorPrecio.push(productos[i].precio)

}

minPrice.push(Math.min(...menorPrecio))
    
for (let j = 0 ; j < productos.length; j++){
    
    if(productos[j].precio <= minPrice){

    console.log(`El producto con el precio más bajo es ${productos[j].nombre} con un precio de ${productos[j].precio}.`)

    }
}

// -------------------------------------------------------------------------------------------------- //

// Ejercicio de Modificación de Propiedades de Objetos en un Array:

// Dado el siguiente array de objetos que representan estudiantes:

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

// Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año.
// Luego, imprime el array modificado.

for (const edad in estudiantes){

    estudiantes[edad].edad += 1
    
}

console.log(estudiantes)

// -------------------------------------------------------------------------------------------------- //

// Ejercicio de Filtrado de Arrays de Objetos:

// Dado el siguiente array de objetos que representan libros:

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];

// Utiliza un bucle for para encontrar todos los libros cuyo título contenga la
// palabra "El". Luego, imprime estos libros.

let result = [];


libros.forEach(libro => {
    
    libro.titulo.includes("El") ? result.push(libro) : null

})

console.log(result)
// -------------------------------------------------------------------------------------------------- //

// Ejercicio de Concatenación de Arrays: 

// Dados los siguientes arrays de frutas:

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];


// Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego,
// imprime el array resultante.

for (const fruta of frutas2){
   
    frutas1.push(fruta)
}

console.log(frutas1)

