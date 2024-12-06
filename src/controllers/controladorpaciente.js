//OBJETIVO: Capturar los datos de un formulario 

//1. por cada input, select, textarea del formulario se crea una variable 
//2 por cada variable debo utilizar el DOM para asociar 
//el html con javascript 

import {registrarPaciente} from "../../services/serviciosPaciente.js"

let nombrePaciente=document.getElementById("nombrepaciente")
let correoPaciente=document.getElementById("correopaciente")
let telefonoPaciente=document.getElementById("telefonopaciente")
let fechaNacimientoPaciente=document.getElementById("nacimientopaciente")
let ciudadPaciente=document.getElementById("ciudadpaciente")
let polizaPaciente=document.getElementById("polizapaciente")
let ipsPaciente=document.getElementById("ipspaciente")
let grupoIngresoPaciente=document.getElementById("ingresospaciente")
let fechaAfiliacionPaciente=document.getElementById("afiliacionpaciente")

//3. Crear una variable para asociarla al id del bton que tengo en html
let botonRegistroPaciente = document.getElementById("buttonregistropaciente")

//4. Detectamos acciones o eventos en el boton
botonRegistroPaciente.addEventListener("click",function(evento){
    evento.preventDefault()
    // 5. Se crea un JSON que captura los datos del formulario

    let datosFormularioPaciente ={
        nombre:nombrePaciente.value,
        anioNacimiento:fechaNacimientoPaciente.value,
        ciudad:ciudadPaciente.value,
        correo:correoPaciente.value,
        telefono:telefonoPaciente.value,
        ips:ipsPaciente.value,
        poliza: true,
        grupoIngresos:grupoIngresoPaciente.value,
        fechaAfiliacion:fechaAfiliacionPaciente.value
    }

    //6. Se envían los datos al back

    console.log(datosFormularioPaciente)
    registrarPaciente(datosFormularioPaciente)
    .then(function(respuestaBackEnd){

    Swal.fire({
        title: "¡Registro Exitoso!",
        text: "Los datos han sido registrados correctamente.",
        icon: "success"
    }).then(() => {
        window.location.href = "../views/dashboards/dashboardPaciente.html";
    });
});
});