let medicamentos = 
    [
        {
            nombre: "Paracetamol",
            presentacion: "Tabletas 500 mg",
            dosis: "1-2 tabletas cada 8 horas",
            laboratorio: "Laboratorios ABC",
            fechaCaducidad: "2025-12-31",
            contraIndicaciones: ["Hipersensibilidad al paracetamol"],
            registroInvima: "12345-ABCDE",
            copago: 2000
        },
        {
            nombre: "Ibuprofeno",
            presentacion: "Tabletas 400 mg",
            dosis: "1 tableta cada 6 horas",
            laboratorio: "Laboratorios XYZ",
            fechaCaducidad: "2024-05-30",
            contraIndicaciones: ["Úlceras gástricas", "Insuficiencia renal"],
            registroInvima: "67890-FGHIJ",
            copago: 1500
        },
        {
            nombre: "Amoxicilina",
            presentacion: "Cápsulas 500 mg",
            dosis: "1 cápsula cada 8 horas",
            laboratorio: "Laboratorios 123",
            fechaCaducidad: "2026-03-15",
            contraIndicaciones: ["Alergia a penicilinas"],
            registroInvima: "54321-KLMNO",
            copago: 2500
        },
        {
            nombre: "Loratadina",
            presentacion: "Tabletas 10 mg",
            dosis: "1 tableta diaria",
            laboratorio: "Laboratorios DEF",
            fechaCaducidad: "2024-09-01",
            contraIndicaciones: ["Embarazo", "Lactancia"],
            registroInvima: "09876-PQRST",
            copago: 1000
        },
        {
            nombre: "Omeprazol",
            presentacion: "Cápsulas 20 mg",
            dosis: "1 cápsula diaria",
            laboratorio: "Laboratorios GHI",
            fechaCaducidad: "2025-11-20",
            contraIndicaciones: ["Fracturas óseas previas"],
            registroInvima: "11223-UVWXY",
            copago: 3000
        }
    ]

let fila = document.getElementById("fila")

medicamentos.forEach(function(medicamento){
    console.log(medicamento)
    let columna=document.createElement("div")
    columna.classList.add("col")
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow")
    let nombre = document.createElement("h2")
    nombre.textContent=medicamento.nombre
    let presentacion= document.createElement("p")
    presentacion.textContent=medicamento.presentacion
    let dosis = document.createElement("p")
    dosis.textContent=medicamento.dosis
    let laboratorio = document.createElement("p")
    laboratorio.textContent=medicamento.laboratorio
    let fechaCaducidad = document.createElement("p")
    fechaCaducidad.textContent=medicamento.fechaCaducidad
    let contraIndicaciones = document.createElement("p")
    contraIndicaciones.textContent=medicamento.contraIndicaciones
    let registroInvima = document.createElement("p")
    registroInvima.textContent=medicamento.registroInvima
    let copago = document.createElement("p")
    copago.textContent=medicamento.copago

    tarjeta.appendChild(nombre)
    tarjeta.appendChild(presentacion)
    tarjeta.appendChild(dosis)
    tarjeta.appendChild(laboratorio)
    tarjeta.appendChild(fechaCaducidad)
    tarjeta.appendChild(contraIndicaciones)
    tarjeta.appendChild(registroInvima)
    tarjeta.appendChild(copago)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
});