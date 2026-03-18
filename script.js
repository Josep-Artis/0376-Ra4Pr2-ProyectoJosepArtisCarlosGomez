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