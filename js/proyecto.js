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
        resultado = (this.casco + this.pechera + this.botas + this.capa + this.arma + parseInt(this.armaSecundaria) )/6;
    }
    calcularIpArmaDobleMano() {
        resultado = (this.casco + this.pechera + this.botas + this.capa + this.arma )/5;
    }
}

function pedirDatos(){
    let preguntaArma = prompt("Su arma es de doble mano ingrese Si/No")
    switch(preguntaArma){
        case "No":
            datoEquipo = new Datos (+prompt("Ingrese el Ip en su casco"), +prompt("Ingrese el Ip en su pechera"), +prompt("Ingrese el Ip en sus botas"),+prompt("Ingrese el Ip en su capa"), +prompt("Ingrese el Ip en su arma principal"),+prompt("Ingrese el Ip en su arma secundaria"));

            datoEquipo.calcularIpCompleta()
            break;

        case "Si":
            datoEquipo = new Datos (+prompt("Ingrese el Ip en su casco"), +prompt("Ingrese el Ip en su pechera"), +prompt("Ingrese el Ip en sus botas"),+prompt("Ingrese el Ip en su capa"), +prompt("Ingrese el Ip en su arma principal"),"No");

            datoEquipo.calcularIpArmaDobleMano()
            break;
    }
    datosUsuario = datoEquipo
    resultadoIp = Math.round(resultado);

    console.log (datosUsuario)
    alert( "Su ip promedio es de " + resultadoIp);
}


const conjunto = []
class Equipamiento{
    constructor (nombreConjunto, poderFinal, poderEquipo){
        this.nombreConjunto = nombreConjunto;
        this.poderFinal = poderFinal;
        this.poderEquipo = poderEquipo
    }

}    
function guardarConjunto(){
        conjunto.push( new Equipamiento (prompt("Ingrese nombre de Conjunto") , resultadoIp, datosUsuario))
        console.log(conjunto)
    }

function buscarConjunto (){

    let conjuntoBuscado = prompt("Ingrese nombre de conjunto")

    const conjuntoElegido = conjunto.find((elemento) => {return elemento.nombreConjunto == conjuntoBuscado})

    if(conjuntoElegido){
        console.log ("Tu conjunto es: ")
        console.log (conjuntoElegido)
    } else {
        console.log ("No se encontro el Conjunto buscado.")
    }
}