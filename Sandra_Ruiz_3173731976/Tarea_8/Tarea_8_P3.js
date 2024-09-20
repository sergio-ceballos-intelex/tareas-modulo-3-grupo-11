// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros, callback) {   // lo da el enunciado.
    const numerosPares = numeros.filter(function(numero) {
      return numero % 2 === 0;
    });
    callback(numerosPares);
  }
  
  // Callback para mostrar los números pares en la consola
  function mostrarPares(numerosPares) {
    console.log(numerosPares);
  }
  
  // Array de números de ejemplo
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // lo da el enunciado.
  
  // Llamar a la función filtrarPares y pasar el callback mostrarPares
  filtrarPares(numeros, mostrarPares); // lo da el enunciado.
  
