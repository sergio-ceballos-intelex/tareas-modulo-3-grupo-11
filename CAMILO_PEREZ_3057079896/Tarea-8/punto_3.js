
/*

Callbacks: Filtrar Números Pares

Descripción:  Crea una función en JavaScript que filtre los números pares de un array 
y utilicen un callback para manejar el resultado.


Pasos a seguir:
  
1. Crea una función llamada `filtrarPares` que acepte dos parámetros: un array de números y un callback.
2. Dentro de la función `filtrarPares`, utiliza el método filter para filtrar los números pares del array.
3. Llama al callback pasado como parámetro con el array de números pares como argumento.
4. Implementa un callback llamado `mostrarPares` que acepte un parámetro numerosPares. Este callback debe imprimir los números pares en la consola.

*/ 

function filtrarPares(array,callback){

    const numerosFiltrados = array.filter(numero => numero % 2 === 0)
    
    callback(numerosFiltrados)
    
}

function mostrarPares(numerosFiltrados) {
    console.log(numerosFiltrados)
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

filtrarPares(numeros, mostrarPares);
