# Estructuras de Control en Programación

Las estructuras de control son fundamentales en la programación, ya que permiten a los programadores dirigir el flujo de ejecución de un programa. En esencia, determinan cómo se toman decisiones, se repiten operaciones y se organizan las secuencias de instrucciones. Sin las estructuras de control, los programas serían simples secuencias lineales de instrucciones, sin posibilidad de tomar decisiones ni repetir tareas.

## Tipos de Estructuras de Control en Programación

### 1. **Estructuras de Decisión**

Estas estructuras permiten que el programa tome decisiones basadas en ciertas condiciones. En JavaScript, las principales estructuras de decisión son:

- **`if`**: Evalúa una condición y ejecuta un bloque de código si la condición es verdadera.
  ```javascript
  if (condition) {
      // Código a ejecutar si la condición es verdadera
  }
if (condition) {
    // Código a ejecutar si la condición es verdadera
} else {
    // Código a ejecutar si la condición es falsa
}
if (condition1) {
    // Código a ejecutar si condition1 es verdadera
} else if (condition2) {
    // Código a ejecutar si condition2 es verdadera
} else {
    // Código a ejecutar si ninguna de las condiciones anteriores es verdadera
}
switch (expression) {
    case value1:
        // Código a ejecutar si expression es igual a value1
        break;
    case value2:
        // Código a ejecutar si expression es igual a value2
        break;
    default:
        // Código a ejecutar si expression no coincide con ningún case
}
### 2. **Estructuras de Repetición**
Estas estructuras permiten repetir un bloque de código múltiples veces. En JavaScript, se utilizan principalmente:

for (let i = 0; i < 10; i++) {
    // Código a ejecutar en cada iteración
}

while (condition) {
    // Código a ejecutar mientras la condición sea verdadera
}

do {
    // Código a ejecutar al menos una vez y luego mientras la condición sea verdadera
} while (condition);

### 3. **Estructuras de Control de Flujo**
Estas estructuras permiten alterar el flujo de ejecución de un programa dentro de las estructuras de repetición y decisión. En JavaScript, se incluyen:

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sale del bucle cuando i es igual a 5
    }
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Omite el resto del código para números pares
    }
    // Código a ejecutar solo para números impares
}

## Conclusión
Las estructuras de control son esenciales para desarrollar programas complejos y dinámicos. En JavaScript, estas estructuras permiten tomar decisiones, repetir acciones y gestionar el flujo de ejecución de manera flexible y eficiente. Con el uso adecuado de estas estructuras, puedes crear programas que respondan a diferentes condiciones y realicen tareas repetitivas de manera efectiva.

* Este `README.md` proporciona una visión general clara y concisa de las estructuras de control en programación y su implementación en JavaScript. 

Melissa Gómez H.