//Punto 1: Estadísticas de Productos
//1.Filtrar productos en stock:

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const productosEnStock = productos.filter(producto => producto.stock > 0);
console.log(productosEnStock);
// [{nombre: "Camiseta", ...}, {nombre: "Pantalón", ...}, {nombre: "Bufanda", ...}]

//2.Obtener nombres de productos:
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);
// ["Camiseta", "Pantalón", "Zapatos", "Bufanda"]

//3.Calcular el precio total de productos disponibles:
const precioTotal = productosEnStock.reduce((total, producto) => total + producto.precio, 0);
console.log(precioTotal);
// 65 (20 + 30 + 15)

//Punto 2: Acceso y Modificación Básica de Datos
//1.Array de estudiantes:

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// Imprimir nombre del segundo estudiante
console.log(estudiantes[1].nombre); // Juan

// Actualizar la edad del primer estudiante a 25
estudiantes[0].edad = 25;

// Imprimir información completa del primer estudiante
console.log(estudiantes[0]); 
// { nombre: "Camilo", edad: 25, promedio: 10 }

//Punto 3: Cálculo de Estadísticas Básicas
//1.Suma de edades:

let sumaEdades = 0;
estudiantes.forEach(estudiante => sumaEdades += estudiante.edad);
console.log(sumaEdades); // 84 (25 + 30 + 29)

//2.Promedio de edad:
const promedioEdad = sumaEdades / estudiantes.length;
console.log(promedioEdad); // 28

//Punto 4: Búsqueda y Filtrado de Datos
//1.Estudiante con el promedio más alto:
const estudianteTop = estudiantes.reduce((max, estudiante) => 
    estudiante.promedio > max.promedio ? estudiante : max, estudiantes[0]);

console.log(`El estudiante con mejor promedio es ${estudianteTop.nombre} y tiene ${estudianteTop.edad} años.`);
// El estudiante con mejor promedio es Camilo y tiene 25 años.

//2.Filtrar estudiantes mayores de 20 años:
const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);
console.log(estudiantesMayores);
// [{nombre: "Camilo", ...}, {nombre: "Juan", ...}, {nombre: "Andres", ...}]

//3.Imprimir estudiantes mayores de 20 años:
estudiantesMayores.forEach(estudiante => console.log(estudiante));
// Imprime todos los estudiantes mayores de 20 años con su información completa

//Aplicación con el último array de estudiantes:
//1.Estudiante con el mejor promedio:
const estudianteConMejorPromedio = estudiantes.reduce((max, estudiante) => 
    estudiante.promedio > max.promedio ? estudiante : max, estudiantes[0]);

console.log(`${estudianteConMejorPromedio.nombre}, con ${estudianteConMejorPromedio.edad} años, tiene el mejor promedio de ${estudianteConMejorPromedio.promedio}.`);
// Sofía, con 22 años, tiene el mejor promedio de 95.

//2.Filtrar estudiantes mayores de 20 años:
const estudiantesMayores2 = estudiantes.filter(estudiante => estudiante.edad > 20);
console.log(estudiantesMayores2);

//3.Imprimir información completa de los estudiantes mayores de 20 años:
estudiantesMayores.forEach(estudiante => console.log(estudiante));
