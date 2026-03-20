//PARTE CARLOS (feature-ui-logic)

let intentosDisponibles = 5;
// Seleccionamos los 4 elementos (code-input) que estan en el html
const selects = document.querySelectorAll('.code-input');
// Recorremos cada selector para añadirle las opciones del 0 al 9
selects.forEach(select => {
    for (let i = 0; i <= 9; i++) {
        const opt = document.createElement('option');
        opt.value = i;      
        opt.textContent = i; 
        select.appendChild(opt); 
    }
});
// Función para escribir mensajes en la pantalla (terminal)
function logTerminal(missatge, tipus = '') {
    const terminal = document.getElementById('terminal');
    const novaLinia = document.createElement('p');
    novaLinia.classList.add('line');
    if (tipus) {
        novaLinia.classList.add(tipus);
    }
    novaLinia.textContent = "> " + missatge;
    terminal.appendChild(novaLinia);
    terminal.scrollTop = terminal.scrollHeight;
}
logTerminal("SISTEMA OPERATIVO INICIALIZADO", "success");
const botonEnviar = document.getElementById('btn-enviar');

// Creacion de una nueva función para resetear los selectores a 0 después de cada intento
function resetearInterfaz() {
    selects.forEach(select => {
        select.value = 0; 
    });
}

// aqui le decimos qué hacer cuando alguien haga clic en el boton
botonEnviar.addEventListener('click', () => {
    // Aqui leemos los 4 selects y guardamos sus valores en un Array
    const intentActual = Array.from(selects).map(el => parseInt(el.value));
    logTerminal("Código enviado: " + intentActual.join('-'));

    // CORRECCIÓN AQUÍ: Guardamos las pistas que genera Josep ---
    const pistasActuales = validarIntento(intentActual, codigoSecreto);
    // Aqui mostramos las pistas (1, Ø, ×) en la terminal
    logTerminal("Pistas: " + pistasActuales.join(' '));

    // Aqui restamos uno al contador de intentos cada vez que se hace clic
    intentosDisponibles--;
    
    // BUSCAMOS el 5 del HTML y lo cambiamos por el nuevo número
    const spanRondes = document.getElementById('rondes-restants');
    if (spanRondes) {
        spanRondes.innerText = intentosDisponibles;
    }

    // --- CORRECCIÓN AQUÍ: Comprobamos si el jugador ha ganado o perdido ---
    const estadoJuego = comprobarFinDeJuego(pistasActuales, intentosDisponibles);

    if (estadoJuego === 'victoria') {
        // Si sale victoria, avisamos por la terminal y bloqueamos el botón
        logTerminal("¡SISTEMA HACKEADO! ACCESO CONCEDIDO", "success");
        botonEnviar.disabled = true;
        botonEnviar.innerText = "ACCESO TOTAL";
    } else if (estadoJuego === 'derrota') {
        // Si perdemos, damos error y mostramos cuál era el código secreto
        logTerminal("SISTEMA BLOQUEADO: Te has quedado sin intentos.", "error");
        logTerminal("El código era: " + codigoSecreto.join('-'), "error");
        botonEnviar.disabled = true;
        botonEnviar.innerText = "BLOQUEADO";
    } else {
        // Reutilizo la funcion e informamos por la terminal cuántas vidas quedan
        logTerminal("Te quedan " + intentosDisponibles + " intentos.");
        
        // Ejecutamos la limpieza de los selectores para la siguiente jugada
        resetearInterfaz();
    }
});

//PARTE JOSEP (feature-game-engine)
// FUNCIÓN 1: Generar un código secreto aleatorio de 4 dígitos
function generarCodigoAleatorio() {
    const codigo = [];
    for (let i = 0; i < 4; i++) {
        const numAleatorio = Math.floor(Math.random() * 10);
        codigo.push(numAleatorio);
    }
    return codigo;
}
// Al cargar la página se genera el código secreto
const codigoSecreto = generarCodigoAleatorio();
// Quitar antes de entregar: muestra el código en consola para pruebas
console.log("Codigo secreto:", codigoSecreto);

// FUNCIÓN 2: Algoritmo de validación (dos pasadas)
function validarIntento(intentoUsuario, codigoSecreto) {
    const pistas = [];
    const codigoPendiente = [];
    const intentoPendiente = [];
    // PRIMERA PASADA: buscar posiciones correctas (1)
    for (let i = 0; i < 4; i++) {
        if (intentoUsuario[i] === codigoSecreto[i]) {
            pistas.push('1');
            codigoPendiente.push(null);
            intentoPendiente.push(null);
        } else {
            codigoPendiente.push(codigoSecreto[i]);
            intentoPendiente.push(intentoUsuario[i]);
        }
    }
    // SEGUNDA PASADA: buscar números correctos mal colocados (Ø)
    for (let i = 0; i < 4; i++) {
        if (intentoPendiente[i] === null) continue;
        const pos = codigoPendiente.indexOf(intentoPendiente[i]);
        if (pos !== -1) {
            pistas.push('Ø');
            codigoPendiente[pos] = null;
        } else {
            pistas.push('×');
        }
    }
    return pistas;
}
// FUNCIÓN 3: Comprobación de final de juego
function comprobarFinDeJuego(pistas, intentosRestantes) {
    const haGanado = pistas.every(pista => pista === '1');
    if (haGanado) {
        return 'victoria';
    }
    if (intentosRestantes === 0) {
        return 'derrota';
    }
    return 'continuar';
}




