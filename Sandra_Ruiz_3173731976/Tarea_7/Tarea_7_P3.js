
//const estudiantes = [
    //{ nombre: "Camilo", edad: 33, promedio: 10 },
    //{ nombre: "Juan", edad: 30, promedio: 6 },
    //{ nombre: "Andres", edad: 29, promedio: 8.7 },
//];
//Punto 3: Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos los estudiantes en el array 
//(puedes utilizar un map o foreach).

//Calcula el promedio de edad de los estudiantes.
//Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.

const estudiantes = [                              // ENunciado.
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];
// 3.A :Cálculo de la suma de las edades
let sumaAge = 0;
estudiantes.forEach(estudiante => {
    sumaAge += estudiante.edad;
});                                   // Para que el dividendo sea el total de la suma de las edades de los estudiantes.

// 3.B : Cálculo del promedio de edad
let promedioEdad = sumaAge / estudiantes.length; // estudiantes.lenght para que el divisor sea  cuantos estudiantes hay.

// 4.C : Imprimir los resultados en la consola
console.log("Suma de las edades:", sumaAge);
console.log("Promedio de edad:", promedioEdad.toFixed(2)); // to fixed para que solo mande 2 decimales.