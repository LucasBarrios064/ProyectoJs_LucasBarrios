const buscarConjunto1 = (event)=>{
    event.preventDefault();
    const {buscarConjunto} = event.target
    const conjuntoElegido = conjunto.find((elemento) => {return elemento.nombreConjunto == buscarConjunto.value})

    if(conjuntoElegido){
        buscarVacio.innerHTML = `<h4>${conjuntoElegido.nombreConjunto}</h4> <ul><li>PODER FINAL:${conjuntoElegido.poderFinal}</li> <li> Casco: ${conjuntoElegido.poderEquipo.casco}</li></li><li>Pechera: ${conjuntoElegido.poderEquipo.pechera}</li> <li>Botas: ${conjuntoElegido.poderEquipo.botas}</li> <li>Capa: ${conjuntoElegido.poderEquipo.capa}</li> <li>Arma: ${conjuntoElegido.poderEquipo.arma}</li> <li>Arma Secundaria: ${conjuntoElegido.poderEquipo.armaSecundaria}</li></ul>`
    } else {
        buscarVacio.innerHTML = "No se encontro el Conjunto Buscado."
    }
}

formularioBuscar.addEventListener("submit", buscarConjunto1)
