
//ESTA PARTE ES DEL PRIMER FORMULARIO
const formularioCalculo = document.getElementById('formularioCalculo');
const datosVacio = document.getElementById("DatosVacio")
let resultado = ""
let resultadoIp = ""

class Datos{
    constructor(casco, pechera, botas, capa, arma, armaSecundaria){
        this.casco = casco;
        this.pechera = pechera;
        this.botas = botas;
        this.capa = capa;
        this.arma = arma;
        this.armaSecundaria = armaSecundaria;
    }

    calcularIpCompleta() {
        resultado = (this.casco + this.pechera + this.botas + this.capa + this.arma + this.armaSecundaria)/6;
    }
    calcularIpArmaDobleMano() {
        resultado = (this.casco + this.pechera + this.botas + this.capa + this.arma )/5;
    }
}


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


//ESTA PARTE ES DEL SEGUNDO FORMULARIO
const formularioConjunto =document.getElementById('formularioConjunto');
const ulPadre = document.getElementById("ulPadre")


const conjunto = []
class Equipamiento{
    constructor (nombreConjunto, poderFinal, poderEquipo){
        this.nombreConjunto = nombreConjunto;
        this.poderFinal = poderFinal;
        this.poderEquipo = poderEquipo
    }
}

const guardarConjunto = (event) => {
    event.preventDefault();

    const {nombreConjunto} = event.target
    conjunto.push( new Equipamiento (nombreConjunto.value, resultadoIp, datoEquipo))
    console.log(conjunto)

    let li =document.createElement("li")

    li.innerHTML = `<h4>-----${nombreConjunto.value}-----</h4> <p>Tu ip final es: ${resultadoIp} <ul><li>Casco: ${datoEquipo.casco}</li><li>Pechera: ${datoEquipo.pechera}</li> <li>Botas: ${datoEquipo.botas}</li> <li>Capa: ${datoEquipo.capa}</li> <li>Arma: ${datoEquipo.arma}</li> <li>Arma Secundaria: ${datoEquipo.armaSecundaria}</li></ul></p> `

    ulPadre.appendChild(li);

    let enJSON = JSON.stringify(conjunto)
    localStorage.setItem(nombreConjunto.value , enJSON)
}

formularioConjunto.addEventListener("submit",guardarConjunto)




//ESTA PARTE ES DEL TERCER FORMULARIO
const formularioBuscar =document.getElementById('formularioBuscar');
const buscarVacio =document.getElementById("BuscarVacio")
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
