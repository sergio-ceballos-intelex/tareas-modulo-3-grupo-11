// 1. Calculadora

function calcular() {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    const operacion = document.getElementById("operacion").value;

    let resultado;
    switch (operacion) {
        case "suma":
            resultado = valor1 + valor2;
            break;
        case "resta":
            resultado = valor1 - valor2;
            break;
        case "multiplicación":
            resultado = valor1 * valor2;
            break;
        case "división":
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                alert("No se puede dividir entre cero.");
            }
            break;
        default:
            alert("Operación no válida. Elige suma, resta, multiplicación o división.");
    }

    if (resultado !== undefined) {
        document.getElementById("resultado").textContent = `El resultado es: ${resultado}`;
    }
}


// 2. Sistema de Gestión de Registro de Estudiantes
function evaluarEstadoEstudiante(nombre, edad, promedio, esRegular, cantidadMateriasAprobadas, esBecado) {
    if (edad < 18) {
        return "El estudiante es menor de edad y no puede registrarse.";
    } else if (promedio < 6) {
        return "El estudiante no cumple con el promedio mínimo requerido.";
    } else if (!esRegular) {
        return "El estudiante debe registrarse como regular.";
    } else if (!esBecado) {
        return "El estudiante puede solicitar una beca.";
    } else {
        return "El estudiante cumple con todos los requisitos.";
    }
}

// Datos 
const nombreEstudiante = "Giovany";
const edadEstudiante = 19;
const promedioEstudiante = 5.9;
const esRegularEstudiante = true;
const cantidadMateriasAprobadasEstudiante = 12;
const esBecadoEstudiante = false;

// evaluacion de estudiante 
const estadoEstudiante = evaluarEstadoEstudiante(
    nombreEstudiante,
    edadEstudiante,
    promedioEstudiante,
    esRegularEstudiante,
    cantidadMateriasAprobadasEstudiante,
    esBecadoEstudiante
);

console.log(estadoEstudiante);


// 3. Lógica proposicional


// 1.0 true || true || false && true || false && true && true || false
// 1.1 true || true || false || false || false
// 1.2 true


// 2.0 true && (false || false && (true && (true || false && true))) || false && (true || false)
// 2.1 true && false || false && (true || false)
// 2.2 false


// 3.0 !(!true && (false || false && !!!true || (true && !false))) || false && true
// 3.1 false && (false || false && true || (true && true))
// 3.2 true