// EJERCICIO 1 CALCULADORA HTML
const num1 = Number(prompt("Por favor ingrese primer número"));
const num2 = Number(prompt("Por favor ingrese segundo número"));
const operacion = prompt("Por favor ingrese operacion a realizar (+, -, *, /)")
let resultado
if (operacion === "+"){
    resultado = num1 + num2
} else if (operacion === "-"){
    resultado = num1 - num2
} else if (operacion === "*"){
    resultado = num1 * num2
} else if (operacion === "/"){
    resultado = num1 / num2
} else{
    document.write("Por favor ingrese operacion")
}
document.write(`${num1} ${operacion} ${num2} = ${resultado} <br>`)

// EJERCICIO 2 SISTEMA DE GESTION DE REGISTRO DE ESTUDIANTES CON HTML
const nombre = String(prompt("Por favor ingrese nombre del estudiante"));
const edad = Number(prompt("Por favor ingrese edad del estudiante"));
const promedio = Number(prompt("Por favor ingrese promedio de calificaciones del estudiante (0-10)"));
const esRegular = Boolean(prompt("El estudiante es regular?(SI => digite si; NO => no digite nada)"));
const materiasAprobadas = Number(prompt("Por favor ingrese cantidad de materias aprobadas"));
const esBecado = Boolean(prompt("El estudiante tiene beca?(SI => digite si; NO => no digite nada)"));
if(edad < 18){
    document.write(nombre + " es menor de edad y no puede registrarse");
} else if(promedio < 6){ 
    document.write(nombre + " no cumple con el promedio mínimo requerido");
} else if(esRegular == ""){
    document.write(nombre + " debe registrarse como regular");
} else if(esBecado == ""){
    document.write(nombre + " Puede solicitar una beca");
} else if(esBecado == true){
    document.write(nombre + " cumple con los requisitos y tiene " + materiasAprobadas + " materias aprobadas");
} else {
    document.write("ERROR, verifique sus datos")
}

// EJERCICIO 2 SISTEMA DE GESTION DE REGISTRO DE ESTUDIANTES CON FUNCION
const registro = (nombre1, edad1, promedio1, esRegular1, materiasAprobadas1, esBecado1) =>{    
    if(edad1 < 18){
        console.log(nombre1 + " es menor de edad y no puede registrarse");
    // A pesar que en el ejercicio la condición es edad1>18, por temas prácticos se asume condición 
    // edad1>=18, ya que si se deja como se plantea en el ejercicio no reconoceria la edad de 18 años.
    } else if(promedio1 < 6){ 
        console.log(nombre + " no cumple con el promedio mínimo requerido");
    } else if(esRegular1 == false){
        console.log(nombre + " debe registrarse como regular");
    } else if(esBecado1 == false){
        console.log(nombre + " Puede solicitar una beca");
    } else if(esBecado1 == true){
        console.log(nombre1 + " cumple con los requisitos y tiene " + materiasAprobadas1 + " materias aprobadas");
    } else {
        console.log("ERROR, verifique sus datos")
    }
}
registro ("Yonatan", 18 , 6, true, 8, true)

//EJERCICIO 3 LOGICA PROPOSICIONAL

// true || true || false && true || false && true && true || false
// true || true || false         || false                 || false
// true

// true && (false || false && (true && (true || false && true))) || false && (true || false)
// true && (false || false && (true && (true || false        ))) || false && true
// true && (false || false && (true && true                   )) || false && true
// true && (false || false && true                             ) || false && true
// true && (false || false                                     ) || false && true
// true && false                                                 || false && true
// false                                                         || false
// false

// !(!true && (false || false && !!!true || (true && !false))) || false && true
// !(!true && (false || false && !!!true || (true && true  ))) || false && true
// !(!true && (false || false && !!!true || true            )) || false && true
// !(!true && (false || false && false   || true            )) || false && true
// !(!true && (false || false            || true            )) || false && true
// !(!true && true                                           ) || false && true
// !(false && true                                           ) || false && true
// !(false                                                   ) || false && true
// true                                                        || false && true
// true                                                        || false
// true