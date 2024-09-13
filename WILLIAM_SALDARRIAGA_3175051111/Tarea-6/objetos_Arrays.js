// 1. Ejercicio de Bucle For con Arrays:
let numeros = [1, 2, 3, 4, 5];
let numerosMultiplicados = [];

for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);    
}
console.log(`1. El Array resultante es: ${numerosMultiplicados}`);

// 2. Ejercicio de Búsqueda en Arrays de Objetos:
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];
 
  let nombreProducto = productos[0].nombre;
  let menorPrecio = productos[0].precio;

  for (let j = 1; j < productos.length; j++) {
    if(productos[j].precio < menorPrecio){
        nombreProducto = productos[j].nombre;
        menorPrecio = productos[j].precio;
    }     
  }

  console.log (`2.El producto con el menor precio es: ${nombreProducto} y su precio es ${menorPrecio}`);

//   3. Ejercicio de Modificación de Propiedades de Objetos en un Array:
let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

  for (let k = 0; k < estudiantes.length; k++) {
    estudiantes[k].edad = estudiantes[k].edad + 1;     
  }
  console.log('3. El Array de estudiantes modificado es:', estudiantes);

  // 4. Ejercicio de Filtrado de Arrays de Objetos:
  let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
  
  let librosFiltrados = [];

  for (const elemento of libros) {
    if(elemento.titulo.includes("El")){
      librosFiltrados.push({
        titulo: elemento.titulo,
        autor: elemento.autor
      })
      
    }
  }

  console.log('4. Los libros filtrados son: ', librosFiltrados);

  // 5. Ejercicio de Concatenación de Arrays:
  let frutas1 = ["Manzana", "Plátano", "Naranja"];
  let frutas2 = ["Fresa", "Uva", "Piña"];

  // solucion basada en explicación de arreglos
  // let frutas3 = [].concat(frutas1,frutas2) ;
  // console.log('5. Los arreglos concatenados dan como resultado: ', frutas3);

  for (const fruta of frutas2) {
    frutas1.push(fruta);
  }
  console.log(`5. El arreglo concatenado es: ${frutas1}`);