
/*let IngresarNumero = parseInt(prompt(" Ingrese un numero "))

do{
    for( let i = 0 ; i <= IngresarNumero ; i++){
        alert(i)   
    }
    IngresarNumero = parseInt(prompt(" Ingrese otro numero "))
}while(IngresarNumero != "0"){
    alert("Saliendo...")
}*/


let IngresarNumero = 0

do{
    IngresarNumero = prompt(" Ingrese un numero (o ESC para salir). ")
    if(isNaN(IngresarNumero) && IngresarNumero != "ESC"){
        alert( "(" + IngresarNumero + ")" + " no es un numero.")
        }else{
            for( let i = 0 ; i <= IngresarNumero ; i++){
            alert(i)  
            }
        }
}while(IngresarNumero != "ESC"){
    alert("Saliendo...")
}


