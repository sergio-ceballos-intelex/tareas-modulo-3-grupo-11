const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// Imprimir el nombre del segundo estudiante
console.log("Nombre del segundo estudiante:", estudiantes[1].nombre);

// Actualizar la edad del primer estudiante a 25 años
estudiantes[0].edad = 25;

// Imprimir la información completa del primer estudiante después de la actualización
console.log("Información del primer estudiante después de la actualización:", estudiantes[0]);
