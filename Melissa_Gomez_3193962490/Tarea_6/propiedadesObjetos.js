let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
  
  // Usamos un bucle for para recorrer el array de estudiantes
  for (let i = 0; i < estudiantes.length; i++) {
      estudiantes[i].edad += 1; // Incrementamos la edad en 1 año
  }
  
  // Imprimimos el array modificado
  console.log(estudiantes);
  