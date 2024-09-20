// Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur

// Hacer un programa que simule un vuelo desde Colombia hasta Corea del Sur respetando el orden de los vuelos:

// Vuelo Bogota - Madrid: 7000ms (7 horas)
// Vuelo Madrid - Frankfurt: 2000ms (2 horas)
// Vuelo Frankfurt - Seul: 10000ms (10 horas)
// Llegada a Seul

// Función para simular un vuelo
function vuelo(origen, destino, tiempo, callback) {
    console.log(`Estoy en ${origen}`);
    console.log(`Vuelo ${origen} - ${destino}, me demoré ${tiempo / 1000} horas`);
    
    setTimeout(() => {
        console.log(`Llegué a ${destino}`);
        callback();
    }, tiempo);
}

// Función principal para simular el viaje completo
function simularVuelo() {
    vuelo("Bogotá", "Madrid", 7000, () => {
        vuelo("Madrid", "Frankfurt", 2000, () => {
            vuelo("Frankfurt", "Seúl", 10000, () => {
                console.log("Llegada a Seúl");
            });
        });
    });
}

// Iniciar la simulación del vuelo
simularVuelo();
