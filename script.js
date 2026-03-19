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
