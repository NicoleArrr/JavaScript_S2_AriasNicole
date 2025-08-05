// PokéAPI
function mostrarCartas(event) {
    if (event.key === 'onclick') {
        cartas()
    }
}

function cartas() {
    document.getElementById("cartas").innerHTML = ``;
    const buscarCartas = document.getElementById("mesa").value
    console.log(buscarCartas);
    const xhr = new XMLHttpRequest();
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {
            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const deck = JSON.parse(xhr.responseText);
                deckID = deck.deck_id
                const xhr = new XMLHttpRequest();
                const mostrarCartas = `https://deckofcardsapi.com/api/deck/${deckID}?deck_count=10`
                xhr.open("GET", url, true);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        const datosCartas = JSON.parse(xhr.responseText);
                        const busqueda = document.getElementById("mesa");
                        busqueda.innerHTML += `
                        <img src="${datosCartas["cards"][0]["images"]["svg"]} alt="">
                        `;
                    }
                
                console.log(datosCartas["id"])
            }
            catch (err) {
                alert ('Error en la poke búsqueda')
                console.log(err.message);
            }
        }
    };
    xhr.send();
}
}