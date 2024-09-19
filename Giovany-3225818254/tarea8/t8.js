//Devoluciones de llamadas en Manejo de Datos:

function sumarArreglo(numeros, callback) {
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    callback(suma);
}

const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function (resultado) {
    console.log("La suma de los números es:", resultado); 
});

//Devoluciones de llamada para Filtrar Elementos de un Arreglo:

function filtrarArreglo(arreglo, callbackFiltro) {
    const resultado = arreglo.filter(callbackFiltro);
    return resultado;
}

const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
});

console.log("Números pares:", numerosPares); 

//Devoluciones de llamada: Filtrar Números Pares

function filtrarPares(numeros, callback) {
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    callback(numerosPares);
}

function mostrarPares(numerosPares) {
    console.log("Números pares:", numerosPares);
}

const numerosEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filtrarPares(numerosEjemplo, mostrarPares);

//Callback asíncrono: Simulación de vuelo desde Colombia hasta Corea del Sur

function vueloBogotaMadrid() {
    setTimeout(() => {
        console.log("Estoy en Bogotá");
        console.log("Vuelo Bogotá - Madrid, me demoré 7 horas");
        console.log("Llegué a Madrid");
        vueloMadridFrankfurt();
    }, 7000);
}

function vueloMadridFrankfurt() {
    setTimeout(() => {
        console.log("Vuelo Madrid - Frankfurt, me demoré 2 horas");
        console.log("Llegué a Frankfurt");
        vueloFrankfurtSeul();
    }, 2000);
}

function vueloFrankfurtSeul() {
    setTimeout(() => {
        console.log("Vuelo Frankfurt - Seúl, me demoré 10 horas");
        console.log("Llegué a Seúl");
    }, 10000);
}

vueloBogotaMadrid();
