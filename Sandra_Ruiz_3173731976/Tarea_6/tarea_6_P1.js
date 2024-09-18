//Tarea 6: Repaso manipulación de objetos y arrays
//Ejercicio de Bucle For con Arrays:
//Dado el siguiente array de números:
//let numeros = [1, 2, 3, 4, 5]
//Utiliza un bucle for para multiplicar cada número por 2 y 
//almacenar el resultado en un nuevo array.
// Luego, imprime el nuevo array.
let num = [1, 2, 3, 4, 5];
let ans = [];

for (let i = 0; i < num.length; i++) {
    ans.push(num[i] * 2);
}

console.log(ans);
