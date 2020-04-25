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

  let pesoValido = validaPeso(peso);
  let alturaValida = validaAltura(altura);

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
