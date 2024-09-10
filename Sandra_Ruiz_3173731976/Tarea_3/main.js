
// tarea 3 
//Punto 5: Modificar el script para que ahora imprima solo los numeros que empiezan por 2 (convertir a string el numero y verificar con starsWith)
for (let i = 1; i <= 2000; i++) {
    let numStr = i.toString(); // Se pasa a string
    if (numStr.startsWith('2')) { // Empieza por 2?
        console.log(i); // Se le pide que imprima
    }
}
