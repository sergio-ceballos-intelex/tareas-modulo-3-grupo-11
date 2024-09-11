// Calculadora

const op = prompt ("Ingrese el tipo de operacion que desea realizar; suma, resta, multiplicacion o division");
const num1 = Number (prompt ("Ingrese un numero"));
const num2 = Number (prompt ("Ingrese un numero"));

if ( op === "Summa" || op === "suma"){
    const sum = num1 + num2;
    document.write(sum);
}else if (op === "Resta" || op === "resta"){
    const rest = num1 - num2;
    document.write(rest);
}else if (op === "Multiplicacion" || op === "multiplicacion"){
    const multi = num1 * num2;
    document.write (multi);
}else{
    const div = num1 / num2;
    document.write(div);
};