// array de edades
const edades = [18, 20, 22, 19, 25, 30, 17, 21];

let suma = 0;

// recorrer y mostrar edades
edades.forEach(edad => { 
    console.log(`Edad: ${edad}`);
    suma += edad;
});

// calcular promedio
const promedio = suma / edades.length;

console.log(`El promedio de las edades es: ${promedio}`);
//Marcos Ovejero