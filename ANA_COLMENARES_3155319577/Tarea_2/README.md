                ¿Qué son las estructuras de control en programación?

Las estructuras de control en programación son herramientas que permiten controlar el flujo de ejecución del código. Es decir, te ayudan a decidir qué instrucciones se deben ejecutar y en qué orden. 

Como su nombre lo indica, son estructuras que controlan las secuencias lógicas de un algoritmo para cumplir con cierta condición, evaluar un error o repetir varios procesos.

                ¿Cuales son las estructuras de control que se pueden usar en javascript?

En Javascript,existen dos tipos de estructuras de control: condicionales y ciclos.

CONDICIONALES:
Los condicionales evalúan si una expresión se cumple o no, dependiendo de esto, realiza una determinada sentencia en el algoritmo.

Existen tres tipos de condicionales:

if / else: evalúa si la expresión es verdadera o falsa.

                if (condition) {
                // Código a ejecutar si condition es verdadera
                }
                else: // Código a ejecutar si condition es falsa

switch: evalúa si la expresión es igual a diferentes casos.

                switch (expression) {
                case value1:
                    // Código a ejecutar si expression === value1
                    break;
                case value2:
                    // Código a ejecutar si expression === value2
                    break;
                default:
                    // Código a ejecutar si no hay coincidencia
                }

CICLOS:
Los ciclos o bucles evalúan si una expresión cumple o no y repite una serie de sentencias que conforman el algoritmo.

Existen tres tipos de ciclos:

for: repite una serie de sentencias con un límite conocido.

                for (let i = 0; i < 10; i++) {
                // Código a ejecutar en cada iteración
                }

while: repite una serie de sentencias con un límite desconocido.

                while (condition) {
                // Código a ejecutar mientras condition sea verdadera
                }

do-while: ejecuta una primera sentencia y después repite una serie de sentencias con un límite desconocido.

                do {
                // Código a ejecutar al menos una vez y luego mientras condition sea verdadera
                } while (condition);