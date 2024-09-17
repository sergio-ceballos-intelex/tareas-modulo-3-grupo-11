// Resolver los siguientes ejercicios:

// true || true || false && true || false && true && true || false
// true && (false || false && (true && (true || false && true))) || false && (true || false)
// !(!true && (false || false && !!!true || (true && !false))) || false && true

// Nota: Cada ejercicio se debe resolver paso a paso y dejarlo por escrito hasta dar con el resultado final, tal cual lo vimos en clase.

// Ejercicio 1 -> true || true || false && true || false && true && true || false

false && true == false;
false && true && true == false;

true || true || false || false

true || true == true;
true || false == true;
true || false == true;

true;

// Ejercicio 2 -> true && (false || false && (true && (true || false && true))) || false && (true || false)

true && (false || false) || false && (true || false)

false || false == false;

true && false || false && (true || false)

true && false == false

false || false && (true || false)

true || false == true

false || false && true

false && true == false

false || false

false || false == false

false

// Ejercicio 3 -> !(!true && (false || false && !!!true || (true && !false))) || false && true

!(!true && (false || false && false || (true && !false))) || false && true

!true == false

!(false && (false || false && false || (true && !false))) || false && true

!false == true
true && true == true

!(false && (false || false && false || true)) || false && true

false && false == false
false || false == false
false || true == true

!(false && true) || false && true

!false || false

true || false

true || false == true

true

// Resumen de resultados 
// 1. true
// 2. false
// 3. true