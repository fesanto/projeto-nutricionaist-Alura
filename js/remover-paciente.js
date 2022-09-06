var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

//escutando eventos pelo pai para depois saber qual filho foi clicado
tabela.addEventListener("dblclick", function (event) {

    var alvoDoEvento = event.target;
    var paiDoAlvo = alvoDoEvento.parentNode;

    //removerá apenas elemento que for td
    if (alvoDoEvento.tagName == "TD") {
        //animação da remoção
        paiDoAlvo.classList.add("fadeOut");

        setTimeout(function () {
            paiDoAlvo.remove();
        }, 300);
        //event.target.parentNode.remove();
    }

});

//se o evento de escuta estivesse nos filhos, ficaria assim
// pacientes.forEach(function (paciente) {
//     paciente.addEventListener("dblclick", function () {
//         this.remove();
//     });
// });