const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

// 1. Filtrar productos en stock
const productosEnStock = productos.filter(producto => producto.stock > 0);

// Imprimir productos en stock
console.log("Productos en stock:", productosEnStock);

// 2. Obtener solo los nombres de los productos
const nombresProductos = productos.map(producto => producto.nombre);

// Imprimir nombres de productos
console.log("Nombres de productos:", nombresProductos);

// 3. Calcular el precio total de los productos disponibles
const precioTotal = productos.reduce((total, producto) => {
    return total + (producto.stock > 0 ? producto.precio * producto.stock : 0);
}, 0);

// Imprimir precio total
console.log("Precio total de productos disponibles:", precioTotal);
