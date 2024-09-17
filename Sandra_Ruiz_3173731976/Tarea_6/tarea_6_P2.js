let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalon", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];
  
  let productoMasBarato = productos[0];
  
  for (let i = 1; i < productos.length; i++) {
    if (productos[i].precio < productoMasBarato.precio) {
      productoMasBarato = productos[i];
    }
  }
  
  console.log(`El producto más barato es ${productoMasBarato.nombre} y su precio es ${productoMasBarato.precio}`);