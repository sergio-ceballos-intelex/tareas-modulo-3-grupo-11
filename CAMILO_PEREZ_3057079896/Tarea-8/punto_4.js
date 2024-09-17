
/*
    
Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur:

1. Vuelo Bogota - Madrid: 7000ms (7 horas)
2. Vuelo Madrid - Frankfurt: 2000ms (2 horas)
3. Vuelo Frankfurt - Seul: 10000ms (10 horas)
4. Llegada a Seul

El programa debe imprimir lo siguiente:

 Estoy en Bogota
 Vuelo Bogota - Madrid, me demoré 7 horas
 Llegué a Madrid
 Vuelo Madrid - Frankfurt, me demoré 2 horas
 Llegué a Frankfurt
 Vuelo Frankfurt - Seul, me demoré 10 horas
 Llegué a Seul

*/

const bogota_Madrid = (callback) => {
    console.log("Estoy en Bogotá.")
    setTimeout(() => {
        console.log('Vuelo Bogotá - Madrid, me demoré 7 horas.');
        console.log("Llegué a Madrid.");
        callback();
    }, 7000);
}

const madrid_Frankfurt = (callback) => {
    
    setTimeout(() => {

        console.log('Vuelo Madrid - Frankfurt, me demoré 2 horas.');
        console.log("Llegué a Frankfurt.")
        callback()

    }, 2000);
}


const frankfurt_Seul = (callback) => {
    
    setTimeout(() => {

        console.log('Vuelo Frankfurt - Seul, me demoré 10 horas.');
        callback()
    }, 10000);
}

const estoyEnSeul = () => {

    setTimeout(() => {

        console.log("Llegué a Seul.")

    },1000)
}

bogota_Madrid( () => {
    madrid_Frankfurt (() =>{
        frankfurt_Seul( () => {
            estoyEnSeul()
        })
    })
})


