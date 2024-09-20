//Punto 4: Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al estudiante con el promedio más alto en el array.

//Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
//Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
//Imprime en la consola la información completa de los estudiantes mayores de 20 años.

const estudiantes = [
    {
      nombre: "Ana",
      edad: 20,
      promedio: 85,
      genero: "Femenino",
      carrera: "Ingeniería Civil",
      ciudad: "Bogotá",
    },
    {
      nombre: "Juan",
      edad: 22,
      promedio: 78,
      genero: "Masculino",
      carrera: "Medicina",
      ciudad: "Medellín",
    },
    {
      nombre: "María",
      edad: 21,
      promedio: 90,
      genero: "Femenino",
      carrera: "Administración de Empresas",
      ciudad: "Cali",
    },
    {
      nombre: "Pedro",
      edad: 23,
      promedio: 82,
      genero: "Masculino",
      carrera: "Derecho",
      ciudad: "Barranquilla",
    },
    {
      nombre: "Laura",
      edad: 24,
      promedio: 88,
      genero: "Femenino",
      carrera: "Arquitectura",
      ciudad: "Cartagena",
    },
    {
      nombre: "Carlos",
      edad: 20,
      promedio: 75,
      genero: "Masculino",
      carrera: "Ingeniería de Sistemas",
      ciudad: "Santa Marta",
    },
    {
      nombre: "Sofía",
      edad: 22,
      promedio: 95,
      genero: "Femenino",
      carrera: "Psicología",
      ciudad: "Pereira",
    },
  ];

 // Encontrar al estudiante con el promedio más alto
let estudianteConMejorPromedio = estudiantes[0];
for (let i = 0; i < estudiantes.length; i++) {    //estudiantes.length para que de la cantidad total de 
    //elementos en el array estudiantes y que recorra el array completo con el i++
   
  if (estudiantes[i].promedio > estudianteConMejorPromedio.promedio) {
    estudianteConMejorPromedio = estudiantes[i];
  }
}
console.log(`El estudiante con el mejor promedio es ${estudianteConMejorPromedio.nombre}, de ${estudianteConMejorPromedio.edad} años.`);

// Filtrar los estudiantes mayores de 20 años
const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);
console.log("Estudiantes mayores de 20 años:", estudiantesMayores);