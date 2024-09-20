//Punto 2: Acceso y Modificación Básica de Datos: Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes. 
//Ejemplo

  //const estudiantes = [
      //{ nombre: "Camilo", edad: 33, promedio: 10 },
      //{ nombre: "Juan", edad: 30, promedio: 6 },
      //{ nombre: "Andres", edad: 29, promedio: 8.7 },
 //];
////Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
//Imprime en la consola el nombre del segundo estudiante.
//Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información 
//completa del primer estudiante después de la actualización.
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// 2.A :Imprime el nombre del segundo estudiante
console.log(estudiantes[1].nombre); // [0]Camilo//[1]Juan

//2.B : Actualiza la edad del primer estudiante a 25 años
estudiantes[0].edad = 25;

//2.C : Imprime la información completa del primer estudiante después de la actualización
console.log(estudiantes[0]); // Si dejo empty el console.log(estudiantes) = Muestra todo el Array del enunciado.

// TIene que mostrar nombre: Camilo  edad: 25 promedio: 10 