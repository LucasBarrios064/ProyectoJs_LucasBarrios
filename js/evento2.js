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