// funciones19.js - Funciones del ejercicio 19

export const obtenerMensaje = (lenguaje) => {
    const descripciones = {
        javascript: "JavaScript: lenguaje de scripting para la web, dinámico y multiparadigma.",
        python: "Python: lenguaje de alto nivel, simple y poderoso, ideal para ciencia de datos e IA.",
        java: "Java: lenguaje orientado a objetos, robusto y multiplataforma.",
        cpp: "C++: lenguaje de alto rendimiento, base de sistemas operativos y videojuegos.",
        typescript: "TypeScript: superset tipado de JavaScript, ideal para proyectos grandes."
    };
    return descripciones[lenguaje] ?? "Seleccioná un lenguaje para ver su descripción.";
};

export const actualizarResultado = (contenedor, lenguaje) => {
    const mensaje = obtenerMensaje(lenguaje);
    contenedor.textContent = mensaje;
    console.log(`Lenguaje seleccionado: ${lenguaje} → ${mensaje}`);
};
