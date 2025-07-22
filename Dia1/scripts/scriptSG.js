// ===============================
// ----- Simulador de Gastos -----
// ===============================

let listaGastos = []
hola = true
while (hola == true) {
    let opcion = prompt(`
    =========================================== 
            Simulador de Gasto Diario
    ===========================================
    Seleccione una opción:
    1. Registrar nuevo gasto
    2. Consultar gasto
    3. Actualizar gasto
    4. Eliminar Gasto
    5. Listar gastos
    6. Calcular total de gastos
    7. Generar reporte de gastos
    8. Salir
    ===========================================
    
    Ingresa tu opción deseada`);

    if (opcion == 1) {
        alert(`
        =====================================
                Registrar Nuevo Gasto
        =====================================
        
        Ingrese la información del gasto:`);

        let registroGasto = prompt(`
        - Monto del gasto:
        - Categoría (ej. comida, transporte, entretenimiento, otros):
        - Descripción (opcional): `);

        let confirmación = prompt(`
            Ingrese 'S' para guardar o 'C' para cancelar.
            =============================================`);
    
    } else { hola == false }

    if (opcion == 2) {

    }else { }

    if (opcion == 3) {

    }else { }

    if (opcion == 4) {

    }else { }
}