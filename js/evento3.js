const buscarConjunto1 = (event)=>{
    //EVENTO QUE BUSCA DENTRO DEL ARRAY ANTERIOR SI EXISTE UN CONJUNTO Y LO MUESTRA
    event.preventDefault();
    const {buscarConjunto} = event.target
    const conjuntoElegido = conjunto.find((elemento) => {return elemento.nombreConjunto == buscarConjunto.value})
    //DOM del resultado y mensaje si no se lo encuentra
    if(conjuntoElegido){
        buscarVacio.innerHTML = `<h4>${conjuntoElegido.nombreConjunto}</h4> <ul><li>PODER FINAL:${conjuntoElegido.poderFinal}</li> <li> Casco: ${conjuntoElegido.poderEquipo.casco}</li></li><li>Pechera: ${conjuntoElegido.poderEquipo.pechera}</li> <li>Botas: ${conjuntoElegido.poderEquipo.botas}</li> <li>Capa: ${conjuntoElegido.poderEquipo.capa}</li> <li>Arma: ${conjuntoElegido.poderEquipo.arma}</li> <li>Arma Secundaria: ${conjuntoElegido.poderEquipo.armaSecundaria}</li></ul>`
    } else {
        buscarVacio.innerHTML = "No se encontro el Conjunto Buscado."
    }
}

formularioBuscar.addEventListener("submit", buscarConjunto1)
