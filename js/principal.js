var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent=("igor nutricao");

var paciente = document.querySelector("#primeiro-paciente");
for (var i = 0;i < pacientes.length; i++) {
    console.log(pacientes[i]);

}


var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhvalido = true;
var alturaEhvalida = true;

if (peso <= 0 || peso > 1000){
    console.log("peso inválido");
    pesoEhvalido = false;
    tdImc.textContent = "peso inválido!";
}

if (altura <= 0 || altura > 3.00){
    console.log("altura inválida");
    alturaEhvalida = false;
    tdImc.textContent = "altura inválida!";

}

if (alturaEhvalida && pesoEhvalido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}