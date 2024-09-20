// Punto 2: Acceso y Modificación Básica de Datos
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// Imprime en la consola el nombre del segundo estudiante
console.log("Nombre del segundo estudiante:", estudiantes[1].nombre);

// Actualiza la edad del primer estudiante a 25 años
estudiantes[0].edad = 25;

// Imprime en la consola la información completa del primer estudiante después de la actualización
console.log("Información del primer estudiante actualizada:", estudiantes[0]);

// Punto 3: Cálculo de Estadísticas Básicas
// Calcula la suma de las edades de todos los estudiantes en el array
let sumaEdades = 0;
estudiantes.forEach(estudiante => {
    sumaEdades += estudiante.edad;
});

// Calcula el promedio de edad de los estudiantes
const promedioEdad = sumaEdades / estudiantes.length;

// Imprime en la consola tanto la suma como el promedio de edad de los estudiantes
console.log("Suma de las edades:", sumaEdades);
console.log("Promedio de edad:", promedioEdad.toFixed(2));