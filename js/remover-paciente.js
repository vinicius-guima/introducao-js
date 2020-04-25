var paciente = document.querySelector(".paciente");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dbclick", function(){
        console.log("fui clicado");
        
    })
});