let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 15 },
    { nombre: "Zapatos", precio: 50 },
  ];
  
  let productoMasBarato = productos[0]; // Inicializamos con el primer producto
  
  // Usamos un bucle for para recorrer el array de productos
  for (let i = 1; i < productos.length; i++) {
      if (productos[i].precio < productoMasBarato.precio) {
          productoMasBarato = productos[i]; // Actualizamos el producto más barato
      }
  }
  
  // Imprimimos el nombre y el precio del producto más barato
  console.log(`Producto más barato: ${productoMasBarato.nombre}, Precio: $${productoMasBarato.precio}`);
  