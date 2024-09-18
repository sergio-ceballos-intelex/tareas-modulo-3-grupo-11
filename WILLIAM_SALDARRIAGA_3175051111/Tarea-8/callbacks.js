// Tarea 8: Callbacks

// Ejercicio 1. Callbacks en Manejo de Datos

function sumarArreglo(numeros, callback) {
    // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
    let suma = 0;
    numeros.forEach(numero => suma += numero);
    callback(suma);        
  }

  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); // Debería imprimir 15
  });


// Ejercicio 2. Callbacks para Filtrar Elementos de un Arreglo
function filtrarArreglo(arreglo, callbackFiltro) {
    // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
    const arregloFiltrado = arreglo.filter(callbackFiltro);
    return arregloFiltrado;
  }

  //const numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares); // Debería imprimir [2, 4]


 // Ejercicio 3. Callbacks: Filtrar Números Pares
 function filtrarPares(numeros, callback) {
  let numerosPares = numeros.filter(number => number % 2 === 0);
  callback(numerosPares);
}

// Callback para mostrar los números pares en la consola
function mostrarPares(numerosPares) {
  console.log(numerosPares);
}

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Llamar a la función filtrarPares y pasar el callback mostrarPares
filtrarPares(numeros2, mostrarPares);


//Ejercicio 4: Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur

//Metodo 1
// const vueloBogotaMadrid = (callback) => {
//     console.log('Estoy en Bogota');
//     setTimeout(()=> {
//         console.log('Vuelo Bogota - Madrid, me demore 7 horas');
//         console.log('Llegué a Madrid');
//         callback();
//     },7000);
    
    
// }

// const vueloMadridFrankfurt = (callback) => {
//     setTimeout(()=> { 
//         console.log('Vuelo Madrid - Frankfurt, me demore 2 horas');
//         console.log('Llegué a Frankfurt');
//         callback();
//     },2000);

// }

// const vueloFrankfurtSeul = () => {
//     setTimeout(()=> { 
//         console.log('Vuelo Frankfurt - Seul, me demore 10 horas');
//         console.log('Llegué a Seul');
//     },10000);
    
// }

// vueloBogotaMadrid(()=> {
//     vueloMadridFrankfurt(() =>{
//         vueloFrankfurtSeul();
//     })
// });


//Metodo 2
function proximoDestino (origen, destino, tiempoVuelo, callback){
    if(origen === 'Bogota'){
        console.log('Estoy en Bogota');        
    }
    setTimeout(()=> {
        console.log(`Vuelo ${origen} - ${destino}, me demore ${tiempoVuelo} horas`);
        console.log(`Llegué a ${destino}`);
        callback();
    },tiempoVuelo * 1000);

}

proximoDestino ('Bogota', 'Madrid', 7,() => {
    proximoDestino ('Madrid', 'Frankfurt', 2,() => {
        proximoDestino ('Frankfurt', 'Seul', 10,() => {} );
    })    
});