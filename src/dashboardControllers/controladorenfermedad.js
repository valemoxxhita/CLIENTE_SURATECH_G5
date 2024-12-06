import {buscarEnfermedades} from "../../services/serviciosEnfermedad.js"

let modal = document.querySelector(".modal-body");
    buscarEnfermedades()
    .then(function(respuestaBackEnd){
    console.log(respuestaBackEnd)
    let fila = document.getElementById("fila")
    respuestaBackEnd.forEach(function(enfermedad){
    console.log(enfermedad)
    let columna=document.createElement("div")
    columna.classList.add("col")
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","rounded", "w-100","bordepersonalizado")
    let nombre = document.createElement("h1")
    nombre.textContent=enfermedad.nombre
    let sintomas = document.createElement("p")
    sintomas.textContent=enfermedad.sintomas
    let clasificacion = document.createElement("p")
    clasificacion.textContent=enfermedad.clasificacion
    let grado = document.createElement("p")
    grado.textContent=enfermedad.grado
    let probabilidadDeVida = document.createElement("p")
    probabilidadDeVida.textContent=enfermedad.probabilidadDeVida
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(sintomas)
    tarjeta.appendChild(clasificacion)
    tarjeta.appendChild(grado)
    tarjeta.appendChild(probabilidadDeVida)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
});
})