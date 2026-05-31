let turnoActual = 0;
let vueltasAcumuladas = 0;

function ejecutarGiro() {
    const ruleta = document.getElementById('ruletaImg');
    const btn = document.getElementById('btnGirar');
    
    // Deshabilitar el botón durante el giro
    btn.disabled = true;

    // Sumamos las 6 vueltas completas para el efecto visual
    vueltasAcumuladas += 6; 
    let anguloDestino = 25; // Tu variable base fija

    // LÓGICA CALIBRADA: Caso 0 intacto en 235, los demás con tu ajuste de +25°
    switch(turnoActual) {
        case 0: // 1° Tiro: Centro del BLANCO
            anguloDestino = 235;
            break;
        case 1: // 2° Tiro: Centro del ROJO
            anguloDestino = 295;
            break;
        case 2: // 3° Tiro: Centro del NEGRO
            anguloDestino = 355;
            break;
        case 3: // 4° Tiro: Centro del AMARILLO
            anguloDestino = 175;
            break;
        case 4: // 5° Tiro: Centro del VERDE
            anguloDestino = 55;
            break;
        case 5: // 6° Tiro: Centro del AZUL
            anguloDestino = 115;
            break;
    }

    // Calculamos el total acumulado de rotación en grados
    let gradosTotales = (vueltasAcumuladas * 360) + anguloDestino;
    
    // Ejecuta la rotación física en la interfaz
    ruleta.style.transform = `rotate(${gradosTotales}deg)`;

    // Avanzar de forma estricta en el ciclo secuencial de los 6 colores
    turnoActual++;
    if (turnoActual > 5) {
        turnoActual = 0; 
    }

    // Reactivar el botón de giro una vez que la ruleta frena por completo (6.5 segundos)
    setTimeout(() => {
        btn.disabled = false;
    }, 6500);
}