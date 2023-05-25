// var div_pop_up = document.getElementById('div_pop_up')
var jsons_deck = 0;
var tabela_padrao = `
    <div class="titulo_caixa_graficos"><h2>Coleção</h2></div>
    <div id="cartasColecao" class="caixa_colecao">
      <table id="tabela">
        <thead>
          <tr>
            <th class="lateral_esqurda">Imagem</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Raridade</th>
            <th>Set</th>
            <th>Numero</th>
            <th class="lateral_direi"></th>
        </tr>
      </thead>
      <tbody id="corpo_tabela">
        </tbody>
    </table>
    </div>
    `;
var tabela_decks = `    
<div class="titulo_caixa_graficos"><h2>Coleção</h2></div>
<div id="cartasColecao" class="caixa_colecao">
  <table id="tabela">
    <thead>
      <tr>
        <th>ID</th>
        <th>Imagem</th>
        <th>Nome</th>
        <th>Tipo</th>
    </tr>
  </thead>
  <tbody id="corpo_tabela">
    </tbody>
</table>
</div>`;
var carta_detalhes = `
    <div id="blur">
        <div class="pop_up">
        <i class="fa-solid fa-xmark fa-xl" id="i_voltar" onclick="voltar(1)"></i>
        <div class="carta_textos">
            <img src="" alt="" id="imagem_carta_detalhe">
            <div class="textos">
                <h2 id="nomePokeDtlh">Nome_Pokemon</h2>
                <hr>
                <h3 id="subTipoDtlh">Subtipos: </h3>
                <div class="caixa_quadrados">
                <div class="quadrado">
                    <h3>Tipo</h3>
                    <h4 id="tipoDtlh">---------</h4>
                </div> 
                <div class="quadrado">   
                    <h3>Raridade</h3>
                    <h4 id="raridadeDtlh">---------</h4>
                </div>
                <div class="quadrado">
                    <h3>Series</h3>
                    <h4 id="seriesDtlh">--------</h4>
                </div>
                <div class="quadrado">
                    <h3>Coleção</h3>
                    <h4 id="colecaoDtlh">-------</h4>
                </div>
                <div class="quadrado">
                    <h3>Número</h3>
                    <h4 id="numeroDtlh">---------</h4>
                </div> 
                <div class="quadrado">
                    <h3>Deck</h3>
                    <h4 id="fkDeckDtlh">---------</h4>
                </div> 
                </div>
            </div>
            </div>
            <form action="/adicionar-carta" method="post">
            <table class="form_deck">
            <tr>
                <td><label for="IDDeckInput">Inisira o ID do deck para adicionar a carta</label></td>
            </tr>
            <tr>
               <td><input id="IDDeckInput" name="IDDeckInput"></td>
            <tr>
                <input style="display: none" name="idCartaValue" id="idCartaValue">
            </table>
                <button type="submit" id="botao_add_carta">Adicionar ao Deck</button>
            </form>
        </div>
        <style>
        var addCarta = document.getElementById('botao_add_carta')
        addCarta.addEventListener('click', voltar)
        </style>
    </div>`;
var formulario_padrao = 0;

function validarSessao() {
  formulario_padrao = div_pop_up.innerHTML;
  var id = sessionStorage.ID_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;

  var id_usuario = document.getElementById("idInput");

  var nome_usuario = document.getElementById("nome_usuario");
  if (id != null && nome != null) {
    nome_usuario.innerHTML = `${nome}`;
    id_usuario.setAttribute("value", id);
  } else {
    window.location = "../login_cadastro.html";
  }
}
function aguardar() {
  divAguardar.classList.toggle('sumiu')
  divAguardar.classList.toggle('apareceu')
}

function finalizarAguardar(texto) {
  divAguardar.classList.toggle('sumiu')
  divAguardar.classList.toggle('apareceu')
}
function limparSessao() {
  aguardar();
  sessionStorage.clear();
setTimeout(() => {
    window.location.href = "../login_cadastro.html";
    finalizarAguardar();
  }, 2000);
}
function registrar() {
  div_pop_up.style.display = "flex";
  body_tela.style.overflow = "hidden";
}
function voltar(tipo) {
  if (tipo == 1) {
    div_pop_up.innerHTML = formulario_padrao;
  }
  div_pop_up.style.display = "none";
  body_tela.style.overflow = "auto";
}

