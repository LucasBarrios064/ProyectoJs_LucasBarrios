
const hacerCalculo = (event) => {
    //EVENTO QUE TOMA LOS DATOS INGRESADOS EN EL PRIMER FORM Y LOS PARSEA PARA PODER HACER EL CALCULO
    event.preventDefault();
    const {preguntaArma, casco, pechera, botas, capa, arma, armaSecundaria} = event.target

    datoEquipo = new Datos (parseInt(casco.value), parseInt(pechera.value), parseInt(botas.value), parseInt(capa.value) ,parseInt(arma.value) , parseInt(armaSecundaria.value))

    //Esta parte de abajo indica que si el usuario usa un arma que no puede usar Arma Secundaria muestre "NO"
    preguntaArma.value == "No" ? datoEquipo.calcularIpCompleta() : datoEquipo.calcularIpArmaDobleMano()

    resultadoIp = Math.round(resultado);
    if(isNaN(resultadoIp)){
        //Error si se deja vacio o se ponen letras en vez de numeros
        swal.fire({
            title: 'Se a producido un Error',
            text: 'No a ingresado un caracter valido',
            icon: 'error'
        })
    }else {
        //DOM del resultado
        datosVacio.innerHTML = `<h3>TU CONJUNTO ES:</h3> <p> Ip promedio:${resultadoIp}</p> <ul><li>Casco: ${datoEquipo.casco}</li><li>Pechera: ${datoEquipo.pechera}</li> <li>Botas: ${datoEquipo.botas}</li> <li>Capa: ${datoEquipo.capa}</li> <li>Arma: ${datoEquipo.arma}</li> <li>Arma Secundaria: ${datoEquipo.armaSecundaria}</li>  </ul>`

        cajaPrimerForm.innerHTML =`<div></div>
        <div>${datoEquipo.casco}</div>
        <div>${datoEquipo.capa}</div>
        <div>${datoEquipo.arma}</div>
        <div>${datoEquipo.pechera}</div>
        <div>${datoEquipo.armaSecundaria}</div>
        <div></div>
        <div>${datoEquipo.botas}</div>
        <div></div>`
    }
}


formularioCalculo.addEventListener("submit",hacerCalculo);