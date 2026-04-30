import { servicioSantiagoUrzagaste } from './servicesSantiagoUrzagaste.js';

export const guardarEstudianteEnArray = (estudiante) => {

    const listaEstudiantes = [];
    listaEstudiantes.unshift(estudiante);
    console.log(listaEstudiantes);

    return (listaEstudiantes);


};


export const otraFuncion = () => {



};



export const MostrarEstudiante = (nombreVal, apellidoVal, luVal) => {

        const fichaInfo = document.createElement('div');
        fichaInfo.className = 'info-box';

        fichaInfo.innerHTML = `
            <h3>Los datos ingresados son:</h3>
            <p><strong>Nombre:</strong> ${nombreVal}</p>
            <p><strong>Apellido:</strong> ${apellidoVal}</p>
            <p><strong>Libreta Universitaria:</strong> ${luVal}</p>
        `;

        return (fichaInfo);
};