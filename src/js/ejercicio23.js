import { superarLimite } from '../services/servicesEj23.js';

const entradaTexto = document.querySelector('#entradaTexto');
const salidaTexto = document.querySelector('#salidaTexto');

entradaTexto.addEventListener('input', (e) => {
    const textoIngresado = e.target.value;
    
    salidaTexto.textContent = textoIngresado;

    if (superarLimite(textoIngresado)) {
        salidaTexto.classList.add('limite-superado');
    } else {
        salidaTexto.classList.remove('limite-superado');
    }
});