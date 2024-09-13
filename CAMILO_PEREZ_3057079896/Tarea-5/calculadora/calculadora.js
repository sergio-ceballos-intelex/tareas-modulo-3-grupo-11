let numA = Number(prompt("Ingresa el primer número"))
let numB = Number(prompt("Ingresa el segundo número"))
let operacion = prompt("Escoge la operación (Suma, Resta, Multiplicación, División").toLowerCase()

const calculadora = (Num1,Num2,operation) => {
    if (operation === "suma"){
       return `El resultado de sumar ${Num1} + ${Num2} es ${Num1 + Num2}`
    }else if (operation === "resta"){
       return `El resultado de restar ${Num1} - ${Num2} es ${Num1 - Num2}`
    }else if (operation === "multiplicacion"){
        return `El resultado de multiplicar ${Num1} * ${Num2} es ${Num1 * Num2}`
    }else if (operation === "division"){  
        `El resultado de multiplicar ${Num1} / ${Num2} es ${Num1 / Num2}`
    } else return "Ingresaste una función incorrecta"
} 

document.write(calculadora(numA,numB,operacion))