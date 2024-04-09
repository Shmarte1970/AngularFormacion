import JsBarcode from 'jsbarcode';

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
const numeroBase = '8414892308984'; // Empieza con 8 y tiene 11 dígitos
const digitoControl = calcularDigitoControl(numeroBase);

// Agrega el dígito de control al final del número base
const codigoEAN13 = numeroBase + digitoControl.toString();

// Genera el código de barras
const elementoContenedor = document.getElementById('codigo-de-barras');

if (elementoContenedor) {
    JsBarcode(elementoContenedor, codigoEAN13, {
        format: 'ean13',
        displayValue: true
    });
} else {
    console.error('No se encontró el elemento contenedor.');
}
