// sessão

function validarSessao() {

    var id = sessionStorage.ID_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var id_usuario = document.getElementById("idInput");
    var nome_usuario = document.getElementById("nome_usuario")
    if (id != null && nome != null) {
        nome_usuario.innerHTML = `${nome} &nbsp <i class="fa-solid fa-angle-down fa-xs"></i>`
        id_usuario.setAttribute('value', id)
    } else {
        window.location = "../login_cadastro.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login_cadastro.html";
}


