const isLogged = true;

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
];

function obtenerSelecciones() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLogged) {
        resolve(selecciones);
      } else {
        reject("No estas logueado dentro de la app");
      }
    }, 2000);
  });
}

function obtenerJugadoresPorSeleccion(codigoPais) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const jugadoresSeleccion = jugadores.filter(jugador => jugador.codigoPais === codigoPais);
      resolve(jugadoresSeleccion);
    }, 5000);
  });
}

obtenerSelecciones()
  .then(selecciones => {
    console.log("Selecciones obtenidas:", selecciones);
    
    const promesasJugadores = selecciones.map(seleccion => 
      obtenerJugadoresPorSeleccion(seleccion.codigoPais)
    );
    
    return Promise.all(promesasJugadores);
  })
  .then(resultadosJugadores => {
    console.log("Jugadores por selección:");
    resultadosJugadores.forEach((jugadores, index) => {
      console.log(`${selecciones[index].nombre}:`, jugadores);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });