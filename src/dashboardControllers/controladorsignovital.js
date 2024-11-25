import {buscarSignosVitales} from "../../services/serviciosSignoVital.js"

//1. Llamar al api
    buscarSignosVitales()
    .then(function(respuestaBackEnd){
    console.log(respuestaBackEnd)
//2. Crear una referencia a una etiqueta html donde vamos a renderizar
    let fila = document.getElementById("fila")
//3. Se recorren los datos para obtenerlos de forma separada
    respuestaBackEnd.forEach(function(signoVital){
    console.log(signoVital)
    //4. Se crean columnas
    let columna=document.createElement("div")
    columna.classList.add("col")
    //5. Se crean tarjetas
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow")
    //6. Se crean una etiqueta para poner el nombre del paciente
    let nombre = document.createElement("h2")
    nombre.textContent=signoVital.nombre
    let valor = document.createElement("p")
    valor.textContent=signoVital.valor
    let fechaMedida = document.createElement("p")
    fechaMedida.textContent=signoVital.fechaMedida
    //Paso final (Ordenar las cartas)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(valor)
    valor.appendChild(fechaMedida)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
});
})