const guardarConjunto = (event) => {
    event.preventDefault();

    const {nombreConjunto} = event.target
    equipamientoGuardado = new Equipamiento (nombreConjunto.value, resultadoIp, datoEquipo)
    conjunto.push(equipamientoGuardado)

    swal.fire({
        toast: true,
        title: `Equipamiento guardado con el nombre ${nombreConjunto.value}`,
        timer: 5000,
        timerProgressBar: true,
        position:'bottom-end',
        showConfirmButton: false,
        showCloseButton: true
    })

    let li = document.createElement("li")

    li.innerHTML = `<h4>-----${nombreConjunto.value}-----</h4> <p>Tu ip final es: ${resultadoIp} <ul><li>Casco: ${datoEquipo.casco}</li><li>Pechera: ${datoEquipo.pechera}</li> <li>Botas: ${datoEquipo.botas}</li> <li>Capa: ${datoEquipo.capa}</li> <li>Arma: ${datoEquipo.arma}</li> <li>Arma Secundaria: ${datoEquipo.armaSecundaria}</li></ul></p> `

    ulPadre.appendChild(li);
    let enJSON = JSON.stringify(conjunto)
    localStorage.setItem("ConjuntoLS", enJSON)
}
formularioConjunto.addEventListener("submit",guardarConjunto)

const mostrar = JSON.parse(localStorage.getItem("ConjuntoLS"))
