function verificarEstudiante(nombre, edad, promedio, esRegular, cantidadMateriasAprobadas, esBecado) {
    if (edad < 18) {
        console.log(`${nombre} es menor de edad y no puede registrarse.`);
    } else if (promedio < 6) {
        console.log(`${nombre} no cumple con el promedio mínimo requerido.`);
    } else if (promedio >= 6 && !esRegular) {
        console.log(`${nombre} debe registrarse como regular.`);
    } else if (promedio >= 6 && esRegular && !esBecado) {
        console.log(`${nombre} puede solicitar una beca.`);
    } else if (promedio >= 6 && esRegular && esBecado) {
        console.log(`${nombre} cumple con todos los requisitos.`);
    }
}

const nombre = "Sergio";
const edad = 20;
const promedio = 7.5;
const esRegular = true;
const cantidadMateriasAprobadas = 5;
const esBecado = false;

verificarEstudiante(nombre, edad, promedio, esRegular, cantidadMateriasAprobadas, esBecado);
