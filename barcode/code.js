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
var numeroBase = '8414892308984'; // Número base
var combinaciones = [];
// Generar 20 combinaciones
for (var i = 0; i < 20; i++) {
    var digitoControl = calcularDigitoControl(numeroBase + i.toString());
    var codigoEAN13 = numeroBase + i.toString() + digitoControl.toString();
    combinaciones.push(codigoEAN13);
}
// Mostrar las combinaciones generadas
console.log('Combinaciones generadas:');
combinaciones.forEach(function (combinacion, index) {
    console.log("".concat(index + 1, ". ").concat(combinacion));
});
