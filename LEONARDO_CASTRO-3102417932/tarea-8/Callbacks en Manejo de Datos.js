//function sumarArreglo(numeros, callback) {
    // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
  //}
 // const numeros = [1, 2, 3, 4, 5];
  //sumarArreglo(numeros, function (resultado) {
    //console.log(resultado); // Debería imprimir 15
 // });



  function sumarArreglo(numeros, callback) {
    // Utilizamos el método reduce para sumar todos los números del arreglo
    const suma = numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
    
    // Llamamos al callback con el resultado de la suma
    callback(suma);
  }
  
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); 
  });