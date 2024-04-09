"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsbarcode_1 = require("jsbarcode");
// Función para calcular el dígito de control
function calcularDigitoControl(codigo) {
    var sumaPares = 0;
    var sumaImpares = 0;
    for (var i = 0; i < codigo.length; i++) {
        if (i % 2 === 0) {
            sumaImpares += parseInt(codigo[i]);
        }
        else {
            sumaPares += parseInt(codigo[i]) * 3;
        }
    }
    var sumaTotal = sumaPares + sumaImpares;
    var digitoControl = (10 - (sumaTotal % 10)) % 10;
    return digitoControl;
}
// Número base sin el dígito de control
var numeroBase = '8414892308984'; // Empieza con 8 y tiene 11 dígitos
var digitoControl = calcularDigitoControl(numeroBase);
// Agrega el dígito de control al final del número base
var codigoEAN13 = numeroBase + digitoControl.toString();
// Genera el código de barras
var elementoContenedor = document.getElementById('codigo-de-barras');
if (elementoContenedor) {
    (0, jsbarcode_1.default)(elementoContenedor, codigoEAN13, {
        format: 'ean13',
        displayValue: true
    });
}
else {
    console.error('No se encontró el elemento contenedor.');
}
