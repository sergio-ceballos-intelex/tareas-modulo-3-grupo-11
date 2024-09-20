// **Callbacks en Manejo de Datos:**

// Descripción: Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

// Ejercicio:

// function sumarArreglo(numeros, callback) {
//   // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
// }
// const numeros = [1, 2, 3, 4, 5];
// sumarArreglo(numeros, function (resultado) {
//   console.log(resultado); // Debería imprimir 15
// });

function sumarArreglo(numeros, callback) {
    // Sumar todos los números del arreglo
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    // Llamar al callback con el resultado
    callback(suma);
}

const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function (resultado) {
    console.log(resultado); // Debería imprimir 15
});
