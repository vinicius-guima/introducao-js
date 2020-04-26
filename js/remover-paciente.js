var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    console.log(event.target);

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(()=> {//faz o js esperar para fazer a função 
        event.target.parentNode.remove();
        
    },500);
});

//var pacientes = document.querySelectorAll(".paciente");
/* pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });
}); */