function mostrarInfo(event) {
    if (event.key === 'Enter') {
        buscarSuperhero()
    }
}

function buscarSuperhero() {
    const personaje = document.getElementById("personaje")
    personaje.innerHTML = ''
    const buscarSuperhero = document.getElementById("buscarPersonaje").value.trim().toLowerCase();
    console.log(buscarSuperhero);
    const xhr = new XMLHttpRequest();
    const url = `https://www.superheroapi.com/api.php/7e1457414f866c52535e1184cf92b42c/search/${buscarSuperhero}`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {
            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const datos = JSON.parse(xhr.responseText);
                console.log(datos);
                if (datos.results && datos.results.length > 0) {
                    for (let i=0; i < datos.results.length; i++){
                        personaje.innerHTML = `
                        <img src="${datos["results"][0]["image"]["url"]}" alt="">
                        <h2>${datos["results"][0]["name"]}</h2>
                        <p><strong>Full name :</strong> ${datos["results"][0]["biography"]["full-name"]}</p>
                        <p><strong>Gender :</strong> ${datos["results"][0]['appearance']['gender']}</p>
                        `
                    }
                }
                console.log(datos["results"][0]);
            }
            catch (err) {
                alert('Error en la búsqueda')
                console.error(err.message);
            }
        }
    };
    xhr.send();
}