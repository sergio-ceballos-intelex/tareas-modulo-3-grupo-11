// Callbacks para Filtrar Elementos de un Arreglo:

// Descripción: Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro. Ejercicio:

// function filtrarArreglo(arreglo, callbackFiltro) {
//   // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
// }

// const numeros = [1, 2, 3, 4, 5];
// const numerosPares = filtrarArreglo(numeros, function (numero) {
//   return numero % 2 === 0;
// });
// console.log(numerosPares); // Debería imprimir [2, 4]

function filtrarArreglo(arreglo, callbackFiltro) {
    // Usar filter para devolver un nuevo arreglo con los elementos que pasan el filtro
    return arreglo.filter(callbackFiltro);
}

const numeros = [1, 2, 3, 4, 5];
const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
});
console.log(numerosPares); // Debería imprimir [2, 4]
