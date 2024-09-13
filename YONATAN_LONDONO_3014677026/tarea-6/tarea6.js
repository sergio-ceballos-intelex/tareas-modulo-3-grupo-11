//Ejercicio de Bucle For con Arrays
let numeros = [1, 2, 3, 4, 5];
let numeros2 = [];
for (let i = 0; i < numeros.length; i++) {
    const element = (numeros[i])*2;
    numeros2.push(element)
}
console.log(numeros2);


//Ejercicio de Búsqueda en Arrays de Objetos
let productos = [
    {nombre: "camisa",   precio: 20},
    {nombre: "pantalon", precio: 30},
    {nombre: "zapatos",  precio: 50},
]
let menor = productos[0].precio
let posicion = 0
for (let i = 0; i < productos.length; i++) {
    if(productos[i].precio < menor){        
        menor = productos[i].precio
        posicion = i
    }
}
console.log(`El producto con el precio mas bajo es ${productos[posicion].nombre} y el precio es ${menor}`)


//Ejercicio de Modificación de Propiedades de Objetos en un Array
let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
];
for (let i = 0; i < estudiantes.length; i++) {
    estudiantes[i].edad = (estudiantes[i].edad)+1;
}
console.log(estudiantes)


//Ejercicio de Filtrado de Arrays de Objetos
let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];
for (let i = 0; i < libros.length; i++) {
    if(libros[i].titulo.includes("El")){
        console.log(libros[i])
    }        
}


//Ejercicio de Concatenación de Arrays
let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let i = 0; i < frutas2.length; i++) {
    frutas1.push(frutas2[i])    
}
console.log(frutas1)