function query_colecao(seletor) {
  var id = Number(sessionStorage.ID_USUARIO);
  var caixaGraficos = document.getElementById("caixaGraficos");
  var cartasDoUsuario = 0;

  fetch(`http://localhost:3000/registros`)
    .then((response) => response.json())
    .then((data) => {
      var tbody = document.getElementById("corpo_tabela");

      if (seletor == 1) {
        caixaGraficos.innerHTML = `
                 <div  class="titulo_caixa_graficos"><h2>Cartas Registradas</h2></div>
                <div id="cartasRegistradas"></div>
                 `;
        cartasDoUsuario = data.filter((registro) => registro.fkUsuario === id);
        var cartasRegistradas = document.getElementById("cartasRegistradas");
        cartasDoUsuario.forEach((registro) => {
          var imagem = document.createElement("img");
          imagem.src = registro.imagemPequena;
          cartasRegistradas.appendChild(imagem);
        });
      } else {
        caixaGraficos.innerHTML = tabela_padrao;
        var tbody = document.getElementById("corpo_tabela");
        if (seletor == 2) {
          cartasDoUsuario = data.filter(
            (registro) => registro.fkUsuario === id
          );
        } else if (seletor == 3) {
          cartasDoUsuario = data.filter(
            (registro) =>
              registro.fkUsuario === id &&
              (registro.raridade === "Rare Ultra" ||
                registro.raridade === "Rare Rainbow" ||
                registro.raridade === "Rare Secret" ||
                registro.raridade === "Hyper Rare" ||
                registro.raridade === "Rare Holo V" ||
                registro.raridade === "Rare BREAK" ||
                registro.raridade === "Rare Holo EX" ||
                registro.raridade === "Rare Holo GX" ||
                registro.raridade === "Rare Holo LV.X" ||
                registro.raridade === "Rare Holo Star" ||
                registro.raridade === "Rare Holo V" ||
                registro.raridade === "Rare Holo VMAX" ||
                registro.raridade === "Rare Rainbow" ||
                registro.raridade === "Rare Secret" ||
                registro.raridade === "Rare Shining" ||
                registro.raridade === "Rare Shiny" ||
                registro.raridade === "Rare Shiny GX")
          );
        } else if (seletor == 4) {
          cartasDoUsuario = data.filter(
            (registro) =>
              registro.fkUsuario === id &&
              (registro.raridade === "Rare" ||
                registro.raridade === "Rare Holo" ||
                registro.raridade === "Rare ACE" ||
                registro.raridade === "Rare Prism Star" ||
                registro.raridade === "Rare Prime")
          );
        } else if (seletor == 5) {
          cartasDoUsuario = data.filter(
            (registro) =>
              registro.fkUsuario === id && registro.raridade === "Uncommon"
          );
        } else if (seletor == 6) {
          cartasDoUsuario = data.filter(
            (registro) =>
              registro.fkUsuario === id && registro.raridade === "Common"
          );
        } else if (seletor == 7) {
          cartasDoUsuario = data.filter(
            (registro) =>
              registro.fkUsuario === id && registro.raridade === "Promo"
          );
        }
        cartasDoUsuario.forEach((registro) => {
          var linha = document.createElement("tr");
          var idCell = document.createElement("td");
          var nomeCell = document.createElement("td");
          var imagemCell = document.createElement("td");
          var tipoCell = document.createElement("td");
          var raridadeCell = document.createElement("td");
          var setCell = document.createElement("td");
          var numeroCell = document.createElement("td");
          var botaoCell = document.createElement("td");

          idCell.style.display = "none";

          // Colocando imagem no td
          imagemCell.classList.add("canto_esquerdo");
          var imagem_consulta = document.createElement("img");
          imagem_consulta.src = registro.imagemPequena;
          imagemCell.appendChild(imagem_consulta);

          var botao_deck = document.createElement("button");
          botao_deck.setAttribute("class", "select_card_btn");
          botao_deck.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;
          botao_deck.classList.add("botao_detalhe");
          botao_deck.addEventListener("click", function () {
            div_pop_up.innerHTML = carta_detalhes;
            imagem_carta_detalhe.src = registro.imagemGrande;
            imagem_carta_detalhe.classList.add("imagem_detalhe");
            idCartaValue.setAttribute("value", registro.idCarta);
            nomePokeDtlh.innerHTML = registro.nome;
            subTipoDtlh.innerHTML += registro.subtipo;
            tipoDtlh.innerHTML = registro.tipo;
            raridadeDtlh.innerHTML = registro.raridade;
            seriesDtlh.innerHTML = registro.series;
            colecaoDtlh.innerHTML = registro.nomeSet;
            numeroDtlh.innerHTML = registro.numero;
            fkDeckDtlh.innerHTML = registro.fkDeck;
            registrar();
          });

          idCell.innerHTML = registro.idCarta;
          nomeCell.innerHTML = registro.nome;
          tipoCell.innerHTML = registro.tipo;
          raridadeCell.innerHTML = registro.raridade;
          setCell.innerHTML = registro.nomeSet;
          numeroCell.innerHTML = registro.numero;

          // Adicionado tudo com appendChild 
          botaoCell.appendChild(botao_deck);
          linha.appendChild(idCell);
          linha.appendChild(imagemCell);
          linha.appendChild(nomeCell);
          linha.appendChild(tipoCell);
          linha.appendChild(raridadeCell);
          linha.appendChild(setCell);
          linha.appendChild(numeroCell);
          linha.appendChild(botaoCell);
          tbody.appendChild(linha);
          imagem_consulta.classList.add("imagem_tabela");
        });
      }
    })
    .catch((error) => {
      console.error("Erro ao buscar registros no servidor:", error);
    });
  var botaoAtivado = document.querySelector(".botao_ativado");
  var botao = document.getElementById("botao-" + seletor);
  botaoAtivado.classList.remove("botao_ativado");
  botao.classList.add("botao_ativado");
}

