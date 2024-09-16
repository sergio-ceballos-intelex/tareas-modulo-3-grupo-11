function calcular(x, y, ope) {
    if (ope === 'suma') {
        return x + y;
    } else if (ope === 'resta') {
        return x - y;
    } else if (ope === 'multiplicacion') {
        return x * y;
    } else if (ope === 'division') {
        return x / y;
    } else {
        return 'Sintax error';
    }
}

// parte B: si queremos hacer operaciones entre 7 y 8

const x = 7;
const y = 8;
const ope = 'suma'; 

const resultado = calcular(x, y, ope);
console.log(`El resultado de la ${ope} es: ${resultado}`);