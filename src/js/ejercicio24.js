// ejercicio19.js

import { actualizarResultado } from "./funciones19.js";

const radios = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.getElementById('resultado');

radios.forEach((radio) => {
    radio.addEventListener('change', (e) => {
        actualizarResultado(resultado, e.target.value);
    });
});