let enfermedades = [
        {
            nombre: "Juan Pérez",
            sintomas: ["Fiebre", " Tos", " Fatiga"],
            clasificacion: "Moderado",
            grado: "Grado 2",
            probabilidadDeVida: "vive"
        },
        {
            nombre: "María Gómez",
            sintomas: ["Dolor de cabeza"," Náuseas", " Confusión"],
            clasificacion: "Grave",
            grado: "Grado 3",
            probabilidadDeVida: "muere"
        },
        {
            nombre: "Carlos Sánchez",
            sintomas: ["Dolor en el pecho", " Dificultad para respirar"],
            clasificacion: "Crítico",
            grado: "Grado 4",
            probabilidadDeVida: "muere"
        },
        {
            nombre: "Ana López",
            sintomas: ["Cansancio extremo", " Pérdida de apetito"],
            clasificacion: "Leve",
            grado: "Grado 1",
            probabilidadDeVida: "vive"
        },
        {
            nombre: "Luis Martínez",
            sintomas: ["Mareos"," Dolor abdominal"," Sudoración"],
            clasificacion: "Moderado",
            grado: "Grado 2",
            probabilidadDeVida: "vive"
        }
    ]

    let fila = document.getElementById("fila")

    enfermedades.forEach(function(enfermedad){
    console.log(enfermedad)
    let columna=document.createElement("div")
    columna.classList.add("col")
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow")
    let nombre = document.createElement("h2")
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