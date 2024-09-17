// Ejercicio de Modificación de Propiedades de Objetos en un Array:
//Dado el siguiente array de objetos que representan estudiantes:

//let estudiantes = [
 // { nombre: "Juan", edad: 20 },
 // { nombre: "María", edad: 22 },
  //{ nombre: "Pedro", edad: 19 },
//];
//Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.




let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
  
  for (let i = 0; i < estudiantes.length; i++) {
    estudiantes[i].edad += 1;
  }
  
  console.log(estudiantes);