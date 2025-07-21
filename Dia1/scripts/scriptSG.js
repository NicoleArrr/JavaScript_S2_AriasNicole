// ===============================
// ----- Simulador de Gastos -----
// ===============================

hola = true
while (hola == true){
    console.log (
    "=============================================" 
    "Simulador de Gasto Diario"
    "============================================="
    "Seleccione una opción:
    "1. Registrar nuevo gasto
    "2. Consultar gasto
    "3. Actualizar gasto
    "4. Eliminar Gasto
    "5. Listar gastos
    "6. Calcular total de gastos
    "7. Generar reporte de gastos
    "8. Salir
    "=============================================");
    
    opcion = prompt(Ingresa tu opcion deseada: )
    if (opcion == 1){
        console.log ("
        ============================================="
        "Registrar Nuevo Gasto"
        "============================================="
        "Ingrese la información del gasto:"

        "- Monto del gasto:"
        "- Categoría (ej. comida, transporte, entretenimiento, otros):"
        "- Descripción (opcional):"

        "Ingrese 'S' para guardar o 'C' para cancelar."
        "=============================================");
    }else { hola == false}
    
}