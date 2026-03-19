//parte carlos:

let intentosDisponibles = 5;
// Aqui seleccionamos los 4 elementos (code-input) que estan en el html
const selects = document.querySelectorAll('.code-input');

// Aqui lo que hacemos es que recorremos cada selector para añadirle las opciones del 0 al 9
selects.forEach(select => {
    for (let i = 0; i <= 9; i++) {
        const opt = document.createElement('option');
        opt.value = i;     
        opt.textContent = i; 
        select.appendChild(opt); 
    }
});
// PASO 2: Función para escribir mensajes en la pantalla (terminal)
function logTerminal(missatge, tipus = '') {
    const terminal = document.getElementById('terminal');
    // Aqui se crea una etiqueta <p> en la memoria del ordenador 
    const novaLinia = document.createElement('p');
    
    // Añadimos la clase 'line' que esta ubicada en el css que pone el texto en color verde 
    novaLinia.classList.add('line');
    
    // Aqui se agrega la condicion donde si la palabras es (.succes) el texto sera color verde pero si es (.error) se pondra de color rojo
    if (tipus) {
        novaLinia.classList.add(tipus);
    }

    // Ponemos el texto con un símbolo ">" delante
    novaLinia.textContent = "> " + missatge;
    
    // Basicamente coge el mensaje y lo pega dentro del cuadro de la terminal de la pagina web
    terminal.appendChild(novaLinia);

    // Esto hace que la pantalla baje sola si hay muchos mensajes
    terminal.scrollTop = terminal.scrollHeight;
}

// Mensaje de prueba para ver que todo funciona
logTerminal("SISTEMA OPERATIVO INICIALIZADO", "success");

// PASO 3: Programar el botón de envío

//Aqui lo que hago es que buscamos el botón en el HTML por su id 
const botonEnviar = document.getElementById('btn-enviar');

// aqui le decimos qué hacer cuando alguien haga clic en el boton
botonEnviar.addEventListener('click', () => {
    
    // Aqui leemos los 4 selects y guardamos sus valores en un Array
    // Usamos parseInt para que el ordenador sepa que son NÚMEROS y no texto
    // Uso el .map que no lo hemos visto en clase pero es como una orden para recorrer la lista 
    // He usado el como abreviatura de elemento para indicar que el .map está recorriendo cada uno de los elementos de la lista.
    const intentActual = Array.from(selects).map(el => parseInt(el.value));

    // aqui tomanos la lista de num. y con .join('-') sirve para que los números se vean así: 1-2-3-4
    logTerminal("Código enviado: " + intentActual.join('-'));

    //PASO 4: Gestión de los intentos (Actualización visual) ---

    // Aqui restamos uno al contador de intentos cada vez que se hace clic
    intentosDisponibles--; 

    // BUSCAMOS el 5 del HTML y lo cambiamos por el nuevo número (4, 3, 2...) es decir que va ir reduciendose el num de instentos 
    const spanRondes = document.getElementById('rondes-restants');
    if (spanRondes) {
        spanRondes.innerText = intentosDisponibles; // el .innerText controla el texto que hay dentro de la etiqueta html 
    }

    // Reutilizo la funcion que creamos en el paso 2 e informamos por la terminal cuántas vidas quedan
    logTerminal("Te quedan " + intentosDisponibles + " intentos.");

    // agregamos una condicion donde  si el jugador ha perdido (llega a 0)
    if (intentosDisponibles === 0) {
        logTerminal("GAME OVER: Te has quedado sin intentos.", "error");
        
        // Bloqueamos el botón para que no pueda seguir pulsando
        botonEnviar.disabled = true;
        botonEnviar.innerText = "BLOQUEADO";
    }
});
//parte josep:
let intentosDisponibles = 5;
// Aqui seleccionamos los 4 elementos (code-input) que estan en el html
const selects = document.querySelectorAll('.code-input');

