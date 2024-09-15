// Tarea 7: Manipulación Básica de Arrays y Objetos orientado a ES6
// Punto 1: Obteniendo estadisticas de productos:** Dado el siguiente array de productos

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

// 1.1 Utilizando filter, genera un nuevo array que contenga los productos en stock
productosDisponibles = productos.filter(producto => producto.stock > 0);
console.log('1.1. Los productos en Stock son: ',productosDisponibles);

// 1.2. Utilizando map, genera un nuevo array con solo los nombres de los productos
articulosArray = productos.map(producto => producto.nombre);
console.log('1.2. Los articulos existentes son: ', articulosArray);

// 1.3 Precio total de los productos disponibles
let precioTotal = 0;
productos.forEach(producto=> precioTotal += producto.precio);
console.log(`1.3. El precio total de los productos es: ${precioTotal}`);


// Punto 2: Acceso y Modificación Básica de Datos
// 2.1 Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// 2.2 Imprime en la consola el nombre del segundo estudiante.
console.log(`2.2. El segundo estudiante se llama: ${estudiantes[1].nombre}`);

// 2.3 Actualiza la edad del primer estudiante a 25 años.
estudiantes[0].edad = 25;

// 2.4  Imprime en la consola la información completa del primer estudiante después de la actualización.
console.log(`2.3 y 2.4 Los datos del primer estudiante son: Nombre ${estudiantes[0].nombre}, Edad: ${estudiantes[0].edad} y el Promedio: ${estudiantes[0].promedio}`);

// Punto 3: Cálculo de Estadísticas Básicas:
// 3.1 Calcula el promedio de edad de los estudiantes.
let sumaEdades = 0;
estudiantes.forEach(estudiante => sumaEdades += estudiante.edad);
console.log(`3.1 El promedio de edad de los estudiantes es: ${sumaEdades/estudiantes.length}`);

// 3.2 Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
console.log(`3.2. La suma de la edad de los estudiantes es: ${sumaEdades} y el promedio de edades es: ${sumaEdades/estudiantes.length}`);


// Punto 4: Búsqueda y Filtrado de Datos

const estudiantes2 = [
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

//   const primerPromedio = estudiantes2[0].promedio;
//   const estudianteMayorPromedio = estudiantes2.filter(estudiante => estudiante.promedio > primerPromedio);
//   console.log(estudianteMayorPromedio);


// 4.1. Utiliza filter para encontrar al estudiante con el promedio más alto en el array.
// 4.2. Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
let promedioMasAlto = estudiantes2[0].promedio;

estudiantes2.forEach(estudiante => {
    if (estudiante.promedio > promedioMasAlto){
        promedioMasAlto = estudiante.promedio;
    }
});

const estudiantePromedioMasAlto = estudiantes2.filter(estudiante => estudiante.promedio === promedioMasAlto);
console.log('4.1. y 4.2. ',estudiantePromedioMasAlto[0].nombre, ' es el(la) estudiante con el promedio mas alto, su edad es: ',estudiantePromedioMasAlto[0].edad);

// 4.3. Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
const estudianteMayoresDe20 = estudiantes2.filter(estudiante => estudiante.edad > 20);

// 4.4. Imprime en la consola la información completa de los estudiantes mayores de 20 años.
console.log('4.3. y 4.4. Los estudiantes mayores de 20, son: ', estudianteMayoresDe20);