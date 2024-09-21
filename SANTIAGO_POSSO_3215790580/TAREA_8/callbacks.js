//1.Callbacks en Manejo de Datos: Sumar Arreglo:
function sumarArreglo(numeros, callback) {
    const suma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
    callback(suma);
  }
  
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); // Debería imprimir 15
  });


//2-Callbacks para Filtrar Elementos de un Arreglo:
function filtrarArreglo(arreglo, callbackFiltro) {
    const resultado = arreglo.filter(callbackFiltro);
    return resultado;
}
  
const numero = [1, 2, 3, 4, 5];
const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
});
console.log(numerosPares); // Debería imprimir [2, 4]

//3.Callbacks: Filtrar Números Pares:
function filtrarPares(numeros, callback) {
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    callback(numerosPares);
  }
  
  function mostrarPares(numerosPares) {
    console.log(numerosPares); // Imprime los números pares en consola
  }
  
  const numerosEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  filtrarPares(numerosEjemplo, mostrarPares); // Debería imprimir [2, 4, 6, 8, 10]
  
//4.Callback Asíncrono: Simulación Vuelo desde Colombia hasta Corea del Sur:
function vueloBogotaMadrid(callback) {
    console.log("Estoy en Bogotá");
    setTimeout(() => {
      console.log("Vuelo Bogotá - Madrid, me demoré 7 horas");
      console.log("Llegué a Madrid");
      callback();
    }, 7000);
  }
  
  function vueloMadridFrankfurt(callback) {
    setTimeout(() => {
      console.log("Vuelo Madrid - Frankfurt, me demoré 2 horas");
      console.log("Llegué a Frankfurt");
      callback();
    }, 2000);
  }
  
  function vueloFrankfurtSeul(callback) {
    setTimeout(() => {
      console.log("Vuelo Frankfurt - Seúl, me demoré 10 horas");
      console.log("Llegué a Seúl");
      callback();
    }, 10000);
  }
  
  function iniciarVuelo() {
    vueloBogotaMadrid(() => {
      vueloMadridFrankfurt(() => {
        vueloFrankfurtSeul(() => {
          console.log("Llegada a Seúl");
        });
      });
    });
  }
  
  iniciarVuelo();
  