//Callbacks en Manejo de Datos
let resultado = 0
function sumarArreglo(numeros, callback) {
    // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
    for (let i = 0; i < numeros.length; i++) {
        resultado = resultado + numeros[i]        
    }
    callback()
}
const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function () {
    console.log(resultado); // Debería imprimir 15
});


//Callbacks para Filtrar Elementos de un Arreglo
function filtrarArreglo(numbers, callbackFiltro) {
    // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
    numerosPares = [];
    for (let i = 0; i < numbers.length; i++) {
        const esNumeroPar = callbackFiltro(numbers[i])
        if (esNumeroPar) {
            numerosPares.push(numbers[i])            
        }
    }
  }  
const numbers = [1, 2, 3, 4, 5];
filtrarArreglo(numbers, numero => numero % 2 === 0);
console.log(numerosPares); // Debería imprimir [2, 4]


// Callbacks: Filtrar Números Pares
// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros1, callback) {
    // Tu codigo acá
    const numerosPares = numeros1.filter(numero => numero % 2 === 0);
    callback(numerosPares);
}  
// Callback para mostrar los números pares en la consola
function mostrarPares(numerosPares) {
    // Tu codigo acá
    console.log(numerosPares);
}
// Array de números de ejemplo
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
// Llamar a la función filtrarPares y pasar el callback mostrarPares
filtrarPares(numeros1, mostrarPares);


// Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur
console.log("Estoy en Bogota")
const bogotaMadrid = (callback) => {    
    setTimeout(() => {        
        console.log('Vuelo Bogota - Madrid, me demoré 7 horas');
        console.log('Llegué a Madrid');
        callback();
    }, 7000);
}

const madridFrankfurt = (callback) => {
    setTimeout(() => {
        console.log('Vuelo Madrid - Frankfurt, me demoré 2 horas');
        console.log('Llegué a Frankfurt');
        callback();
    }, 2000);
}

const frankfurtSeul = () => {
    setTimeout(() => {
        console.log('Vuelo Frankfurt - Seul, me demoré 10 horas');
        console.log('Llegué a Seul');
    }, 10000);
}

bogotaMadrid(() => {
    madridFrankfurt(() => {
        frankfurtSeul();
    });
});