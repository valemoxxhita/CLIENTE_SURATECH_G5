import {registrarSignoVital} from "../../services/serviciosSignoVital.js"

let nombreSignovital=document.getElementById("nombresignovital")
let valorSignovital=document.getElementById("valorsignovital")
let fechaMedidaSignovital=document.getElementById("fechamedidasignovital")

let botonRegistroSignoVital = document.getElementById("buttonregistrosignovital")

    botonRegistroSignoVital.addEventListener("click", function(evento){
    evento.preventDefault()
    let datosFormularioSignoVital={
        nombre:nombreSignovital.value,
        valor:valorSignovital.value,
        fechaMedida:fechaMedidaSignovital.value
    }
    console.log(datosFormularioSignoVital)

    registrarSignoVital(datosFormularioSignoVital)
    .then(function(respuestaBackEnd){
    Swal.fire({
        title: "¡Registro Exitoso!",
        text: "Los datos han sido registrados correctamente.",
        icon: "success"
    }).then(() => {
        window.location.href = "../views/dashboards/dashboardSignoVital.html";
    });
});
});

    

