export async function buscarSignosVitales(){
    const URL = "http://localhost:8080/api/signovital"
    let peticion = {
        method: "GET"
    }
    let respuestaServidor = await fetch(URL, peticion);
    let signosVitales = await respuestaServidor.json()
    return signosVitales
}

