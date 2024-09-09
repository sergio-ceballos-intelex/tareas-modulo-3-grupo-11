function calOperacion(num1, num2, operacion){
    if (operacion === 'suma'){
        return num1 + num2;
    } else if((operacion === 'resta')){
        return num1 - num2;
    }
    else if((operacion === 'multiplicacion')){
        return num1 * num2;
    }
    else if((operacion === 'division')){
        return num1 / num2;
    }
}

const number1 = 7;
const number2 = 8;
const operacion = "suma";

if (number1 === 7 && number2 === 8){
    console.log(`El resultado de ${operacion} los numeros ${number1} y ${number2}, es: ${calOperacion(number1,number2,operacion)} `);
}


// Prueba de  Estructuras de Selección (Condicionales)

// function calOperacion(num1, num2, operacion){
 
//     switch (operacion) {
//         case 'suma' : return num1 + num2;
//         case 'resta': return num1 - num2;
//         case 'multiplicacion': return num1 * num2;
//         case 'division': return num1 / num2;
//     }
// }

// const number1 = 7;
// const number2 = 8;
// const operacion = "multiplicacion";

// if (number1 === 7 && number2 === 8){
//     console.log(`El resultado de ${operacion} los numeros ${number1} y ${number2}, es: ${calOperacion(number1,number2,operacion)} `);
// }