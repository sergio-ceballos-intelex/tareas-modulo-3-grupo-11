const limite = 2000;
for (let i = 1;i<= limite;i++){
    const numero = i.toString();
    
    // if tradicional
    // if (numero.startsWith("2")){
    //     console.log(`El numero es: ${i}`);
    // }

    // operador condicional -  ternario
    numero.startsWith("2") ? console.log(`El numero es: ${i}`):0;
}
