let btn = document.querySelector("#adicionar-paciente");
btn.addEventListener("click", function (event) {
  event.preventDefault(); //prevnine o recarregamento da pagina
  var form = document.querySelector("#form-add")
  var paciente = ObtemPaciente(form);
  
  var erros = validaPaciente(paciente);
  
  if (erros.length > 0) {
    exibeErros(erros);
    return;
  }
  
  adicionaPAcienteNaTabela(paciente);
  form.reset();
  
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

function adicionaPAcienteNaTabela(paciente) {
  let pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

}


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
  pacienteTr.classList.add("paciente");

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

function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0)
    erros.push("insira um nome ");

  if (paciente.peso.length == 0)
    erros.push("insira um peso ");

  if (paciente.altura.length == 0)
    erros.push("insira uma altura ");

  if (paciente.gordura.length == 0)
    erros.push("insira porcentagem de gordura ");

  if (!validaPeso(paciente.peso))
    erros.push("insira um peso valido");

  if (!validaAltura(paciente.altura))
    erros.push("insira uma altura valida");

  return erros;
}

function exibeErros(erros) {

  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
