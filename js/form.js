let btn = document.querySelector("#adicionar-paciente");

btn.addEventListener("click",function (event) {
  event.preventDefault();
     var form = document.querySelector("#form-add")
     console.log(form);
     var paciente = ObtemPaciente(form);
     let pacienteTr = montaTr(paciente);
     var tabela = document.querySelector("#tabela-pacientes");
     tabela.appendChild(pacienteTr);

     console.log(form);
     form.reset();
});


function ObtemPaciente(form) {
  var paciente = {
      nome: document.getElementById('nome').value,
      peso: document.getElementById('peso').value,
      altura: document.getElementById('altura').value,
      gordura: document.getElementById('gordura').value,
      imc: calculaImc(document.getElementById('peso').value, document.getElementById('altura').value)
      }
      return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente")

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}
