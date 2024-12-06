import {registrarMedico} from "../../services/serviciosMedico.js"

let nombreMedico=document.getElementById("nombremedico")
let matriculaProfesionalMedico=document.getElementById("matriculamedico")
let especialidadMedico=document.getElementById("especialidadmedico")
let salarioMedico=document.getElementById("salariomedico")
let ipsMedico=document.getElementById("ipsmedico")
let correoMedico=document.getElementById("correomedico")
let telefonoMedico=document.getElementById("telefonomedico")
let direccionMedico=document.getElementById("direccionmedico")
let disponibleFinDeSemanaMedico=document.getElementById("disponibilidadmedico")

let botonRegistromedico = document.getElementById("buttonregistromedico")

botonRegistromedico.addEventListener("click", function(evento){
    evento.preventDefault()
    //Primero, se escribe el nombre del dato cómo está en el back, luego el id del form
    let datosFormularioMedico ={
        nombre:nombreMedico.value,
        matriculaProfesional:matriculaProfesionalMedico.value,
        especialidad:especialidadMedico.value,
        salario:salarioMedico.value,
        ips:ipsMedico.value,
        correo:correoMedico.value,
        telefono:telefonoMedico.value,
        direccionConsultorio:direccionMedico.value,
        finDeSemanaDisponible:true
    }
    console.log(datosFormularioMedico)
    registrarMedico(datosFormularioMedico)
    .then(function(respuestaBackEnd){
    Swal.fire({
            title: "¡Registro Exitoso!",
            text: "Los datos han sido registrados correctamente.",
            icon: "success"
        }).then(() => {
            window.location.href = "../views/dashboards/dashboardMedico.html";
        });
    });
});