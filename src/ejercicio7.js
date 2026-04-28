const nombres = ["Ana", "Martina", "Lucas", "Santiago", "Sol", "Valentina"];

let nombreMasLargo = nombres[0];

nombres.forEach(nombre => {
    console.log(nombre);

    if (nombre.length > nombreMasLargo.length) {
        nombreMasLargo = nombre;
    }
});

console.log(`El nombre más largo es: ${nombreMasLargo}`);