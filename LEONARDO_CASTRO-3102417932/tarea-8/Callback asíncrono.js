  // Estoy en Bogota
  // Vuelo Bogota - Madrid, me demoré 7 horas
  // Llegué a Madrid
  // Vuelo Madrid - Frankfurt, me demoré 2 horas
  // Llegué a Frankfurt
  // Vuelo Frankfurt - Seul, me demoré 10 horas
  // Llegué a Seul

  function simularVuelo(origen, destino, duracion, callback) {
    console.log(`Estoy en ${origen}`);
    setTimeout(() => {
      console.log(`Vuelo ${origen} - ${destino}, me demoré ${duracion / 1000} horas`);
      console.log(`Llegué a ${destino}`);
      callback();
    }, duracion);
  }
  
  function iniciarViaje() {
    simularVuelo("Bogota", "Madrid", 7000, () => {
      simularVuelo("Madrid", "Frankfurt", 2000, () => {
        simularVuelo("Frankfurt", "Seul", 10000, () => {
          console.log("Viaje completado");
        });
      });
    });
  }
  
  iniciarViaje();