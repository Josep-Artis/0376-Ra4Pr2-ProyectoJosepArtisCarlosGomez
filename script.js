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