// var div_pop_up = document.getElementById('div_pop_up')
var tabela_padrao = `
    <div class="titulo_caixa_graficos"><h2>Coleção</h2></div>
    <div id="cartasColecao" class="caixa_colecao">
      <table id="tabela">
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Raridade</th>
            <th>Set</th>
            <th>Numero</th>
        </tr>
      </thead>
      <tbody id="corpo_tabela">
        </tbody>
    </table>
    </div>
    `
var tabela_decks = `    <div class="titulo_caixa_graficos"><h2>Coleção</h2></div>
<div id="cartasColecao" class="caixa_colecao">
  <table id="tabela">
    <thead>
      <tr>
        <th>Imagem</th>
        <th>Nome</th>
        <th>Tipo</th>
    </tr>
  </thead>
  <tbody id="corpo_tabela">
    </tbody>
</table>
</div>`
var carta_detalhes = `
    <div id="blur">
        <div class="pop_up">
            <img src="" alt="">
            <div class="textos">
                <h3>Nome_Pokemon</h3>
                <hr>
                <h3>Subtipos</h3>
                <h4>---------</h4>
                <div class="quadrados">
                    <h3>Tipo</h3>
                    <h4>---------</h4>
                    <h3>Raridade</h3>
                    <h4>---------</h4>
                    <h3>Series</h3>
                    <h4>--------</h4>
                    <h3>coleção</h3>
                    <h4>-------</h4>
                </div>
            </div>
            <form action="/adicionar-carta" method="post">
                <label for="IDDeckInput">Nome do Deck</label>
                <input id="IDDeckInput" name="IDDeckInput">
                <input style="display: none" name="idCartaValue" id="idCartaValue">
                <button type="submit" id="botao_add_carta">Adicionar ao Deck</button>
            </form>
        </div>
    </div>`
var formulario_padrao = 0

