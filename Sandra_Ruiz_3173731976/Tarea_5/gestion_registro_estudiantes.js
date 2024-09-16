//Requisitos:
//Si el estudiante tiene menos de 18 años, debe mostrarse un mensaje indicando que el estudiante es menor de edad y no puede registrarse.
//Si el estudiante es mayor de 18 años y tiene un promedio menor a 6, debe mostrarse un mensaje indicando que el estudiante no cumple con el promedio mínimo requerido.
//Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, pero no está registrado como regular, debe mostrarse un mensaje indicando que el estudiante debe registrarse como regular.
//Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, está registrado como regular pero no tiene una beca, debe mostrarse un mensaje indicando que puede solicitar una beca.
//Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, está registrado como regular y tiene una beca, debe mostrarse un mensaje indicando que el estudiante cumple con todos los requisitos.
// Esta me la invente yo para no dejar empty "cuantasMateriasGano"
// El estudiante como minimo debe tener 8 materias aprobadas





function verificarEstadoEstudiante(estudiante) {
    const { nombre, edad, promedio, esRegular, cuantasMateriasGano, esBecado } = estudiante;

    if (edad < 18) {
        return `${nombre} es menor de edad y no puede registrarse.`; 
    } else if (promedio < 6) {
        return `${nombre} no cumple con el promedio mínimo requerido.`;
    } else if (!esRegular) {
        return `${nombre} debe registrarse como regular.`;
    } else if (!esBecado) {
        return `${nombre} puede solicitar una beca.`;

    } else if (cuantasMateriasGano < 8) {
        return `${nombre} No cumple con las materias minimas arprobadas.`;
            

    } else {
        return `${nombre} cumple con todos los requisitos.`;
    }
    
}

// Ejemplo de uso:
const estudiante = {
    nombre: "Ash Ketchup",
    edad: 20,
    promedio: 9.6,
    esRegular: true,
    cuantasMateriasGano: 8,
    esBecado: true
};

console.log(verificarEstadoEstudiante(estudiante));
