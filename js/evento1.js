
const hacerCalculo = (event) => {

    event.preventDefault();


    const {preguntaArma, casco, pechera, botas, capa, arma, armaSecundaria} = event.target

    if(preguntaArma.value == "No"){
        datoEquipo = new Datos (parseInt(casco.value), parseInt(pechera.value), parseInt(botas.value), parseInt(capa.value) ,parseInt(arma.value) , parseInt(armaSecundaria.value))

        datoEquipo.calcularIpCompleta()

    }else if(preguntaArma.value == "Si"){

        datoEquipo = new Datos (parseInt(casco.value), parseInt(pechera.value), parseInt(botas.value), parseInt(capa.value) ,parseInt(arma.value) , "No")

        datoEquipo.calcularIpArmaDobleMano()
    }else{

        datoEquipo = 0
    }

    
    resultadoIp = Math.round(resultado);

    datosVacio.innerHTML = `<h3>TU CONJUNTO ES:</h3> <p> Ip promedio:${resultadoIp}</p> <ul><li>Casco: ${datoEquipo.casco}</li><li>Pechera: ${datoEquipo.pechera}</li> <li>Botas: ${datoEquipo.botas}</li> <li>Capa: ${datoEquipo.capa}</li> <li>Arma: ${datoEquipo.arma}</li> <li>Arma Secundaria: ${datoEquipo.armaSecundaria}</li>  </ul>`
}


formularioCalculo.addEventListener("submit",hacerCalculo);
