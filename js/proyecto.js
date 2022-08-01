    let casco =""
    let pechera =""
    let botas =""
    let capa =""
    let arma =""
    let armaSecundaria =""
    let resultado = ""
    let resultadoIp = ""

function pedirDatos (){

    casco=+prompt("Ingrese el Ip en su casco")
    pechera=+prompt("Ingrese el Ip en su pechera")
    botas=+prompt("Ingrese el Ip en sus botas")
    capa=+prompt("Ingrese el Ip en su capa")
    arma=+prompt("Ingrese el Ip en su arma principal")
    armaSecundaria=prompt("Ingrese el Ip en su arma secundaria o (NO) si su arma es de doble mano")

    if(armaSecundaria != "NO" ){
        resultado = (casco + pechera + botas + capa + arma + parseInt(armaSecundaria) )/6
        
    }else{
        resultado = (casco + pechera + botas + capa + arma )/5
    }
    resultadoIp = Math.round(resultado)
    alert( "Su ip promedio es de " + resultadoIp)
}

const conjunto = []
function guardarConjunto (){
    conjunto.push(resultadoIp)
    alert("Conjuntos Guardados \n" + conjunto.join("\n"))
}




/*
const guardado = []
function guardarConjunto (){

    class Conjunto {
        constructor (nombre, resultado){
            this.nombre = nombre
            this.resultado = resultado
        }
    }
    guardado.push(Conjunto, {nombre:prompt("Ingrese nombre de Conjunto"), resultado: resultadoIpGuardado})
    console.log(guardado.join("/n"))
}*/
