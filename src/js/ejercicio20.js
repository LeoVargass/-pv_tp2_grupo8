//ASISTENCIA 30/04/26

import { servicioJoseMesconi } from "../services/serviceJoseMesconi.js";
import { servicioMarcosOvejero } from "../services/serviceMarcosOvejero.js";




//Logica de negocio del ejercicio 20
import { guardarEstudianteEnArray } from "../services/servicesEjercicio20.js";
import { MostrarEstudiante } from "../services/servicesEjercicio20.js";
//Puede tener servicios o funciones






document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector('#form-carga');
    const contenedorResultado = document.querySelector('#resultado');
/*     const listaEstudiantes = [];
 */

    //Capturar datos
    formulario.addEventListener('submit', (evento) => {
        
        evento.preventDefault();

        const inputNombre = document.querySelector('#nombre');
        const inputApellido = document.querySelector('#apellido');
        const inputLU = document.querySelector('#LU');

        const nombreVal = inputNombre.value;
        const apellidoVal = inputApellido.value;
        const luVal = inputLU.value;

        //console.log(inputNombre.id);

        const estudiante = {
            id: Date.now(),
            nombre: nombreVal,
            apellido: apellidoVal,
            lu: luVal
        };


        //Llamada a la función del servicio

        guardarEstudianteEnArray(estudiante);



/*         //llamada
        listaEstudiantes.unshift(estudiante);

        console.log(listaEstudiantes.find(
            estudiante => estudiante.lu == "234" //Vuelve como valor de texto al input
        ));


        console.log(listaEstudiantes);
*/


        //Crear el nuevo elemento
        contenedorResultado.innerHTML = '';

        /*  const fichaInfo = document.createElement('div');
        fichaInfo.className = 'info-box';

        fichaInfo.innerHTML = `
            <h3>Los datos ingresados son:</h3>
            <p><strong>Nombre:</strong> ${nombreVal}</p>
            <p><strong>Apellido:</strong> ${apellidoVal}</p>
            <p><strong>Libreta Universitaria:</strong> ${luVal}</p>
`; */

        //4. Agregar elemento al DOM
        contenedorResultado.appendChild(MostrarEstudiante(nombreVal, apellidoVal, luVal));

         formulario.reset();
    });
});