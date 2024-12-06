import {registrarInformacion} from "../../services/serviciosMain.js"

let d = document;
let botonMain = d.querySelector(".botonIndex");
let nombre = d.querySelector(".nombre");
let cedula = d.querySelector(".cedula");
let edad = d.querySelector(".edad");
let ips = d.querySelector(".ips");
let rh = d.querySelector(".rh");
let email = d.querySelector(".email");
let peso = d.querySelector(".peso");
let estatura = d.querySelector(".estatura");
let telefono = d.querySelector(".telefono");
let estadoCivil = d.querySelector(".estadoCivil");
let direccion = d.querySelector(".direccion");
let residencia = d.querySelector(".residencia");

botonMain.addEventListener("click",function(evento){
    evento.preventDefault()

    let datosFormularioRegistro ={
        nombre:nombre.value,
        cedula: cedula.value,
        edad:edad.value,
        ips:ips.value,
        rh:rh.value,
        email:email.value,
        peso:peso.value,
        estatura:estatura.value,
        telefono:telefono.value,
        estadoCivil:estadoCivil.value,
        direccion:direccion.value,
        residencia:residencia.value
    }
    registrarInformacion(datosFormularioRegistro)
    .then(function(respuestaBackEnd){
    console.log(datosFormularioRegistro)
    Swal.fire({
        title: "Bienvenido!",
        text: "Ya eres parte de SuraTech",
        icon: "success"
    }).then(() => {
        window.location.href = "../index.html";
    });
});
});

