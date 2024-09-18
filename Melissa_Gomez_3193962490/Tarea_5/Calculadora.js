function calcular() {
    // Solicitar al usuario los dos números
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    
    // Solicitar al usuario la operación
    let operacion = prompt("Ingresa la operación (suma, resta, multiplicación, división):").toLowerCase();
    
    let resultado;

    // Realizar el cálculo según la operación elegida
    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            alert(`La suma de ${num1} y ${num2} es: ${resultado}`);
            break;
        case "resta":
            resultado = num1 - num2;
            alert(`La resta de ${num1} y ${num2} es: ${resultado}`);
            break;
        case "multiplicación":
            resultado = num1 * num2;
            alert(`La multiplicación de ${num1} y ${num2} es: ${resultado}`);
            break;
        case "división":
            if (num2 !== 0) {
                resultado = num1 / num2;
                alert(`La división de ${num1} entre ${num2} es: ${resultado}`);
            } else {
                alert("Error: No se puede dividir entre cero.");
            }
            break;
        default:
            alert("Operación no válida. Por favor, ingresa suma, resta, multiplicación o división.");
            break;
    }
}

// Llamar a la función
calcular();
