// Imagina que estás desarrollando un sistema de gestión de registro de estudiantes para una universidad. Este sistema debe tomar en cuenta varios criterios para determinar el estado de un estudiante y sus privilegios. Debes escribir un script en JavaScript que verifique varios datos sobre un estudiante y devuelva un mensaje que indique su estado. Estos datos son:

// nombre (string): El nombre del estudiante.
// edad (number): La edad del estudiante.
// promedio (number): El promedio de calificaciones del estudiante (0 a 10).
// esRegular (boolean): Si el estudiante está registrado como regular.
// cantidadMateriasAprobadas (number): La cantidad de materias aprobadas por el estudiante.
// esBecado (boolean): Si el estudiante tiene una beca.

// *Requisitos:

// Si el estudiante tiene menos de 18 años, debe mostrarse un mensaje indicando que el estudiante es menor de edad y no puede registrarse.
// Si el estudiante es mayor de 18 años y tiene un promedio menor a 6, debe mostrarse un mensaje indicando que el estudiante no cumple con el promedio mínimo requerido.
// Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, pero no está registrado como regular, debe mostrarse un mensaje indicando que el estudiante debe registrarse como regular.
// Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, está registrado como regular pero no tiene una beca, debe mostrarse un mensaje indicando que puede solicitar una beca.
// Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, está registrado como regular y tiene una beca, debe mostrarse un mensaje indicando que el estudiante cumple con todos los requisitos.

const nombre = "Melissa";
const edad = 21; 
const promedio = 5; 
const esRegular = true; 
const cantidadMateriasAprobadas = 7; 
const esBecado = false; 

if (edad < 18) {
    console.log(`${nombre} es menor de edad y no puede registrarse.`);
} else if (promedio < 6) {
    console.log(`${nombre} no cumple con el promedio mínimo requerido.`);
} else if (!esRegular) {
    console.log(`${nombre} debe registrarse como regular.`);
} else if (esRegular && !esBecado) {
    console.log(`${nombre} puede solicitar una beca.`);
} else if (esRegular && esBecado) {
    console.log(`${nombre} cumple con todos los requisitos.`);
} else {
    console.log("Estado del estudiante no definido.");
}
