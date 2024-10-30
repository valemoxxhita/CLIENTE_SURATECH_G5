let signosVitales =
[
    {
        nombre: "Temperatura",
        valor: "38°C",
        fechaMedida: "2024-09-19"
    },
    {
        nombre: "Presión arterial",
        valor: "120/80 mmHg",
        fechaMedida: "2024-09-20"
    },
    {
        nombre: "Frecuencia cardíaca",
        valor: "75 bpm",
        fechaMedida: "2024-09-21"
    },
    {
        nombre: "Nivel de glucosa",
        valor: "90 mg/dL",
        fechaMedida: "2024-09-22"
    },
    {
        nombre: "Oxígeno en sangre",
        valor: "98%",
        fechaMedida: "2024-09-23"
    }
]
//2. Crear una referencia a una etiqueta html donde vamos a renderizar
let fila = document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada
signosVitales.forEach(function(signoVital){
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