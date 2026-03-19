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


