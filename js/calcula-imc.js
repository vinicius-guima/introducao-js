var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length;i++){
  var paciente = pacientes[i];

  var nome = paciente.querySelector(".info-nome");
  nome = nome.textContent;

  var peso = paciente.querySelector(".info-peso");
  peso = peso.textContent;

  var altura = paciente.querySelector(".info-altura");
  altura = altura.textContent;

  var imc = paciente.querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log("Peso Inválido");
    pesoValido = false;
    imc.textContent = "peso inválido";
    paciente.classList.add("paciente-invalido")
  }

  if (!alturaValida) {
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

function validaPeso(peso){
  if (peso >= 0 && peso <= 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if (altura > 0 && altura <= 3.0){
    return true;
  }else{
    return false;
  }
}
