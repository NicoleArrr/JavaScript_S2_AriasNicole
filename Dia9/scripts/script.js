// PokéAPI
function mostrarInfo(event) {
    if (event.key === 'Enter') {
        buscarPokemon()
    }
}

function buscarPokemon() {
    document.getElementById("personaje").innerHTML = ``;
    const busqPoke = document.getElementById("buscarPersonaje").value.trim().toLowerCase();
    console.log(busqPoke);
    const xhr = new XMLHttpRequest();
    const url = `https://pokeapi.co/api/v2/pokemon/${busqPoke}`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {
            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const datos = JSON.parse(xhr.responseText);
                let busqueda = document.getElementById("personaje");
                busqueda.innerHTML += `
                    <img src="${datos["sprites"]["other"]["showdown"]["front_default"]}" alt="">
                    <h2>${datos["id"]} - ${datos["name"]}</h2>
                    `
                console.log(datos["id"])
            }
            catch (err) {
                alert ('Error en la poke búsqueda')
                console.log(err.message);
            }
        }
    };
    xhr.send();
}
