function verificarEstadoEstudiante(nombre, edad, promedio, esRegular, cantidadMateriasAprobadas, esBecado) {
    if (edad < 18) {
      return `${nombre} es menor de edad y no puede registrarse.`;
    } else if (promedio < 6) {
      return `${nombre} no cumple con el promedio mínimo requerido.`;
    } else if (!esRegular) {
      return `${nombre} debe registrarse como estudiante regular.`;
    } else if (!esBecado) {
      return `${nombre} puede solicitar una beca.`;
    } else {
      return `${nombre} cumple con todos los requisitos.`;
    }
  }
  
  // Ejemplo de uso
  const nombre = "Sergio";
  const edad = 20;
  const promedio = 8.5;
  const esRegular = true;
  const cantidadMateriasAprobadas = 15;
  const esBecado = false;
  
  console.log(verificarEstadoEstudiante(nombre, edad, promedio, esRegular, cantidadMateriasAprobadas, esBecado));