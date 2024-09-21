let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 }
  ];
  
  for (let i = 0; i < estudiantes.length; i++) {
      estudiantes[i].edad += 1;
  }
  
  console.log(estudiantes);
  // [{ nombre: "Juan", edad: 21 }, { nombre: "María", edad: 23 }, { nombre: "Pedro", edad: 20 }]
  