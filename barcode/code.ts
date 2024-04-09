// Función para calcular el dígito de control
function calcularDigitoControl(codigo: string): number {
    let sumaPares = 0;
    let sumaImpares = 0;

    for (let i = 0; i < codigo.length; i++) {
        if (i % 2 === 0) {
            sumaImpares += parseInt(codigo[i]);
        } else {
            sumaPares += parseInt(codigo[i]) * 3;
        }
    }

    const sumaTotal = sumaPares + sumaImpares;
    const digitoControl = (10 - (sumaTotal % 10)) % 10;

    return digitoControl;
}

// Número base sin el dígito de control
const numeroBase = '8414892308984'; // Número base
const combinaciones: string[] = [];

// Generar 20 combinaciones
for (let i = 0; i < 20; i++) {
    const digitoControl = calcularDigitoControl(numeroBase + i.toString());
    const codigoEAN13 = numeroBase + i.toString() + digitoControl.toString();
    combinaciones.push(codigoEAN13);
}

// Mostrar las combinaciones generadas
console.log('Combinaciones generadas:');
combinaciones.forEach((combinacion, index) => {
    console.log(`${index + 1}. ${combinacion}`);
});
