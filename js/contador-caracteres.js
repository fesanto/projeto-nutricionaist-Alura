var campoPostagem = document.querySelector("#corpo-postagem");
campoPostagem.addEventListener("input", atualizaCaracteres);

function atualizaCaracteres() {
    var postagem = campoPostagem.value;
    var caracteres = postagem.length;

    var contador = document.querySelector("#numero-caracteres");
    contador.innerHTML = caracteres;
}