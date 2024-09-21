const isLogged = true;

const selecciones = [
  { id: 1, nombre: 'Colombia', codigoPais: 'COL' },
  { id: 2, nombre: 'Argentina', codigoPais: 'ARG' },
  { id: 3, nombre: 'Uruguay', codigoPais: 'URU' },
  { id: 4, nombre: 'Brasil', codigoPais: 'BRA' },
];

const jugadores = [
  { id: 10, nombre: 'James', apellido: 'Rodriguez', codigoPais: 'COL' },
  { id: 11, nombre: 'Luis', apellido: 'Díaz', codigoPais: 'COL' },
  { id: 12, nombre: 'Richard', apellido: 'Ríos', codigoPais: 'COL' },
  { id: 13, nombre: 'Lionel', apellido: 'Messi', codigoPais: 'ARG' },
  { id: 14, nombre: 'Lautaro', apellido: 'Martínez', codigoPais: 'ARG' },
  { id: 15, nombre: 'Federico', apellido: 'Valverde', codigoPais: 'URU' },
  { id: 16, nombre: 'Darwin', apellido: 'Nuñez', codigoPais: 'URU' },
  { id: 17, nombre: 'Vinicius', apellido: 'Jr', codigoPais: 'BRA' },
  { id: 18, nombre: 'Rodrygo', apellido: 'Goes', codigoPais: 'BRA' },
];

// Función para obtener las selecciones
function obtenerSelecciones() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLogged) {
        resolve(selecciones);
      } else {
        reject("No estás logueado dentro de la app");
      }
    }, 2000); // Simula el delay de 2000 ms
  });
}

// Función para obtener jugadores por selección
function obtenerJugadoresPorSeleccion(codigoPais) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const jugadoresSeleccionados = jugadores.filter(jugador => jugador.codigoPais === codigoPais);
      resolve(jugadoresSeleccionados);
    }, 5000); // Simula el delay de 5000 ms
  });
}

// Llamada a la función obtenerSelecciones
obtenerSelecciones()
  .then(selecciones => {
    console.log("Selecciones obtenidas:", selecciones);

    // Crear una lista de promesas para obtener los jugadores de cada selección
    const promesasJugadores = selecciones.map(seleccion => obtenerJugadoresPorSeleccion(seleccion.codigoPais));

    // Usar Promise.all para esperar que todas las promesas se resuelvan
    return Promise.all(promesasJugadores);
  })
  .then(jugadoresPorSeleccion => {
    console.log("Jugadores por selección:", jugadoresPorSeleccion);
  })
  .catch(error => {
    console.log(error);
  });

//Explicación:
//1. obtenerSelecciones: Simula una petición con un delay de 2000 ms. Si isLogged es true, 
//la promesa se resuelve con las selecciones. Si no, la promesa es rechazada con un mensaje de error.

//2-obtenerJugadoresPorSeleccion: Filtra los jugadores por el código del país recibido como parámetro,
// simulando un delay de 5000 ms.

//3-obtenerJugadoresPorSeleccion: Filtra los jugadores por el código del país recibido como parámetro, 
//simulando un delay de 5000 ms.

//4-then y catch: Se manejan los resultados de las promesas con then para obtener los datos y catch para manejar errores.