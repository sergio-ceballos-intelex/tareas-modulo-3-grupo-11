// Calculadora

// const op = prompt ("Ingrese el tipo de operacion que desea realizar; suma, resta, multiplicacion o division");
// const num1 = Number (prompt ("Ingrese un numero"));
// const num2 = Number (prompt ("Ingrese un numero"));

// if ( op === "Summa" || op === "suma"){
//     const sum = num1 + num2;
//     document.write(sum);
// }else if (op === "Resta" || op === "resta"){
//     const rest = num1 - num2;
//     document.write(rest);
// }else if (op === "Multiplicacion" || op === "multiplicacion"){
//     const multi = num1 * num2;
//     document.write (multi);
// }else{
//     const div = num1 / num2;
//     document.write(div);
// };

// Sistema de gestion de registro de estudiantes

const studentName = prompt('Ingrese su nombre');
const age = Number(prompt('Ingrese su edad'));
const average = Number(prompt('Ingrese su promedio'));
const isRegular = prompt('Esta registrado como regular?');
const qtyAprprovedSubjects = Number(prompt('Cuantas materias aprobo?'));
const scholarship = prompt('Es becado?');

if(age < 18){
    document.write('Hola ', studentName, ' usted es menor de edad y no puede registrarse');
}else if (age >= 18 && average < 6){
    document.write ('Hola ', studentName, ' Usted esta matriculado como regular, no cumple con el promedio minimo requerido para aplicar a una beca');
}else if (age >= 18 && average >= 18){
    document.write('Hola ', studentName, ' usted esta matriculado como regular, puede solicitar una beca');
}else {
    document.write('Hola ', studentName, ' usted cumple todos los requisitos');
};

// Logica proposicional

// true || true || false && true || false && true && true || false
// true || true || false || false && true && true || false
// true || true || false || false || false
// true || false || false || false
// true || true || false || false
// true || true || false
// true || true 
// true

// true && (false || false && (true && (true || false && true))) || false && (true || false)
// true && (false || false && (true && (true || false))) || false && (true || false)
// true && (false || false && (true && true)) || false && (true || false)
// true && (false || false && true) || false && (true || false)
// true && (false || false) || false && (true || false)
// true && false || false && (true || false)
// true && false || false && true
// true && false || false
// false || false
// false

// !(!true && (false || false && !!!true || (true && !false))) || false && true
// !(!true && (false || false && !!!true || true)) || false && true
// !(!true && (false || false || true)) || false && true
// !(!true && (false || true)) || false && true
// !(!true && true) || false && true
// !false || false && true
// true || false && true
// true || false
// true