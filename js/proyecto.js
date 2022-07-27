    let casco =""
    let pechera =""
    let botas =""
    let capa =""
    let arma =""
    let armaSecundaria =""
    let resultadoIp = ""

function pedirDatos (){
    casco=+prompt("Ingrese el Ip en su casco")
    pechera=+prompt("Ingrese el Ip en su pechera")
    botas=+prompt("Ingrese el Ip en sus botas")
    capa=+prompt("Ingrese el Ip en su capa")
    arma=+prompt("Ingrese el Ip en su arma principal")
    armaSecundaria=prompt("Ingrese el Ip en su arma secundaria o (NO) si su arma es de doble mano")

    if(armaSecundaria != "NO" ){
        resultadoIp = (casco + pechera + botas + capa + arma + parseInt(armaSecundaria) )/6
    }else{
        resultadoIp = (casco + pechera + botas + capa + arma )/5
    }
    
    alert ( "Su IP promedio es de " + resultadoIp)
}
