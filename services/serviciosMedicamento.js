export async function buscarMedicamentos(){
    const URL = "http://localhost:8080/api/medicamento"
    let peticion = {
    method: "GET"
}
    let respuestaServidor = await fetch(URL, peticion);
    let medicamentos = await respuestaServidor.json()
    return medicamentos
}

