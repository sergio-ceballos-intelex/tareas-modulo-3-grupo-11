// Ejercicio 1
console.log((true || true || false && true || false && true && true || false));

// Desarrollo paso a paso
// true || true || false && true || false && true && true || false
// true || true || false || false && true && true || false
// true || true || false || false || false
// true

// Resultado: true


// Ejercicio 2
console.log((true && (false || false && (true && (true || false && true))) || false && (true || false)));

// Desarrollo paso a paso
// true && (false || false && (true && (true || false && true))) || false && (true || false)
// true && (false || false && (true && (true || false))) || false && (true || false)
// true && (false || false && (true && true)) || false && (true || false)
// true && (false || false && true) || false && (true || false)
// true && (false || false) || false && (true || false)
// true && false || false && (true || false)
// true && false || false && true
// false || false && true
// false || false
// false

// Resultado: false


// Ejercicio 3
console.log((!(!true && (false || false && !!!true || (true && !false))) || false && true));

// Desarrollo paso a paso
// !(!true && (false || false && !!!true || (true && !false))) || false && true
// !(!true && (false || false && !!!true || true)) || false && true
// !(!true && (false || false || true)) || false && true
// !(!true && true) || false && true
// !(false) || false && true
// true || false && true
// true || false
// true

// Resultado: true
