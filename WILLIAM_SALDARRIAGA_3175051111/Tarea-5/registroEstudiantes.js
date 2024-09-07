const estudiante = {
    nombre: 'William',
    edad: 19,
    promedio: 6,
    esRegular: true,
    cantidadMateriasAprobadas: 10,
    esBecado: true,
    validadEstudiante:() =>{
        let mensaje = '';

        if (estudiante.edad < 18){
            return 'es menor de edad y no puede registrarse';
        } else if (estudiante.promedio < 6) {
            return 'no cumple con el promedio mínimo requerido';
        } else if (!estudiante.esRegular){
            return 'debe registrarse como regular';
        }else if (!estudiante.esBecado){
            return 'puede solicitar una beca';
        } else{
            return 'cumple con todos los requisitos';            
        }

    }
};

console.log(`El estudiante ${estudiante.nombre} ${estudiante.validadEstudiante()}`);