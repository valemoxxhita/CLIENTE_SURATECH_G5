//OBJETIVO: Capturar los datos de un formulario 

//1. por cada input, select, textarea del formulario se crea una variable 
//2 por cada variable debo utilizar el DOM para asociar 
//el html con javascript 

let nombreEnfermedad=document.getElementById("nombreenfermedad")
let sintomasEnfermedad=document.getElementById("sintomasenfermedad")
let clasificacionEnfermedad=document.getElementById("clasificacionenfermedad")
let gradoEnfermedad=document.getElementById("gradoenfermedad")
let probabilidadDeVidaEnfermedad=document.getElementById("probabilidadvidaenfermedad")

//3. Crear una variable para asociarla al id del bton que tengo en html
let botonRegistroEnfermedad = document.getElementById("buttonregistroenfermedad")

//4. Detectamos acciones o eventos en el boton
botonRegistroEnfermedad.addEventListener("click",function(evento){
    evento.preventDefault()
    // 5. Se crea un JSON que captura los datos del formulario

    let datosFormularioEnfermedad ={
        nombre:nombreEnfermedad.value,
        sintomas:sintomasEnfermedad.value,
        clasificacion:clasificacionEnfermedad.value,
        grado:gradoEnfermedad.value,
        probabilidadVida: probabilidadDeVidaEnfermedad.value
    }

    //6. Se envían los datos al back

    console.log(datosFormularioEnfermedad)

    Swal.fire({
        title: "¡Registro Exitoso!",
        text: "Los datos han sido registrados correctamente.",
        icon: "success"
      });
})