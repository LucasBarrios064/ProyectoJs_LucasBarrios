const conjutosEspacio = document.getElementById("conjutosEspacio")

function cargarConjuntos (){
    fetch('./js/datos.json')
        .then(respuesta => respuesta.json())
        .then(conjunto => {
            conjunto.forEach(element => {
                const divConjunto = document.createElement('div')
                divConjunto.innerHTML = `<div class="cajaConjunto cajaTextoExplicacion">

                <h3 class="tituloConjunto">${element.name}</h3>

                <div class="cajaImg">
                    <div></div>
                    <div>
                        <h3>Casco:<br> ${element.casco}</h5>
                        <img src="${element.img.casco}" alt="">
                    </div>
                    <div>
                        <h3>Capa:<br> ${element.capa}</h3>
                        <img src="${element.img.capa}" alt="">
                    </div>
                    <div>
                        <h3>Arma:<br>${element.arma}</h3>
                        <img src="${element.img.arma}" alt="">
                    </div>
                    <div>
                        <h3>Pechera:<br> ${element.pechera}</h3>
                        <img src="${element.img.pechera}" alt="">
                    </div>
                    <div>
                        <h3>Segunda Mano:<br> ${element.armasecundaria}</h3>
                        <img src="${element.img.armasecundaria}" alt="">
                    </div>
                    <div></div>
                    <div>
                        <h3>Botas:<br> ${element.botas}</h3>
                        <img src="${element.img.botas}" alt="">
                    </div>
                    <div></div>
                </div>
        </div>`
                
                conjutosEspacio.appendChild(divConjunto)
            });
        })
}

cargarConjuntos();