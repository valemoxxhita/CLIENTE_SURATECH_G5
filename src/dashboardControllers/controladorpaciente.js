import {buscarPacientes} from "../../services/serviciosPaciente.js"

//1. Llamar al api
    buscarPacientes()
    .then(function(respuestaBackEnd){
    console.log(respuestaBackEnd)
    let fila = document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada
    respuestaBackEnd.forEach(function(paciente){
    console.log(paciente)
    //4. Se crean columnas
    let columna=document.createElement("div")
    columna.classList.add("col")
    //5. Se crean tarjetas
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow", "bordepersonalizado")
    //6. Se crean una etiqueta para poner el nombre del paciente
    let nombre = document.createElement("h2")
    nombre.textContent=paciente.nombre
    let anioNacimiento = document.createElement("p")
    anioNacimiento.textContent=paciente.anioNacimiento
    let ciudad = document.createElement("p")
    ciudad.textContent=paciente.ciudad
    let correo = document.createElement("p")
    correo.textContent=paciente.correo
    let telefono = document.createElement("p")
    telefono.textContent=paciente.telefono
    let ips = document.createElement("p")
    ips.textContent=paciente.ips
    let poliza = document.createElement("p")
    poliza.textContent=paciente.poliza
    let grupoIngresos = document.createElement("p")
    grupoIngresos.textContent=paciente.grupoIngresos
    let fechaAfiliacion = document.createElement("p")
    fechaAfiliacion.textContent=paciente.fechaAfiliacion
    //Paso final (Ordenar las cartas)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(anioNacimiento)
    tarjeta.appendChild(ciudad)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(ips)
    tarjeta.appendChild(poliza)
    tarjeta.appendChild(grupoIngresos)
    tarjeta.appendChild(fechaAfiliacion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

});
})