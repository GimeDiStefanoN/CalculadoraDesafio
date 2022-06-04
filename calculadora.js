
// console.log(suma.sumar(2,2));
// console.log(resta.restar(3,2));
// console.log(multiplicacion.multiplicar(4,2));
// console.log(multiplicacion.multiplicar(4,0));
// console.log(division.dividir(10,5));
// console.log(division.dividir(10,0));
alert('Vamos a calcular');

//DEFINICION DE VARIABLES
const resultado= document.querySelector("resultado");
const uno= document.querySelector("uno");
const dos= document.querySelector("dos");
const tres= document.querySelector("tres");
const cuatro= document.querySelector("cuatro");
const cinco= document.querySelector("cinco");
const seis= document.querySelector("seis");
const siete= document.querySelector("siete");
const ocho= document.querySelector("ocho");
const nueve= document.querySelector("nueve");
const cero= document.querySelector("cero");
const dividir= document.querySelector("dividir");
const multiplicar= document.querySelector("multiplicar");
const restar= document.querySelector("restar");
const sumar= document.querySelector("sumar");
const borrar= document.querySelector("borrar");
const igual= document.querySelector("igual");

//FUNCIONES

// const suma = require('./sumar');
// const resta = require('./restar');
// const multiplicacion = require('./multiplicar');
// const division = require('./dividir');

//EVENTOS

// uno.addEventListener('click',()=>{
//     resultado.textContent = resultado.textContent + "1";
// });

// dos.addEventListener('click',()=>{
//     resultado.textContent = resultado.textContent + "2";
// });

// tres.addEventListener('click',()=>{
//     resultado.textContent = resultado.textContent + "3";
// });

window.addEventListener('keydown',(event)=>{
    if (event.key=="1"){
        resultado.textContent = resultado.textContent + "1";
    }
});
