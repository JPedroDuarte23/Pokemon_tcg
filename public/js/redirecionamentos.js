function redirecionar_home() {
    window.location.href = "index.html"
}
function redirecionar_cadastro() {
    window.location.href = "Login_Cadastro.html"
}
function redirecionar_ferramenta() {
    location.hash = `#div_secao_ferramenta`
}
function redirecionar_aulas() {
    window.location.href = "https://tcg.pokemon.com/pt-br/top-deck-academy/"
}
function redirecionar_info(){
    aguardar();
    setTimeout(() => {
        finalizarAguardar();
        window.location.href = "Dash_informacoes.html"
    },1000)
}