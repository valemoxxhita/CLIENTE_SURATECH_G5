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
    let datosFormularioMedico ={
        nombre:nombremedico.value,
        matriculaProfesional:matriculamedico.value,
        especialidad:especialidadmedico.value,
        salario:salariomedico.value,
        ips:ipsmedico.value,
        correo:correomedico.value,
        telefono:telefonomedico,
        direccionConsultorio:direccionmedico.value,
        finDeSemanaDisponible:disponibilidadmedico.value
    }
    console.log(datosFormularioMedico)

    Swal.fire({
        title: "¡Registro Exitoso!",
        text: "Los datos han sido registrados correctamente.",
        icon: "success"
      });
})
