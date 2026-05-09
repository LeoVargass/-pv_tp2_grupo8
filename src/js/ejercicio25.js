import { cambiarColorFondo } from "../services/servicesEj25.js";

const cuerpo = document.getElementById("cuerpo");
const btnCambiarColor = document.getElementById("btnCambiarColor");

btnCambiarColor.addEventListener("click", () => {
    cambiarColorFondo(cuerpo);
});