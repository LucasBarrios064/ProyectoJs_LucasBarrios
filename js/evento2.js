const guardarConjunto = (event) => {
    //EVENTO PARA GUARDAR EL COJUNTO QUE SE CALCULO EN EL EVENTO 1
    event.preventDefault();
    const {nombreConjunto} = event.target
    equipamientoGuardado = new Equipamiento (nombreConjunto.value, resultadoIp, datoEquipo)


    if(datoEquipo ==""){
        //Error por si quieren guardar un conjunto sin haber calculado previamente algo
        swal.fire({
            title: 'Se a producido un Error',
            text: 'No ha realizado ningun calculo',
            icon: 'error'
        })
    }else{
        //Guarda el conjunto en un array
        conjunto.push(equipamientoGuardado)

        //mensaje de que se guardo correctamente
        swal.fire({
            toast: true,
            title: `Equipamiento guardado con el nombre ${nombreConjunto.value}`,
            timer: 5000,
            timerProgressBar: true,
            position:'bottom-end',
            showConfirmButton: false,
            showCloseButton: true
            })

        //DOM de el resultado
        let li = document.createElement("li")

        li.innerHTML = `<h4>-----${nombreConjunto.value}-----</h4> <p>Tu ip final es: ${resultadoIp} <ul><li>Casco: ${datoEquipo.casco}</li><li>Pechera: ${datoEquipo.pechera}</li> <li>Botas: ${datoEquipo.botas}</li> <li>Capa: ${datoEquipo.capa}</li> <li>Arma: ${datoEquipo.arma}</li> <li>Arma Secundaria: ${datoEquipo.armaSecundaria}</li></ul></p> `

        ulPadre.appendChild(li);
        let enJSON = JSON.stringify(conjunto)
        localStorage.setItem("ConjuntoLS", enJSON)
    }
    
}
formularioConjunto.addEventListener("submit",guardarConjunto)
const mostrar = JSON.parse(localStorage.getItem("ConjuntoLS"))
