//Punto 1: Obteniendo estadisticas de productos: Dado el siguiente array de productos.

    //const productos = [
        //{ nombre: "Camiseta", precio: 20, stock: 10 },
        //{ nombre: "Pantalón", precio: 30, stock: 5 },
        //{ nombre: "Zapatos", precio: 50, stock: 0 },
        //{ nombre: "Bufanda", precio: 15, stock: 8 },
   //];
//Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).
//Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
//(Opcional) Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];
//Utilizando filter, genera un nuevo array que contenga los productos en stock 
//(todos los productos cuyo stock es mayor a cero).

const productosDisponibles = productos.filter(producto => producto.stock > 0);
console.log(productosDisponibles);

//Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
const soloNombres = productos.map(producto => producto.nombre);
console.log(soloNombres);

//(Opcional) Escribe un programa que calcule el precio total de los productos disponibles,
// para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos.
let precioTotal = 0;

productosDisponibles.forEach(producto => {
    precioTotal += producto.precio; // a esto le faltaba el igual por eso console.log()
});

console.log(precioTotal);  // ahora si da 65