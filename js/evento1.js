
const hacerCalculo = (event) => {

    event.preventDefault();
    const {preguntaArma, casco, pechera, botas, capa, arma, armaSecundaria} = event.target

    datoEquipo = new Datos (parseInt(casco.value), parseInt(pechera.value), parseInt(botas.value), parseInt(capa.value) ,parseInt(arma.value) , parseInt(armaSecundaria.value))

    preguntaArma.value == "No" ? datoEquipo.calcularIpCompleta() : datoEquipo.calcularIpArmaDobleMano()

    resultadoIp = Math.round(resultado);
    if(isNaN(resultadoIp)){
        swal.fire({
            title: 'Se a producido un Error',
            text: 'No a ingresado un caracter valido',
            icon: 'error'
        })
    }else {
        datosVacio.innerHTML = `<h3>TU CONJUNTO ES:</h3> <p> Ip promedio:${resultadoIp}</p> <ul><li>Casco: ${datoEquipo.casco}</li><li>Pechera: ${datoEquipo.pechera}</li> <li>Botas: ${datoEquipo.botas}</li> <li>Capa: ${datoEquipo.capa}</li> <li>Arma: ${datoEquipo.arma}</li> <li>Arma Secundaria: ${datoEquipo.armaSecundaria}</li>  </ul>`
    }
}


formularioCalculo.addEventListener("submit",hacerCalculo);