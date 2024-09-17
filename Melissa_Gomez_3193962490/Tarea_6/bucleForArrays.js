let numeros = [5, 10, 15, 20, 25];
let nuevoArray = []; // Array para almacenar los resultados

// Usamos un bucle for para recorrer el array original
for (let i = 0; i < numeros.length; i++) {
    nuevoArray[i] = numeros[i] * 2; // Multiplicamos cada número por 2
}

// Imprimimos el nuevo array
console.log(nuevoArray);
