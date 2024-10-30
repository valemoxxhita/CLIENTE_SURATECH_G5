let medicos=[
        {
            id: 1,
            nombre: "Santiago Mejía Salazar",
            matriculaProfesional: "123456",
            especialidad: "Pediatría",
            salario: 3000,
            ips: "Clinica San José",
            correo: "santiago.mejia@clinicasanjose.com",
            telefono: "321-555-0123",
            direccionConsultorio: "Calle 10 #45-67, Bogotá",
            finDeSemanaDisponible: true
        },
        {
            id: 2,
            nombre: "Laura González Pérez",
            matriculaProfesional: "789012",
            especialidad: "Cardiología",
            salario: 4500,
            ips: "Hospital Central",
            correo: "laura.gonzalez@hospitalcentral.com",
            telefono: "321-555-0456",
            direccionConsultorio: "Avenida 20 #12-34, Medellín",
            finDeSemanaDisponible: false
        },
        {
            id: 3,
            nombre: "Carlos Rodríguez Jiménez",
            matriculaProfesional: "345678",
            especialidad: "Dermatología",
            salario: 4000,
            ips: "Clínica Dermatológica",
            correo: "carlos.rodriguez@clinicadermatologica.com",
            telefono: "321-555-0789",
            direccionConsultorio: "Calle 5 #67-89, Cali",
            finDeSemanaDisponible: true
        },
        {
            id: 4,
            nombre: "Isabel Torres Ríos",
            matriculaProfesional: "901234",
            especialidad: "Ginecología",
            salario: 3500,
            ips: "Clínica Femenina",
            correo: "isabel.torres@clinicafemenina.com",
            telefono: "321-555-0234",
            direccionConsultorio: "Carrera 15 #23-45, Barranquilla",
            finDeSemanaDisponible: true
        },
        {
            id: 5,
            nombre: "Andrés Silva Castro",
            matriculaProfesional: "567890",
            especialidad: "Traumatología",
            salario: 4800,
            ips: "Hospital Ortopédico",
            correo: "andres.silva@hospitalortopedico.com",
            telefono: "321-555-0567",
            direccionConsultorio: "Calle 3 #12-34, Cartagena",
            finDeSemanaDisponible: false
        }
    ]

    
    let fila = document.getElementById("fila")

    medicos.forEach(function(medico){
    console.log(medico)
    let columna=document.createElement("div")
    columna.classList.add("col")
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow")
    
    let nombre = document.createElement("h2")
    nombre.textContent=medico.nombre
    let matriculaProfesional = document.createElement("p")
    matriculaProfesional.textContent=medico.matriculaProfesional
    let especialidad = document.createElement("p")
    especialidad.textContent=medico.especialidad
    let salario = document.createElement("p")
    salario.textContent=medico.salario
    let ips = document.createElement("p")
    ips.textContent=medico.ips
    let correo = document.createElement("p")
    correo.textContent=medico.correo
    let telefono = document.createElement("p")
    telefono.textContent=medico.telefono
    let direccionConsultorio = document.createElement("p")
    direccionConsultorio.textContent=medico.direccionConsultorio
    let finDeSemanaDisponible = document.createElement("p")
    finDeSemanaDisponible.textContent=medico.finDeSemanaDisponible
  
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(matriculaProfesional)
    tarjeta.appendChild(especialidad)
    tarjeta.appendChild(salario)
    tarjeta.appendChild(ips)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(direccionConsultorio)
    tarjeta.appendChild(finDeSemanaDisponible)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

});
