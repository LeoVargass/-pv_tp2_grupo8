const boton = document.querySelector("#btnCambiarColor");

const colores = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink"
];

const cambiarColor = () => {
    const numeroAleatorio = Math.floor(Math.random() * colores.length);
    const colorElegido = colores[numeroAleatorio];

    document.body.style.backgroundColor = colorElegido;

    console.log(`El color de fondo cambió a: ${colorElegido}`);
};

boton.addEventListener("click", cambiarColor);