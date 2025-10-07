var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent=("igor nutricao");


var paciente = document.querySelector("#primeiro-paciente");
var tdnome = document.querySelector(" .info-nome");
var nome = tdnome.textContent;
console.log(nome);


var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(peso);

//07/10/2025
var tdAltura = document.querySelector(".info-altura")
var altura = tdAltura.textContent;
console.log(altura);


var tdImc = paciente.querySelector(".info-imc")
var imc = peso/ (altura * altura);

console.log(imc);