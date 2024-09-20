const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

// 1. Utilizando filter para obtener productos en stock
const productosEnStock = productos.filter(producto => producto.stock > 0);
console.log("Productos en stock:", productosEnStock);

// 2. Utilizando map para obtener solo los nombres de los productos
const nombresProductos = productos.map(producto => producto.nombre);
console.log("Nombres de los productos:", nombresProductos);

// 3. (Opcional) Calcular el precio total de los productos disponibles
const precioTotalDisponibles = productos
    .filter(producto => producto.stock > 0)
    .reduce((total, producto) => total + producto.precio * producto.stock, 0);
console.log("Precio total de productos disponibles:", precioTotalDisponibles);