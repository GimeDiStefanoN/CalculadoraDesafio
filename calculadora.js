const suma = require('./sumar');
const resta = require('./restar');
const multiplicacion = require('./multiplicar');
const division = require('./dividir');

console.log(suma.sumar(2,2));
console.log(resta.restar(3,2));
console.log(multiplicacion.multiplicar(4,2));
console.log(multiplicacion.multiplicar(4,0));
console.log(division.dividir(10,5));
console.log(division.dividir(10,0));
