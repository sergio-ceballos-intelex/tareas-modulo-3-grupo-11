
let numeros = []

for (let i = 1; i <= 2000; i++){
    numeros.push(i)
}

let numbersToString = numeros.filter(number => number.toString().startsWith("2"))

console.log(numbersToString)

