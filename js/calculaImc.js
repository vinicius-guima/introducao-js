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
    var massa = calculaImc(peso, altura);
    imc.textContent = massa;
  }
}

function calculaImc(peso, altura){
  var imc =  peso/(altura*altura);
  return imc.toFixed(2);
}
