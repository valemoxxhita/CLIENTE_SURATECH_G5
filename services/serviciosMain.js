export async function buscarInformacion(){
    const URL = "http://localhost:8080/api/main"
    let peticion = {
        method: "GET"
    }
    let respuestaServidor = await fetch(URL, peticion);
    let informacion = await respuestaServidor.json()
    return informacion
}

export async function registrarInformacion(datosInformacion){
    const URL = "http://localhost:8080/api/main"
    let peticion={
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosInformacion)
    }
    let respuestaInicial = await fetch(URL, peticion)
    let respuestaFinal = await respuestaInicial.json();
    return respuestaFinal
}

