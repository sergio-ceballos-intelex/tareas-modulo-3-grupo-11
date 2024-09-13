// Función para realizar cálculos usando if-else
function calcular(valor1, valor2, operacion) {
    if (operacion.toLowerCase() === 'suma') {
      return valor1 + valor2;
    } else if (operacion.toLowerCase() === 'resta') {
      return valor1 - valor2;
    } else if (operacion.toLowerCase() === 'multiplicacion') {
      return valor1 * valor2;
    } else if (operacion.toLowerCase() === 'division') {
      if (valor2 !== 0) {
        return valor1 / valor2;
      } else {
        return "Error: División por cero";
      }
    } else {
      return "Operación no válida";
    }
  }
  
  // Simulación de entrada de usuario
  let valor1 = parseFloat(prompt("Ingrese el primer valor:"));
  let valor2 = parseFloat(prompt("Ingrese el segundo valor:"));
  let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):");
  
  // Realizar el cálculo y mostrar el resultado
  let resultado = calcular(valor1, valor2, operacion);
  console.log(`El resultado de la ${operacion} es: ${resultado}`);
  
  // Ejemplo específico con 7 y 8
  console.log("\nEjemplo específico:");
  console.log("Suma de 7 y 8:", calcular(7, 8, 'suma'));
  console.log("Resta de 7 y 8:", calcular(7, 8, 'resta'));
  console.log("Multiplicación de 7 y 8:", calcular(7, 8, 'multiplicacion'));
  console.log("División de 7 y 8:", calcular(7, 8, 'division'));