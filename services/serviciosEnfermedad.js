export async function buscarEnfermedades(){
    const URL = "http://localhost:8080/api/enfermedad"
    let peticion = {
    method: "GET"
}
    let respuestaServidor = await fetch(URL, peticion);
    let enfermedades = await respuestaServidor.json()
    return enfermedades
}

