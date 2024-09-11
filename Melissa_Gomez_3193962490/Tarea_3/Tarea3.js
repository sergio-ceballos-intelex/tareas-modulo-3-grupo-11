// Crear un archivo .js y desarrollar un script que muestre en consola los numeros del 1 al 50.

// // -Usamos un bucle `for` para iterar desde 1 hasta 50
// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// //Modificar el script para que ahora imprima en consola los numeros del 1 al 2000.

// // -Usamos un bucle `for` para iterar desde 1 hasta 2000
// for (let i = 1; i <= 2000; i++) {
//     console.log(i);
// }

// Modificar el script para que ahora imprima solo los numeros que empiezan por 2 (convertir a string el numero y verificar con starsWith)

// Script para mostrar los números del 1 al 2000 que comienzan con el dígito 2 en la consola

// -Usamos un bucle `for` para iterar desde 1 hasta 2000
for (let i = 1; i <= 2000; i++) {
    // Convertimos el número a una cadena
    let numberStr = i.toString();
    
    // Verificamos si la cadena comienza con el dígito '2'
    if (numberStr.startsWith('2')) {
        console.log(i);
    }
}
