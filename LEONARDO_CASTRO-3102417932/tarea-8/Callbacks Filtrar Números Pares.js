// Función para filtrar números pares y llamar a un callback con el resultado
//function filtrarPares(numeros, callback) {
    // Tu codigo acá
  //}
  
  // Callback para mostrar los números pares en la consola
  //function mostrarPares(numerosPares) {
    // Tu codigo acá
  //}
  
  // Array de números de ejemplo
  //const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Llamar a la función filtrarPares y pasar el callback mostrarPares
  //filtrarPares(numeros, mostrarPares);

  // Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros, callback) {
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    callback(numerosPares);
  }
  
  // Callback para mostrar los números pares en la consola
  function mostrarPares(numerosPares) {
    console.log("Los números pares son:");
    numerosPares.forEach(numero => console.log(numero));
  }
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Llamar a la función filtrarPares y pasar el callback mostrarPares
  filtrarPares(numeros, mostrarPares);