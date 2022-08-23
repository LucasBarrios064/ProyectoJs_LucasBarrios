const formularioCalculo = document.getElementById('formularioCalculo');
const datosVacio = document.getElementById("DatosVacio")
const formularioConjunto =document.getElementById('formularioConjunto');
const ulPadre = document.getElementById("ulPadre")
const formularioBuscar =document.getElementById('formularioBuscar');
const buscarVacio =document.getElementById("BuscarVacio")

let resultado = ""
let resultadoIp = ""

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
    }
}

class Equipamiento{
    constructor (nombreConjunto, poderFinal, poderEquipo){
        this.nombreConjunto = nombreConjunto;
        this.poderFinal = poderFinal;
        this.poderEquipo = poderEquipo
    }
}