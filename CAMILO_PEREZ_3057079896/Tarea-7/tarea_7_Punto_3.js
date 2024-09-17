
// Tarea 7: Manipulación Básica de Arrays y Objetos orientado a ES6
// Punto 3: Cálculo de Estadísticas Básicas:

const estudiantes = [
    { nombre: "Camilo", edad: 29, promedio: 10 },
    { nombre: "Ana", edad: 30, promedio: 6 },
    { nombre: "Pedro", edad: 30, promedio: 9 },
];

// Calcula el promedio de edad de los estudiantes:

let sumaEdades = 0

const estudiantesEdades = (estudiantes.map(estudiante => estudiante.edad))

estudiantesEdades.forEach(estudiante => sumaEdades += estudiante)

console.log("El total de edades es: " + sumaEdades)

const promedioEdades = sumaEdades / estudiantesEdades.length

console.log("El promedio de las edades es: " + promedioEdades.toFixed(2))




