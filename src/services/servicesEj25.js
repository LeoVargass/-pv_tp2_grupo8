export const obtenerColorAleatorio = () => {
    const colores = ["blue", "red", "green", "yellow", "purple", "orange", "pink"];

    const posicionAleatoria = Math.floor(Math.random() * colores.length);

    return colores[posicionAleatoria];
};

export const cambiarColorFondo = (elemento) => {
    const color = obtenerColorAleatorio();

    elemento.style.backgroundColor = color;

    console.log(`El color de fondo cambió a: ${color}`);
};