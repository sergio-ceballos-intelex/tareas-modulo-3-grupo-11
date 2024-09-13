// Punto 1: Obteniendo estadisticas de productos
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos",  precio: 50, stock: 0 },
    { nombre: "Bufanda",  precio: 15, stock: 8 },
];

// Utilizando filter, genera un nuevo array que contenga los productos en stock
const productosEnStock = productos.filter(producto => producto.stock > 0);
console.log(productosEnStock)

// Utilizando map, genera un nuevo array con solo los nombres de los productos
const arrayNombres = productos.map((producto) => producto.nombre);
console.log(arrayNombres)

// (Opcional) Escribe un programa que calcule el precio total de los productos disponibles
let precioTotal = 0;
productos.forEach(item => {
    precioTotal = precioTotal + (item.precio * item.stock)
})
console.log(`El precio total de los productos en existencia es: ${precioTotal}`);

// Punto 2: Acceso y Modificación Básica de Datos
const estudiantes1 = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan",   edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// Imprime en la consola el nombre del segundo estudiante
const nombreSegundoEstudiante = estudiantes1[1].nombre
console.log(`El nombre del segundo estudiante es: ${nombreSegundoEstudiante}`)

// Actualiza la edad del primer estudiante a 25 años
estudiantes1[0].edad = 25

// Imprime en la consola la información completa del primer estudiante después de la actualización
let primerEstudiante = estudiantes1[0]
console.log(primerEstudiante)

// Punto 3: Cálculo de Estadísticas Básicas
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

//   Calcula la suma de las edades de todos los estudiantes en el array
let sumaEdades = 0;
estudiantes.forEach(item => {
    sumaEdades = sumaEdades + (item.edad)
})

// Calcula el promedio de edad de los estudiantes
let promedioEdades = sumaEdades / estudiantes.length

// Imprime en la consola tanto la suma como el promedio de edad de los estudiantes
console.log(`La suma de las edades de los estudiantes es: ${sumaEdades} años`)
console.log(`El promedio de edad de los estudiantes es: ${promedioEdades.toFixed(2)} años`)

// Punto 4: Búsqueda y Filtrado de Datos
let promedioMayor = estudiantes[0].promedio
let nombrePromedioMayor
let edadPromedioMayor

// Utiliza filter para encontrar al estudiante con el promedio más alto en el array
const promedio = estudiantes.filter(estudiante => {
    if (promedioMayor <= estudiante.promedio){
        promedioMayor = estudiante.promedio
        nombrePromedioMayor = estudiante.nombre
        edadPromedioMayor = estudiante.edad
    }    
});

// Imprime en la consola el nombre y la edad del estudiante con el promedio más alto
console.log(`El nombre del estudiante con mayor promedio es: ${nombrePromedioMayor}`)
console.log(`La edad del estudiante con mayor promedio es: ${edadPromedioMayor} años`)

// Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores
const estudiantesMayores = [];
estudiantes.filter(estudiante => {
    if (estudiante.edad > 20){
        estudiantesMayores.push(estudiante.nombre)        
    }
});
console.log(estudiantesMayores)

// Imprime en la consola la información completa de los estudiantes mayores de 20 años
const estudiantesMayoresDe20 = estudiantes.filter(estudiante => estudiante.edad > 20)
console.log(estudiantesMayoresDe20)