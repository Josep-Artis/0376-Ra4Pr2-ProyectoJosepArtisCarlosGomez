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
botonEnviar.addEventListener('click', () => {
    const intentActual = Array.from(selects).map(el => parseInt(el.value));
    logTerminal("Código enviado: " + intentActual.join('-'));
    intentosDisponibles--;
    const spanRondes = document.getElementById('rondes-restants');
    if (spanRondes) {
        spanRondes.innerText = intentosDisponibles;
    }
    // Llamamos a la función de conexión (parte Josep)
    executarIntento(intentActual);
    logTerminal("Te quedan " + intentosDisponibles + " intentos.");
    if (intentosDisponibles === 0) {
        botonEnviar.disabled = true;
        botonEnviar.innerText = "BLOQUEADO";
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



