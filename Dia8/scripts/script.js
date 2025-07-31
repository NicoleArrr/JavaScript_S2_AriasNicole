function busquedaGeneral (){
    const buscarNombre= prompt("Ingresar el número del personaje por buscar:");

    // importe del XML
    const xhr = new XMLHttpRequest();
    // entre comillas de acentuación grave el enlace
    const url = `https://swapi.py4e.com/api/people/?search=${buscarNombre}`;
    console.log(url);
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function (){
        if(xhr.readyState===4 && xhr.status === 200){
            try{
                const datos = JSON.parse(xhr.responseText);
                alert("Personaje \n Name:"+datos["name"]+" Altura:"+datos["height"]+ "Masa:"+datos["mass"]+ "Color del cabello"+datos["hair_color"]+ "")
            }
            catch(err){
                console.log(err.message);
            }
        }
    };
    xhr.send();
}

busquedaGeneral();