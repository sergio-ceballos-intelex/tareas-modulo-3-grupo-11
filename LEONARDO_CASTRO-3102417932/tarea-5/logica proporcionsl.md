# LOGICA PROPORCIONAL

## ejerccio 1

console.log(true || true || false && true || false && true && true || false);
// Resultado: true

## Paso 1 Evaluamos los operadores && primero

false && true es false
false && true && true es false;

## Paso 2 Reemplazamos en la expresión

true || true || false || false || false

### Paso 3: Evaluamos los operadores || de izquierda a derecha

true || true es true
true || false es true
true || false es true

## Resultado final

true

## ejercicio 2

console.log(true && (false || false && (true && (true || false && true))) || false && (true || false));
// Resultado: false

## Paso 1: Evaluamos los paréntesis más internos

true || false es true
false && true es false
true && false es false

## Paso 2: Reemplazamos en la expresión

true && (false || false && false) || false && (true || false)

## Paso 3: Evaluamos los operadores && y || restantes

false || false es false
true && false es false
false || false es false

## ResultadO final

false

## ejercicio 3

console.log(!(!true && (false || false && !!!true || (true && !false))) || false && true);
// Resultado: true

## Paso 1: Simplificamos las negaciones

!true es false
!!!true es !false, que es true

## Paso 2: Reemplazamos las simplificaciones en la expresión

!(false && (false || false && true || (true && true))) || false && true

## Paso 3: Evaluamos los operadores dentro de los paréntesis

false || false es false
false && true es false
true && true es true
false || true es true
false && true es false

## Paso 4: Reemplazamos y evaluamos la negación y el resto de operadores

(false && true) || false es true || false
Resultado final
true