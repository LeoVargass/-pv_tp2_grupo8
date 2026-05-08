export const contarLetraA = (texto) => {

    let contador = 0;

    for (let letra of texto.toLowerCase()) {

        if (letra === "a") {
            contador++;
        }

    }

    return contador;
};