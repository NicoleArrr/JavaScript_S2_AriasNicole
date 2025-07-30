// Consumo de API

function reqListener() {
  console.log(this.responseText);
}

let cargaApi = new XMLHttpRequest();
cargaApi.addEventListener("load", reqListener);
cargaApi.open("GET", "https://rickandmortyapi.com/api/character");
cargaApi.send();