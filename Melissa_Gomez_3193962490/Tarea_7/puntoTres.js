const estudiantes = [
    { nombre: "Camilo", edad: 25, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// Calcular la suma de las edades
let sumaEdades = 0;
estudiantes.forEach(estudiante => {
    sumaEdades += estudiante.edad;
});

// Calcular el promedio de edad
const promedioEdad = sumaEdades / estudiantes.length;

// Imprimir la suma y el promedio de edad
console.log("Suma de edades:", sumaEdades);
console.log("Promedio de edad:", promedioEdad);
