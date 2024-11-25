export async function buscarMedicos(){
    const URL = "http://localhost:8080/api/medico"
    let peticion = {
    method: "GET"
}
    let respuestaServidor = await fetch(URL, peticion);
    let medicos = await respuestaServidor.json()
    return medicos
}

