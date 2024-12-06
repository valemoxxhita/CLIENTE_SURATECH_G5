import {registrarMedicamento} from "../../services/serviciosMedicamento.js"

let nombreMedicamento=document.getElementById("nombremedicamento")
let presentacionMedicamento=document.getElementById("presentacionmedicamento")
let dosisMedicamento=document.getElementById("dosismedicamento")
let laboratorioMedicamento=document.getElementById("laboratoriomedicamento")
let fechaCaducidadMedicamento=document.getElementById("caducidadmedicamento")
let contraIndicacionesMedicamento=document.getElementById("indicacionesmedicamento")
let registroMedicamento=document.getElementById("registromedicamento")
let tieneCopagoMedicamento=document.getElementById("copagomedicamento")


//3. Crear una variable para asociarla al id del bton que tengo en html
let botonRegistromedicamento = document.getElementById("buttonregistromedicamento")

//4. Detectamos acciones o eventos en el boton
botonRegistromedicamento.addEventListener("click",function(evento){
    evento.preventDefault()
    // 5. Se crea un JSON que captura los datos del formulario

    let datosFormularioMedicamento ={
        nombre:nombreMedicamento.value,
        presentacion:presentacionMedicamento.value,
        dosis:dosisMedicamento.value,
        laboratorio:laboratorioMedicamento.value,
        fechaCaducidad:fechaCaducidadMedicamento.value,
        contraIndicaciones:contraIndicacionesMedicamento.value,
        registroInvima:registroMedicamento.value,
        copago:true
    }

    //6. Se envían los datos al back

    console.log(datosFormularioMedicamento)
    registrarMedicamento(datosFormularioMedicamento)
    .then(function(respuestaBackEnd){
    Swal.fire({
            title: "¡Registro Exitoso!",
            text: "Los datos han sido registrados correctamente.",
            icon: "success"
        }).then(() => {
            window.location.href = "../views/dashboards/dashboardMedicamento.html";
        });
    });
});