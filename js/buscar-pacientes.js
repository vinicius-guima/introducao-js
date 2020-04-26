const API = "https://api-pacientes.herokuapp.com";

var btnBuscar = document.querySelector("#buscar-pacientes");

btnBuscar.addEventListener("click", function () {
    console.log("buscando pacientes ...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", API + "/pacientes"); // abre a requisição 

    xhr.addEventListener("load", function () {
        var response = xhr.responseText;
        console.log(response);
        console.log(typeof response); // string

        var pacientes = JSON.parse(response); // parseia a response para Json
        console.log(typeof pacientes); // object

        pacientes.forEach(paciente => {
            adicionaPAcienteNaTabela(paciente);
        });


    });

    xhr.send();


});

