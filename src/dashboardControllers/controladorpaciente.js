//1. Quemar datos o simularlos

let pacientes=[
    {
        id: 890,
        nombre: "Brad Alexis Gallego",
        anioNacimiento: "1989-06-23",
        ciudad: "Medellín",
        correo: "bebeshito69@hotmail.com",
        telefono: "398329898",
        ips: "Mayorca sede norte",
        poliza: true,
        grupoIngresos: "C",
        fechaAfiliacion: "2005-10-20"
    },
    {
        id: 891,
        nombre: "Sofia Elena Torres",
        anioNacimiento: "1992-04-15",
        ciudad: "Bogotá",
        correo: "sofia.torres@email.com",
        telefono: "3004567890",
        ips: "Salud Plus",
        poliza: false,
        grupoIngresos: "B",
        fechaAfiliacion: "2010-03-12"
    },
    {
        id: 892,
        nombre: "Carlos Andrés Pérez",
        anioNacimiento: "1985-11-30",
        ciudad: "Cali",
        correo: "carlos.perez@email.com",
        telefono: "3149876543",
        ips: "Clinica Vida",
        poliza: true,
        grupoIngresos: "A",
        fechaAfiliacion: "2008-05-22"
    },
    {
        id: 893,
        nombre: "Laura Isabel Martinez",
        anioNacimiento: "1990-09-08",
        ciudad: "Barranquilla",
        correo: "laura.martinez@email.com",
        telefono: "3216549870",
        ips: "Centro Medico",
        poliza: true,
        grupoIngresos: "C",
        fechaAfiliacion: "2015-07-18"
    }
]

//2. Crear una referencia a una etiqueta html donde vamos a renderizar
let fila = document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada
pacientes.forEach(function(paciente){
    console.log(paciente)
    //4. Se crean columnas
    let columna=document.createElement("div")
    columna.classList.add("col")
    //5. Se crean tarjetas
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow")
    //6. Se crean una etiqueta para poner el nombre del paciente
    let nombre = document.createElement("h2")
    nombre.textContent=paciente.nombre
    //Paso final (Ordenar las cartas)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})