function query_decks(seletor) {
  var id = Number(sessionStorage.ID_USUARIO);
  var caixaGraficos = document.getElementById("caixaGraficos");
  var decksDoUsuario = 0;
  var contador = 1;
  var painelDeck = document.getElementById("painel_deck");
  painelDeck.innerHTML = "";
  fetch(`http://localhost:3000/decks`)
    .then((response) => response.json())
    .then((data) => {
      caixaGraficos.innerHTML = tabela_decks;
      var tbody = document.getElementById("corpo_tabela");

      if (seletor == 1) {
        decksDoUsuario = data.filter((registro) => registro.fkUsuario === id);
      }
      jsons_deck = decksDoUsuario;
      decksDoUsuario.forEach((registro) => {
        var linha = document.createElement("tr");
        var idCell = document.createElement("td");
        var nomeCell = document.createElement("td");
        var imagemCell = document.createElement("td");
        var tipoCell = document.createElement("td");

        // Colocando imagem no td
        var imagem_consulta = document.createElement("img");
        imagem_consulta.src = registro.imagem;
        imagemCell.appendChild(imagem_consulta);

        idCell.innerHTML = registro.idDeck;
        nomeCell.innerHTML = registro.nomeDeck;
        tipoCell.innerHTML = registro.tipoPrincipal;

        // Adicionado tudo com appendChild (linha[imagem, nome, tipo])
        linha.appendChild(idCell);
        linha.appendChild(imagemCell);
        linha.appendChild(nomeCell);
        linha.appendChild(tipoCell);
        tbody.appendChild(linha);

        var botaoDeck = document.createElement("button");

        if (contador <= data.length) {
          botaoDeck.setAttribute(
            `onclick`,
            `buscar_cartas_deck(${registro.idDeck})`
          );
          botaoDeck.setAttribute(`id`, `botao-${registro.idDeck}`);
          botaoDeck.classList.add("botao_estilizado");
          botaoDeck.innerText = `${registro.nomeDeck}`;
          painelDeck.appendChild(botaoDeck);
          contador++;
        }

        imagem_consulta.classList.add("imagem_tabela_deck");
      });
    });
}