function validarSessao() {
    formulario_padrao = div_pop_up.innerHTML
    var id = sessionStorage.ID_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

        var id_usuario = document.getElementById("idInput");

   
    var nome_usuario = document.getElementById("nome_usuario")
    if (id != null && nome != null) {
        nome_usuario.innerHTML = `${nome} &nbsp <i class="fa-solid fa-angle-down fa-xs"></i>`
        id_usuario.setAttribute('value', id);
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
function registrar() {
    div_pop_up.style.display = "flex"
}
function voltar() {
    div_pop_up.style.display = "none"
}

function query_colecao(seletor) {
    var id = Number(idInput.value)
    var caixaGraficos = document.getElementById('caixaGraficos');
    var cartasDoUsuario = 0;
    fetch(`http://localhost:3000/registros`)
        .then((response) => response.json())
        .then((data) => {
            var tbody = document.getElementById('corpo_tabela');
            if (seletor == 1) {

                caixaGraficos.innerHTML = `
                 <div  class="titulo_caixa_graficos"><h2>Cartas Registradas</h2></div>
                <div id="cartasRegistradas"></div>
                 `
                cartasDoUsuario = data.filter(registro => registro.fkUsuario === id);
                var cartasRegistradas = document.getElementById('cartasRegistradas')
                cartasDoUsuario.forEach((registro) => {
                    
                    var imagem = document.createElement('img');
                    imagem.src = registro.imagemURL;
                    cartasRegistradas.appendChild(imagem);
                });
            } else {
                caixaGraficos.innerHTML = tabela_padrao
                var tbody = document.getElementById('corpo_tabela')
                if (seletor == 2) {
                    cartasDoUsuario = data.filter(registro => registro.fkUsuario === id);
                } else if (seletor == 3) {

                    cartasDoUsuario = data.filter(registro => registro.fkUsuario === id
                        && (registro.raridade === "Rare Ultra"
                            || registro.raridade === "Rare Rainbow"
                            || registro.raridade === "Rare Secret"
                            || registro.raridade === "Hyper Rare"));

                } else if (seletor == 4) {

                    cartasDoUsuario = data.filter(registro => registro.fkUsuario === id
                        && (registro.raridade === "Rare"
                            || registro.raridade === "Rare Holo"
                            || registro.raridade === "Rare Holo V"
                            || registro.raridade === "Rare ACE"
                            || registro.raridade === "Rare BREAK"
                            || registro.raridade === "Rare Holo"
                            || registro.raridade === "Rare Holo EX"
                            || registro.raridade === "Rare Holo GX"
                            || registro.raridade === "Rare Holo LV.X"
                            || registro.raridade === "Rare Holo Star"
                            || registro.raridade === "Rare Holo V"
                            || registro.raridade === "Rare Holo VMAX"
                            || registro.raridade === "Rare Prime"
                            || registro.raridade === "Rare Prism Star"
                            || registro.raridade === "Rare Rainbow"
                            || registro.raridade === "Rare Secret"
                            || registro.raridade === "Rare Shining"
                            || registro.raridade === "Rare Shiny"
                            || registro.raridade === "Rare Shiny GX"));

                } else if (seletor == 5) {

                    cartasDoUsuario = data.filter(registro => registro.fkUsuario === id
                        && registro.raridade === "Uncommon");

                } else if (seletor == 6) {
                    cartasDoUsuario = data.filter(registro => registro.fkUsuario === id
                        && registro.raridade === "Common");
                }
                cartasDoUsuario.forEach((registro) => {
                    var linha = document.createElement('tr');
                    var idCell = document.createElement('td')
                    var nomeCell = document.createElement('td');
                    var imagemCell = document.createElement('td');
                    var tipoCell = document.createElement('td');
                    var raridadeCell = document.createElement('td');
                    var setCell = document.createElement('td')
                    var numeroCell = document.createElement('td')
                    var botaoCell = document.createElement('td')

                    idCell.style.display = "none"
          
                    // Colocando imagem no td
                    var imagem_consulta = document.createElement('img');
                    imagem_consulta.src = registro.imagemURL;
                    imagemCell.appendChild(imagem_consulta);

                    var botao_deck = document.createElement('button')
                    botao_deck.setAttribute('class', 'select_card_btn')
                    botao_deck.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;
                    botao_deck.addEventListener('click', function() {
                        var id = sessionStorage.ID_USUARIO
                        div_pop_up.innerHTML = carta_detalhes;
                        idCartaValue.setAttribute('value', registro.idCarta)
                        var addCarta = document.getElementById('botao_add_carta')
                        registrar();
                    });

                    idCell.innerHTML = registro.idCarta;
                    nomeCell.innerHTML = registro.nome;
                    tipoCell.innerHTML= registro.tipo;
                    raridadeCell.innerHTML = registro.raridade;
                    setCell.innerHTML = registro.nomeSet
                    numeroCell.innerHTML = registro.numero
          
                    // Adicionado tudo com appendChild (linha[imagem, nome, tipo])
                    botaoCell.appendChild(botao_deck);
                    linha.appendChild(idCell)
                    linha.appendChild(imagemCell);
                    linha.appendChild(nomeCell);
                    linha.appendChild(tipoCell);
                    linha.appendChild(raridadeCell);
                    linha.appendChild(setCell);
                    linha.appendChild(numeroCell)
                    linha.appendChild(botaoCell);
                    tbody.appendChild(linha);
          
            
                    imagem_consulta.classList.add('imagem_tabela');
                });
                
            }
            // var linhasParaTabela = criarLinhasParaTabela(cartasDoUsuario);
            
        })
        .catch((error) => {
            console.error('Erro ao buscar registros no servidor:', error);
        });
        var botaoAtivado = document.querySelector('.botao_ativado')
        var botao = document.getElementById('botao-'+ seletor);
        botaoAtivado.classList.remove("botao_ativado");
        botao.classList.add("botao_ativado");
        addCarta.addEventListener('click', voltar)
}
function query_decks(seletor) {
    var id = Number(idInput.value)
    var caixaGraficos = document.getElementById('caixaGraficos');
    var decksDoUsuario = 0;
    fetch(`http://localhost:3000/decks`)
        .then((response) => response.json())
        .then((data) => {
            caixaGraficos.innerHTML = tabela_decks
            var tbody = document.getElementById('corpo_tabela');
            if (seletor == 1) {
                decksDoUsuario = data.filter(registro => registro.fkUsuario === id);
            } 
            decksDoUsuario.forEach((registro) => {
                var linha = document.createElement('tr');
                var idCell = document.createElement('td')
                var nomeCell = document.createElement('td');
                var imagemCell = document.createElement('td');
                var tipoCell = document.createElement('td');

                idCell.style.display = "none"
      
                // Colocando imagem no td
                var imagem_consulta = document.createElement('img');
                imagem_consulta.src = registro.imagem;
                imagemCell.appendChild(imagem_consulta);

                idCell.innerHTML = registro.idDeck;
                nomeCell.innerHTML = registro.nomeDeck;
                tipoCell.innerHTML= registro.tipoPrincipal;
      
                // Adicionado tudo com appendChild (linha[imagem, nome, tipo])
                linha.appendChild(idCell)
                linha.appendChild(imagemCell);
                linha.appendChild(nomeCell);
                linha.appendChild(tipoCell);
                tbody.appendChild(linha);
      
                imagem_consulta.classList.add('imagem_tabela');
            });
            
        })
}

function mostrar_registros() {
    var caixaGraficos = document.getElementById('caixaGraficos');
    caixaGraficos.innerHTML = `
    <div  class="titulo_caixa_graficos"><h2>Cartas Registradas</h2></div>
    <div id="cartasRegistradas"></div>
    `
    fetch(`/cartas/informacoes`)
        .then(response => response.json())
        .then(data => {
            // Criar o HTML para a carta com base nos dados recebidos do servidor
            for (i = 0; i <= data.length - 1; i++) {
                document.getElementById('cartasRegistradas').innerHTML += `
          <img src="${data[i].images.small}">
      `;
            }
        }).catch(error => {
            console.log(error);
        });
}




