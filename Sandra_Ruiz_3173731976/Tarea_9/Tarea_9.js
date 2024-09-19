const isLogged = true; // Aqui comiencia enunciado

const selecciones = [
  {
    id: 1,
    nombre: 'Colombia',
    codigoPais: 'COL'
  },
  {
    id: 2,
    nombre: 'Argentina',
    codigoPais: 'ARG'
  },
  {
    id: 3,
    nombre: 'Uruguay',
    codigoPais: 'URU'
  },
  {
    id: 4,
    nombre: 'Brasil',
    codigoPais: 'BRA'
  },
];

const jugadores = [
  {
    id: 10,
    nombre: 'James',
    apellido: 'Rodriguez',
    codigoPais: 'COL'
  },
  {
    id: 11,
    nombre: 'Luis',
    apellido: 'Díaz',
    codigoPais: 'COL'
  },
  {
    id: 12,
    nombre: 'Richard',
    apellido: 'Ríos',
    codigoPais: 'COL'
  },
  {
    id: 13,
    nombre: 'Lionel',
    apellido: 'Messi',
    codigoPais: 'ARG'
  },
  {
    id: 14,
    nombre: 'Lautaro',
    apellido: 'Martínez',
    codigoPais: 'ARG'
  },
  {
    id: 15,
    nombre: 'Federico',
    apellido: 'Valverde',
    codigoPais: 'URU'
  },
  {
    id: 16,
    nombre: 'Darwin',
    apellido: 'Nuñez',
    codigoPais: 'URU'
  },
  {
    id: 17,
    nombre: 'Vinicius',
    apellido: 'Jr',
    codigoPais: 'BRA'
  },
  {
    id: 18,
    nombre: 'Rodrygo',
    apellido: 'Goes',
    codigoPais: 'BRA'
  },
];  // aqui termina enunciado.

function obtenerSelecciones() { // lo da el ejercicio.
  return new Promise((resolve, reject) => { // o da el ejercicio.
    setTimeout(() => {  // aqui comienza mi codigo
      if (isLogged) {
        resolve(selecciones);
      } else {
        reject("No estás logueado dentro de la app");
      }
    }, 2000);
  }); // aqui termina mi codigo
}// lo da el enunciado.

function obtenerJugadoresPorSeleccion(codigoPais) { // lo da el enunciado.
  return new Promise((resolve) => { // lo da el enunciado.
    setTimeout(() => {  // aqui comienza mi codigo.
      const jugadoresSeleccion = jugadores.filter(jugador => jugador.codigoPais === codigoPais);
      resolve(jugadoresSeleccion);
    }, 5000);
  }); // Aqui termina mi codigo.
} // lo da el enunciado.

obtenerSelecciones()  // mi codigo
  .then(selecciones => {
    console.log("Selecciones obtenidas:", selecciones);
    const promesasJugadores = selecciones.map(seleccion => obtenerJugadoresPorSeleccion(seleccion.codigoPais));
    return Promise.all(promesasJugadores);
  })
  .then(jugadoresPorSeleccion => {
    console.log("Jugadores por selección:", jugadoresPorSeleccion);
  })
  .catch(error => {
    console.error(error);
  }); // termina mi codigo.