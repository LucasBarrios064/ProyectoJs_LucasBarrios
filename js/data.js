const formularioCalculo = document.getElementById('formularioCalculo');
const datosVacio = document.getElementById("DatosVacio")
const cajaPrimerForm= document.getElementById("cajaPrimerForm")
const formularioConjunto =document.getElementById('formularioConjunto');
const ulPadre = document.getElementById("ulPadre")
const formularioBuscar =document.getElementById('formularioBuscar');
const buscarVacio =document.getElementById("BuscarVacio")
const conjutosEspacio = document.getElementById("conjutosEspacio")


let resultado = ""
let resultadoIp = ""
let nombreDelConjunto = ""
let datoEquipo =""

const conjunto = []

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
        this.armaSecundaria = "No"
    }
}

class Equipamiento{
    constructor (nombreConjunto, poderFinal, poderEquipo){
        this.nombreConjunto = nombreConjunto;
        this.poderFinal = poderFinal;
        this.poderEquipo = poderEquipo
    }
}