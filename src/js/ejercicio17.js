 import { contarLetraA } from "./funciones17.js";

const input = document.querySelector("#texto");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

boton.addEventListener("click", () => {

    const textoIngresado = input.value;

    const cantidad = contarLetraA(textoIngresado);

    resultado.textContent =
        `La letra "a" aparece ${cantidad} veces`;

    console.log(`Cantidad de letras a: ${cantidad}`);

});