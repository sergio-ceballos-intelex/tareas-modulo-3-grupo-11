
¿Qué son las estructuras de control en programación?

¡Hola! ¿Te has preguntado qué es y cuáles son las estructuras de control en programación?

Hoy te quiero contar un poco al respecto. Las estructuras de control nos permiten determinar la forma como funciona nuestro código. Es importante tomar en cuenta este aspecto al desarrollar nuestros proyectos, porque son los pasos necesarios de nuestro algoritmo para completar la tarea que le designemos. Suena sencillo, ¿verdad?

Pues bien, quiero compartir contigo algunas de las estructuras de lenguajes de programación como Javascript o Python:

1. De secuencia o secuenciales: 

Es de las estructuras básicas y su nombre hace referencia a un paso a la vez, es decir, a una secuencia de pasos para completar una tarea. Cada instrucción previa da sentido a una instrucción siguiente. Es decir:

INICIO

PASO 1 
PASO 2
.
.
.
PASO X

FIN

2. De condición o condicionales:

Estas estructuras nos permiten tomar decisiones con base en la evaluación de condiciones(booleanos) entre un paso y otro. Debes tener en cuenta que cada condición a evaluar determinará una serie de intrucciones adicionales a desarrollar para completar nuestra tarea. Te comparto un ejemplo:

INICIO

PASO 1 (EVALUACIÓN DE LA CONDICIÓN)

    Si PASO 1 === EVALUACIÓN:

        INSTRUCCIÓN 1.1
        INSTRUCCIÓN 1.2
        INSTRUCCIÓN 1.3

        FIN DE LA EVAUACIÓN
    
    Si NO 

        FIN DE LA EVALUACIÓN  

FIN

3. De iteración o iterativas:

En algunas ocaciones necesitaremos repetir una misma tarea. Si bien podríamos realizar cada repetición manualmente, queremos ahorrar tiempo en la ejecución y es acá cuando usamos los iteradores. Para que tengas una idea, la esquematización de un iterador es la siguiente:

Mientras <Condición> desde <ValorInicial> hasta <ValorFinal> hacer:
    
    INSTRUCCIÓN A REPETIR

FIN

Para este código delimitamos el valor inicial de la acción (opcional) y el valor final de la acción; debemos especificar con claridad las instrucciones a realizar.

4. De control de salida:

Finalmente, en ciertas ocaciones y bajo condiciones determinadas, necesitaremos que nuestro código se detenga en medio de una instrucción o retorne un valor luego de realizar una instrucción. Las estructuras de control de salida (break,continue,return, entre otras) nos permiten alcanzar este objetivo. Para que te hagas una idea, te comparto esta estructura de código:

Función(<elementosDeEntrada> ){

    ACCIÓN A EJECUTAR CON <elementosDeEntrada>
    
    RETURN Resultado De ACCIÓN
}

Hemos aprendido nuevas cosas hoy. Por último y para traer una aplicación de lo aprendido, te comparto un ejemplo en código de Javascript para cada estructura:

1. De secuencia o secuenciales: 

let numeroA = 1
let numeroB = 2

let suma = (numeroA + numeroB)

2. De condición o condicionales:

let Num = 10

if (Num % 2 === 0){
    ("El número es par")
} else {
    ("El número es impar")
}

3. De iteración o iterativas:

let elementos = ["Elemento1","Elemento2","Elemento3","Elemento4","Elemento5"]

for (const elemento of elementos){

    (elemento === "Elemento3")
}

4. De control de salida:

function todoEnMayuscula (palabra) {
    
    let newWord = palabra.toUpperCase()
    
    return newWord

}

todoEnMayuscula("palabra")

Espero hayas aprendido un poco más sobre las estructuras de control. Te invito a continuar estudiando el maravilloso e intrigante mundo de la programación.