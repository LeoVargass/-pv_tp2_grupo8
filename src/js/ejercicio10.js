<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 10 - Promedio de números</title>
</head>
<body>
    <script>
        // Solicitar cantidad de números a ingresar
        let cantidad = parseInt(prompt("¿Cuántos números desea ingresar?"));
        
        // Validar que sea un número válido y positivo
        while (isNaN(cantidad) || cantidad <= 0) {
            cantidad = parseInt(prompt("Por favor, ingrese un número válido mayor a 0:"));
        }
        
        const numeros = [];
        let suma = 0;
        
        // Pedir los números de forma iterativa
        for (let i = 0; i < cantidad; i++) {
            let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
            
            // Validar que sea un número válido
            while (isNaN(numero)) {
                numero = parseInt(prompt(`Por favor, ingrese un número válido (${i + 1}):`));
            }
            
            numeros.push(numero);
            suma += numero;
        }
        
        const promedio = suma / cantidad;
        
        // Mostrar resultados usando template strings
        document.write(`
            <h2>Resultados:</h2>
            <p><strong>Números ingresados:</strong> ${numeros.join(', ')}</p>
            <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
        `);
    </script>
</body>
</html>