// Aqui lo que hacemos es que recorremos cada selector para añadirle las opciones del 0 al 9
selects.forEach(select => {
    for (let i = 0; i <= 9; i++) {
        const opt = document.createElement('option');
        opt.value = i;     
        opt.textContent = i; 
        select.appendChild(opt); 
    }
});
<<<<<<< HEAD
// FUNCIÓN 1: Generar un código secreto aleatorio de 4 dígitos
function generarCodigoAleatorio() {
    const Codigo = [];
    for (let i = 0; i < 4; i++) {
        const numAleatorio = Math.floor(Math.random() * 10); // número entre 0 y 9
        Codigo.push(numAleatorio);
    }
    return Codigo;
}

// Al abrir la pagina se genera un codigo secreto aleatorio y se guarda en la variable 'codigoSecreto'
const CodigoSecreto = generarCodigoAleatorio();

// Líneas de prueba: muestra el código en consola para verificar que funciona f12(abrimos consola) refresh para ver si cambia el numero.
// quitar estas lineas antes de entregar el proyecto final, ya que el código no se tiene que mostrar al jugador.
console.log("Codigo secreto:", CodigoSecreto);
//Para probarlo abre el juego en el navegador, pulsa **F12** para abrir las herramientas de desarrollador, ve a la pestaña **Consola** y deberías ver algo como:

//Codigo secreto: [3, 7, 1, 9]
//borrar hasta aqui o dejar como comentario.

// FUNCIÓN 2: Algoritmo de validación (dos pasadas)
function validarIntento(intentoUsuario, codigoSecreto) {
    const pistas = [];           // aquí guardamos las pistas resultado: 1, Ø, ×
    const codigoPendiente = [];  // copia del código secreto para "tachar" números ya usados
    const intentoPendiente = []; // copia del intento para "tachar" números ya usados
    // PRIMERA PASADA: buscar posicion y numeros correctos 
    for (let i = 0; i < 4; i++) {
        if (intentoUsuario[i] === codigoSecreto[i]) {
            pistas.push('1');
            codigoPendiente.push(null);   // tachamos el número del código secreto
            intentoPendiente.push(null);  // tachamos el número del intento
        } else {
            codigoPendiente.push(codigoSecreto[i]);   // lo dejamos pendiente
            intentoPendiente.push(intentoUsuario[i]); // lo dejamos pendiente
        }
    }
    // --- SEGUNDA PASADA: buscar números correctos mal colocados (Ø)
    for (let i = 0; i < 4; i++) {
        if (intentoPendiente[i] === null) continue; // ya fue marcado como '1', lo saltamos
        const pos = codigoPendiente.indexOf(intentoPendiente[i]); // ¿existe este número en el código?
        if (pos !== -1) {
            pistas.push('Ø');
            codigoPendiente[pos] = null; // lo tachamos para no reutilizarlo
        } else {
            pistas.push('×');
        }
    }
    return pistas;
}
//console.log(validarIntento([1, 2, 3, 4], [1, 2, 3, 4])); console.log de prueba de consola para ver si funciona.

// FUNCIÓN 3: Comprobación de final de juego
function comprobarFinDeJuego(pistas, intentosRestantes) {
    // Comprobamos si el jugador ha ganado
    // .every() recorre el array y comprueba que TODOS los elementos cumplan la condición
    // Si los 4 elementos son '1' significa que acertó todo → victoria
    const hasGanado = pistas.every(pista => pista === '1');
    if (hasGanado) {
        return 'victoria';
    }
    // Si no ha ganado comprobamos si le quedan intentos
    // Si intentosRestantes llega a 0 → derrota
    if (intentosRestantes === 0) {
        return 'derrota';
    }
    // Si no ha ganado y todavía le quedan intentos → el juego continúa
    return 'continuar';
}
// Prueba para verificar que funciona
//console.log(comprobarFinDeJuego(['1','1','1','1'], 3)); // esperado: 'victoria'
//console.log(comprobarFinDeJuego(['1','Ø','×','1'], 0)); // esperado: 'derrota'
//console.log(comprobarFinDeJuego(['1','Ø','×','1'], 2)); // esperado: 'continuar'


