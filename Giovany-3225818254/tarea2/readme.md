```markdown
# Estructuras de Control en Programación

Las estructuras de control son bloques de código que permiten controlar el flujo de ejecución de un programa. 
Son fundamentales para tomar decisiones y repetir tareas, lo que hace que el código sea más dinámico y eficiente. En JavaScript, las principales estructuras de control son:

## 1. Estructuras de Decisión

Estas estructuras permiten ejecutar diferentes bloques de código según ciertas condiciones.

- **if**: Ejecuta un bloque de código si una condición es verdadera.
  ```javascript
  if (condicion) {
    // Código a ejecutar si la condición es verdadera
  }
  ```

- **if...else**: Ejecuta un bloque de código si una condición es verdadera y otro bloque si es falsa.
  ```javascript
  if (condicion) {
    // Código a ejecutar si la condición es verdadera
  } else {
    // Código a ejecutar si la condición es falsa
  }
  ```

- **switch**: Selecciona uno de varios bloques de código a ejecutar.
  ```javascript
  switch (expresion) {
    case valor1:
      // Código a ejecutar si la expresión es igual a valor1
      break;
    case valor2:
      // Código a ejecutar si la expresión es igual a valor2
      break;
    default:
      // Código a ejecutar si la expresión no coincide con ninguno de los valores anteriores
  }
  ```

## 2. Estructuras de Repetición (Bucles)

Estas estructuras permiten ejecutar un bloque de código varias veces.

- **for**: Repite un bloque de código un número específico de veces.
  ```javascript
  for (inicializacion; condicion; incremento) {
    // Código a ejecutar en cada iteración
  }
  ```

- **while**: Repite un bloque de código mientras una condición sea verdadera.
  ```javascript
  while (condicion) {
    // Código a ejecutar mientras la condición sea verdadera
  }
  ```

- **do...while**: Similar a `while`, pero garantiza que el bloque de código se ejecute al menos una vez.
  ```javascript
  do {
    // Código a ejecutar
  } while (condicion);
  ```

## 3. Estructuras de Salto

Permiten alterar el flujo de ejecución de manera más directa.

- **break**: Sale de un bucle o una estructura `switch`.
  ```javascript
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break; // Sale del bucle cuando i es igual a 5
    }
  }
  ```

- **continue**: Salta a la siguiente iteración de un bucle.
  ```javascript
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue; // Salta la iteración cuando i es igual a 5
    }
    // Código a ejecutar en cada iteración
  }
  ```

---

Estas estructuras de control son esenciales para crear programas más complejos y eficientes en JavaScript.