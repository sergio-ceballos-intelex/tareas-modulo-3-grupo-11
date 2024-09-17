
Callbacks para Filtrar Elementos de un Arreglo:

Descripción: Crea una función que tome un arreglo y un callback de filtro, 
y devuelva un nuevo arreglo con los elementos que pasan el filtro.


function filtrarArreglo(array, callbackFiltro) {

    let newArray = []

    for (let i = 0; i < array.length; i++){

        if(callbackFiltro(array[i])){
            newArray.push(array[i])
        }
    } 
    return newArray  
}

const numeros = [1, 2, 3, 4, 5];

const numerosPares = filtrarArreglo(numeros, function (numero) {
      
    return numero % 2 === 0;
});

console.log(numerosPares);