let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length;i++){
  let paciente = pacientes[i];

  let nome = paciente.querySelector(".info-nome");
  nome = nome.textContent;

  let peso = paciente.querySelector(".info-peso");
  peso = peso.textContent;

  let altura = paciente.querySelector(".info-altura");
  altura = altura.textContent;

  let imc = paciente.querySelector(".info-imc");

  let pesoValido = true;
  let alturaValida = true;

  if (peso < 0 || peso > 500) {
    console.log("Peso Inválido");
    pesoValido = false;
    imc.textContent = "peso inválido";
    paciente.classList.add("paciente-invalido")
  }

  if (altura < 0 || altura > 3.00) {
    console.log("altura Inválida");
    alturaValida = false;
    imc.textContent = "altura inválida!";
    paciente.classList.add("paciente-invalido")
  }

  if(pesoValido && alturaValida){
    var massa = peso/(altura*altura);
    imc.textContent = massa.toFixed(2);
  }
}

let btn = document.querySelector("#adicionar-paciente");
console.log(btn);

btn.addEventListener("click",function (event) {
  event.preventDefault();

     var form = document.querySelector("#form-add")

     var nome = document.getElementById('nome').value;
     var peso = document.getElementById('peso').value;
     var altura = document.getElementById('altura').value;
     var gordura = document.getElementById('gordura').value;

     var pacienteTr = document.createElement("tr");

     var nomeTd = document.createElement("td");
     var pesoTd = document.createElement("td");
     var alturaTd = document.createElement("td");
     var gorduraTd = document.createElement("td");
     var imcTd = document.createElement("td");

     nomeTd.textContent = nome;
     pesoTd.textContent = peso;
     alturaTd.textContent = altura;
     gorduraTd.textContent = gordura;

     pacienteTr.appendChild(nomeTd);
     pacienteTr.appendChild(pesoTd);
     pacienteTr.appendChild(alturaTd);
     pacienteTr.appendChild(gorduraTd);

     var tabela = document.querySelector("#tabela-pacientes");

     tabela.appendChild(pacienteTr);
});
