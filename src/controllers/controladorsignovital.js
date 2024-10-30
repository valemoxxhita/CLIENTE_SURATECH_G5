let nombreSignovital=document.getElementById("nombresignovital")
let valorSignovital=document.getElementById("valorsignovital")
let fechaMedidaSignovital=document.getElementById("fechamedidasignovital")

let botonRegistroSignoVital = document.getElementById("buttonregistrosignovital")

    botonRegistroSignoVital.addEventListener("click",function(evento){
    evento.preventDefault()
    let datosFormularioSignoVital={
        nombre:nombresignovital.value,
        valor:valorsignovital.value,
        fechaMedida:fechamedidasignovital.value
    }
    console.log(datosFormularioSignoVital)

    Swal.fire({
        title: "¡Registro Exitoso!",
        text: "Los datos han sido registrados correctamente.",
        icon: "success"
      });
})

