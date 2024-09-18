let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

// Usamos un bucle for para concatenar frutas2 a frutas1
for (let i = 0; i < frutas2.length; i++) {
    frutas1.push(frutas2[i]); // Agregamos cada fruta de frutas2 a frutas1
}

// Imprimimos el array resultante
console.log(frutas1);
