let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "La princesa y El sapo", autor: "John Musker" },
  ];
  
  let librosConEl = []; // Array para almacenar los libros que contienen "El"
  
  // Usamos un bucle for para recorrer el array de libros
  for (let i = 0; i < libros.length; i++) {
      if (libros[i].titulo.includes("El")) { // Verificamos si el título contiene "El"
          librosConEl.push(libros[i]); // Agregamos el libro al nuevo array
      }
  }
  
  // Imprimimos los libros que contienen "El"
  console.log(librosConEl);
  