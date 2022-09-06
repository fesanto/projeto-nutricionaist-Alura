var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            //usando expressões regulares para que a busca fique mais interativa
            //O primeiro parâmetro é o padrão (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque).
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                // if (nome != this.value) {
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }

            //se não quiser usar regEx, podemos usar a função substring
            // var comparavel = nome.substr(0, this.value.length);
            // if (!(this.value == comparavel)) {
            //     paciente.classList.add("invisivel");
            // } else {
            //     paciente.classList.remove("invisivel");
            // }

            //há também o problema do case sensitive, para resolver isso caso queira fazer a comparação sem regEx
            // var comparavel = nome.substr(0, this.value.length);
            // var comparavelMinusculo = comparavel.toLowerCase();
            // var valorDigitadoMinusculo = this.value.toLowerCase();

            // if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
            //     paciente.classList.add("invisivel");
            // } else {
            //     paciente.classList.remove("invisivel");
            // }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove('invisivel');
        }
    }
});