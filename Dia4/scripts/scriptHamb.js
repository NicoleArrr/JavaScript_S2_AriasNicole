// Quiz relámpago

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
]

let orden = []

pedido = true
while ( pedido == true){
    let opcion = prompt (`
    Bienvenido! Escribe la opcion que deseas
    1. Hacer un pedido
    2. Mostrar mi pedido
    3. Personalizar un producto
    4. Eliminar
    `);

    if (opcion === 1){
        let pedidoHamb = prompt ('¿Que hamburguesa desea ordenar?');
        if (pedidoHamb == 'Clásica'){
            for (let i = 0; i < hamb.length;) {
                const copyDic = hamb[0]();
                copyDic.push [orden]
            }
        }
        }
    };
    if (opcion === 2){
        alert (orden)
    }
    if (opcion === 3){}
    if (opcion === 4){}
}