//AJAX - requisição de modo assincrono
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    console.log('buscando...');


    var xhr = new XMLHttpRequest();
    //tipo de requisição e para onde
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    //envio
    xhr.send();
    //evento que escuta resposta carregada
    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");
        //condicional para lidar com eventual erro
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            console.log(resposta);
            console.log(typeof resposta);
            //transformando string em array
            var pacientes = JSON.parse(resposta);
            console.log(pacientes);
            console.log(typeof pacientes);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            })
        } else {
            erroAjax.classList.remove("invisivel");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }

    })
});