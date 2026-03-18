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

    // NOTA PARA EL FUTURO:
    // Aquí es donde llamaremos a la lógica de tu compañero (Estudiante B)
    // para saber si el código es correcto o no.
});