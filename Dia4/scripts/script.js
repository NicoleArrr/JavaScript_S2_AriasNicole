// Quiz relámpago

// Diccionarios dentro de listas
let hamb = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
];
let ingredientes = [
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
];
let categorias = [
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
];
let chefs = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
];

// lista principal del usuario
let orden = [];

// Inicia el pedido del usuario
pedido = true;
while (pedido == true) {
    let opcion = parseInt(prompt(
        `Bienvenido al menú principal! Escribe la menu que deseas consultar

        1. Menu de ingredientes
        2. Menu por categorías
        3. Menu de hamburguesas
        4. Chefs disponibles
        5. Salir
        `));
    if (opcion == 1) {
        let menus = true
        while (menus) {
            let opcionIngrediente = parseInt(prompt(
                `Bienvenido! Escribe la opcion numérica deseada
            
            1. Añadir un nuevo ingrediente
            2. Mostrar ingredientes
            3. Actualizar un ingrediente
            4. Eliminar un ingrediente
            5. Salir`))
            if (opcionIngrediente == 1) {
                alert("..fsvd.")
            } else if (opcionIngrediente == 5) {
                alert("Regresando al menu principal");
                menus = false;
            }
        }
    } else if (opcion == 2) {
        let menus = true;
        while (menus) {
            let opcionCategoria = parseInt(prompt(
                `Escribe la opcion numérica deseada

                1. Añadir una nueva categoria
                2. Mostrar categorias
                3. Actualizar categorias
                4. Eliminar una categoria
                5. Salir`))
            if (opcionCategoria == 1) {
                alert("..fsvd.")
            } else if (opcionCategoria == 5) {
                alert("Regresando al menu principal");
                menus = false;
            }
        }
    } else if (opcion == 3) {
        let menus = true;
        while (menus) {
            let opcionHamb = parseInt(prompt(
                `Escribe la opcion numérica deseada

            1. Añadir una nueva hamburguesa
            2. Mostrar hamburguesas
            3. Actulizar hamburguesa
            4. Eliminar una hamburguesa
            5. Salir`))
            if (opcionHamb == 1) {
                alert("..fsvd.")
            } else if (opcionHamb == 5) {
                alert("Regresando al menu principal");
                menus = false;
            }
        }
    } else if (opcion === 4) {
        let menus = true;
        while (menus) {
            let opcionChef = parseInt(prompt(
                `Escribe la opcion numérica deseada

            1. Añadir nuevo chef
            2. Mostrar chefs
            3. Actualizar chefs
            4. Eliminar un chef
            5. Salir`))
            if (opcionChef == 1) {
                alert("..fsvd.")
            } else if (opcionChef == 5) {
                alert("Regresando al menu principal");
                menus = false;
            }
        }
    } else if (opcion == 5) {
        let confirmacion = prompt('Deseas continuar en el programa: (S/N)');
        if (confirmacion == "S") {
            alert("Sigues en el programa");
            pedido = false;
        } else if(confirmacion == "N") {
            alert("Regresando al menu principal");
        }else {
            alert("opcion no valida")
        }
    } else {
        alert("Por favor, ingrese una opción válida")
    }
}