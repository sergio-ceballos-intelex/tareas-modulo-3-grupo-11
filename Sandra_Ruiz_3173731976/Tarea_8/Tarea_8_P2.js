//Descripción: Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro. Ejercicio:

//function filtrarArreglo(arreglo, callbackFiltro) {
  // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
//}

//const numeros = [1, 2, 3, 4, 5];
//const numerosPares = filtrarArreglo(numeros, function (numero) {
  //return numero % 2 === 0;
//});
//console.log(numerosPares); // Debería imprimir [2, 4]

function filtrarArreglo(arreglo, callbackFiltro) {  // Lo da el enunciado.
    const resultado = [];
    for (let i = 0; i < arreglo.length; i++) {
      if (callbackFiltro(arreglo[i])) {
        resultado.push(arreglo[i]);
      }
    }
    return resultado;
  }
  
  const numeros = [1, 2, 3, 4, 5]; // lo da el enunciado
  const numerosPares = filtrarArreglo(numeros, function (numero) { // lo da enunciado
    return numero % 2 === 0; // lo da el enunciado
  });
  console.log(numerosPares); // Lo da el enunciado.