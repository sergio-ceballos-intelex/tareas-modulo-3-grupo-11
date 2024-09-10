
// tarea 3 
// punto 1: Crear un archivo .js y desarrollar un script que muestre en consola los numeros del 1 al 50.
// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }
//punto 2:Guardar y subir cambios al repositorio remoto con un mensaje que especifique que fue lo que se hizo.
//ya se supone que hice el local commit y mande el avion con git push y
//el punto 1.
//punto 3:Modificar el script para que ahora imprima en consola los numeros del 1 al 2000.
// for (let i = 1; i <= 2000; i++) {
//     console.log(i);
// }
//Punto 5: Modificar el script para que ahora imprima solo los numeros que empiezan por 2 (convertir a string el numero y verificar con starsWith)
for (let i = 1; i <= 2000; i++) {
    let numStr = i.toString(); // Se pasa a string
    if (numStr.startsWith('2')) { // Empieza por 2?
        console.log(i); // Se le pide que imprima
    }
}

