const API = "https://api-pacientes.herokuapp.com";

var btnBuscar = document.querySelector("#buscar-pacientes");

btnBuscar.addEventListener("click", function () {
    console.log("buscando pacientes ...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", API + "/pacientes"); // abre a requisição 

    xhr.addEventListener("load", function () {

        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){ //verfica a resposta 
        erroAjax.classList.add("invisivel");
        var response = xhr.responseText; //testo da resposta da api
        console.log(response);
        console.log(typeof response); // string

        var pacientes = JSON.parse(response); // parseia a response para Json
        console.log(typeof pacientes); // object

        pacientes.forEach(paciente => {
            adicionaPAcienteNaTabela(paciente);
        });
    }else{
        erroAjax.classList.remove("invisivel");
    }
    });
    xhr.send(); // envia a requisição
});

