// PokéAPI

function buscarPokemon() {
    document.getElementById("pantalla").innerHTML=``;
    const busqPoke = document.getElementById("nombreInput").value.trim();
    console.log(busqPoke);
    const xhr = new XMLHttpRequest();//La importación del XML
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
                if (datos.results && datos.results.length > 0) {
                    for (let i = 0; i < datos.results.length; i++) {
                        let division = document.getElementById("pantalla");
                        division.innerHTML += `
                            <img src="${datos["sprites"][i]["showdown"]["front_default"]}" alt="">
                            <h3>${datos["results"][i]["name"]}</h3>
                            <p><strong>Status:</strong>${datos["results"][i]["status"]}</p>
                            <p><strong>Specie:</strong>${datos["results"][i]["species"]}</p>
                        `
                        console.log(datos[i]["id"]);
                    }
                }

            }
            catch (err) {
                console.log(err.message);
            }
        }
    };
    xhr.send();
}