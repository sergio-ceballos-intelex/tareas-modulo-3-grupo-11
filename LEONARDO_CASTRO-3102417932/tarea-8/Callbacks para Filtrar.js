//function filtrarArreglo(arreglo, callbackFiltro) {
    // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
  //}
  
  //const numeros = [1, 2, 3, 4, 5];
  //const numerosPares = filtrarArreglo(numeros, function (numero) {
    //return numero % 2 === 0;//
  //});
  //console.log(numerosPares); // Debería imprimir [2, 4]

function filtrarArreglo(arreglo, callbackFiltro) {
    // Utilizamos el método filter para crear un nuevo arreglo con los elementos que pasan el filtro
    return arreglo.filter(callbackFiltro);
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
  });
  
  console.log(numerosPares); 