function calculadora() {
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
    const operacion = prompt("Ingrese la operación (suma, resta, multiplicación, división):").toLowerCase();

    let resultado;

    if (operacion === "suma") {
        resultado = num1 + num2;
    } else if (operacion === "resta") {
        resultado = num1 - num2;
    } else if (operacion === "multiplicación" || operacion === "multiplicacion") {
        resultado = num1 * num2;
    } else if (operacion === "división" || operacion === "division") {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            alert("No se puede dividir por 0");
            return;
        }
    } else {
        alert("Operación no válida");
        return;
    }

    alert(`El resultado de la ${operacion} es: ${resultado}`);
}

calculadora();
