
const estudiante = {
    nombre : prompt("Escriba el nombre del estudiante:").toLowerCase(),
    edad : prompt("Escriba la edad del estudiante:"),
    promedio : prompt("Ingrese el promedio del estudiante:"),
    esRegular : prompt("¿El estudiante está registrado como regular?").toLowerCase(),
    cantidadMateriasAprobadas : prompt("¿Cuántas materias aprobadas tiene el estudiante?"),
    esBecado : prompt("¿El estudiante está registrado como becado?").toLowerCase(),
    validacion : function(){
        if (this.edad < 18){
            return "Eres menor de edad. No puedes registrarte."
        } else if ( this.promedio < 6){
            return "No cumples con el promedio mínimo requerido."
        } else if (this.esRegular === "no"){
            return "Debes registrate como regular."
        }else if ( this.esBecado === "no"){ 
            return "Puedes solicitar una beca."
        } else 
            return "Cumples con todos los requisitos."
    }
}

document.write(estudiante.validacion())