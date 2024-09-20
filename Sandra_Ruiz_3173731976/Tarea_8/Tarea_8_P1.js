//Callbacks en Manejo de Datos:

//Descripción: Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

//Ejercicio:

//function sumarArreglo(numeros, callback) {
  // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
//}
//const numeros = [1, 2, 3, 4, 5];
////sumarArreglo(numeros, function (resultado) {
  //console.log(resultado); // Debería imprimir 15
//});

function sumarArreglo(numeros, callback) {   // lo da el enunciado
    
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0); 
    // función para sumar todos los números del arreglo
    
   
    callback(suma); // y llamar al callback con el resultado
  }
  
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {  // lo da el enunciado.
    console.log(resultado); // lo da el enunciado.
  });