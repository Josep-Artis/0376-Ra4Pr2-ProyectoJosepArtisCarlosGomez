
//PARTE CARLOS (feature-ui-logic)
const MAX_INTENTOS = 5;
let intentosDisponibles = MAX_INTENTOS;

const selects = document.querySelectorAll('.code-input');
selects.forEach(select => {
    for (let i = 0; i <= 9; i++) {
        const opt = document.createElement('option');
        opt.value = i;      
        opt.textContent = i; 
        select.appendChild(opt); 
    }
});

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

function resetearInterfaz() {
    selects.forEach(select => {
        select.value = 0; 
    });
}

botonEnviar.addEventListener('click', () => {
    const intentActual = Array.from(selects).map(el => parseInt(el.value));
    logTerminal("Código enviado: " + intentActual.join('-'));

    const pistasActuales = validarIntento(intentActual, codigoSecreto);
    logTerminal("Pistas: " + pistasActuales.join(' '));

    intentosDisponibles--;
    
    const spanRondes = document.getElementById('rondes-restants');
    if (spanRondes) {
        spanRondes.innerText = intentosDisponibles;
    }

    const estadoJuego = comprobarFinDeJuego(pistasActuales, intentosDisponibles);

    if (estadoJuego === 'victoria') {
        logTerminal("¡SISTEMA HACKEADO! ACCESO CONCEDIDO", "success");
        botonEnviar.disabled = true;
        botonEnviar.innerText = "ACCESO TOTAL";
    } else if (estadoJuego === 'derrota') {
        logTerminal("SISTEMA BLOQUEADO: Te has quedado sin intentos.", "error");
        logTerminal("El código era: " + codigoSecreto.join('-'), "error");
        botonEnviar.disabled = true;
        botonEnviar.innerText = "BLOQUEADO";
    } else {
        logTerminal("Te quedan " + intentosDisponibles + " intentos.");
        resetearInterfaz();
    }
});

//PARTE JOSEP (feature-game-engine)
function generarCodigoAleatorio() {
    const codigo = [];
    for (let i = 0; i < 4; i++) {
        const numAleatorio = Math.floor(Math.random() * 10);
        codigo.push(numAleatorio);
    }
    return codigo;
}

const codigoSecreto = generarCodigoAleatorio();
console.log("Codigo secreto:", codigoSecreto);

function validarIntento(intentoUsuario, codigoSecretoParametro) {
    // Usamos un array de 4 posiciones fijas en vez de push
    const pistas = ['-', '-', '-', '-'];
    const codigoPendiente = [...codigoSecretoParametro];
    const intentoPendiente = [...intentoUsuario];

    // PRIMERA PASADA: buscar posiciones correctas (1)
    for (let i = 0; i < 4; i++) {
        if (intentoPendiente[i] === codigoPendiente[i]) {
            pistas[i] = '1';        // guardamos en la posición exacta
            codigoPendiente[i] = -1;
            intentoPendiente[i] = -1;
        }
    }

    // SEGUNDA PASADA: buscar números correctos mal colocados (Ø)
    for (let i = 0; i < 4; i++) {
        if (intentoPendiente[i] === -1) continue;
        const pos = codigoPendiente.indexOf(intentoPendiente[i]);
        if (pos !== -1) {
            pistas[i] = 'Ø';        // guardamos en la posición exacta
            codigoPendiente[pos] = -1;
        } else {
            pistas[i] = '×';        // guardamos en la posición exacta
        }
    }
    return pistas;
}
//hemos arreglado dos bugs 1 que se cruzaba el nombre de la variable codigoSecreto con el nombre de parametro que se llamaba igual dando pistas erroneas.
//Y el segundo bug era que al poner null en vez de un valor que estuviera fuera del rango de 0-9, el algoritmo se confundía y daba pistas erróneas.
//Ahora con -1 ya no hay confusión porque nunca será un valor válido para el juego. 

// FUNCIÓN 3: Comprobación de final de juego

function comprobarFinDeJuego(pistas, intentosRestantes) {
    // Si hay cuatro "1", es victoria
    const aciertos = pistas.filter(p => p === '1').length;
    if (aciertos === 4) {
        return 'victoria';
    }
    if (intentosRestantes === 0) {
        return 'derrota';
    }
    return 'continuar';
}



