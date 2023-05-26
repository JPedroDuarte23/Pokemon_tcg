function carregar_graficos() {
  var rosquinha = document.getElementById("suptipos_colecao").getContext("2d");
  // var id = Number(sessionStorage.ID_USUARIO)
  fetch(`http://localhost:3000/registros`)
    .then((response) => response.json())
    .then((res) => {
      // Adicionando gradients nas seções

      var gradientPKM = rosquinha.createLinearGradient(340, 375, 100, 100);
      gradientPKM.addColorStop(0.4, "#ff0000");
      gradientPKM.addColorStop(0.6, "#ff2300");
      gradientPKM.addColorStop(0.72, "#ff5b00");
      gradientPKM.addColorStop(1, "#ff9a00");
      var gradientTRN = rosquinha.createLinearGradient(340, 375, 100, 100);
      gradientTRN.addColorStop(0.4, "#02ff39");
      gradientTRN.addColorStop(0.6, "#0eee5f");
      gradientTRN.addColorStop(0.72, "#1fd694");
      gradientTRN.addColorStop(1, "#2dc4bd");
      var gradientENG = rosquinha.createLinearGradient(390, 250, 250, 345);
      gradientENG.addColorStop(0.2, "#ff00c6");
      gradientENG.addColorStop(0.4, "#ff488b");
      gradientENG.addColorStop(0.7, "#ffa73c");
      gradientENG.addColorStop(1, "#ffef00");
      cartasTipoPokemon = res.filter(
        (registro) =>
          registro.fkUsuario === id && registro.suptipo === "Pokémon"
      );
      cartasTipoTreinador = res.filter(
        (registro) =>
          registro.fkUsuario === id && registro.suptipo === "Treinador"
      );
      cartasTipoEnergia = res.filter(
        (registro) =>
          registro.fkUsuario === id && registro.suptipo === "Energia"
      );

      var qtd_pokemons = cartasTipoPokemon.length;
      var qtd_treinadores = cartasTipoTreinador.length;
      var qtd_energias = cartasTipoEnergia.length;

      var grafico = new Chart(rosquinha, {
        type: "doughnut",
        data: {
          labels: ["Pokémons", "Treinadores", "Energias"],
          datasets: [
            {
              data: [qtd_pokemons, qtd_treinadores, qtd_energias],
              borderWidth: "0",
              backgroundColor: [gradientPKM, gradientTRN, gradientENG],
              hoverBackgroundColor: [gradientPKM, gradientTRN, gradientENG],
            },
          ],
        },
        options: {
          legend: {
            position: "right",
            labels: {
              fontColor: "white",
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    });
  gerar_estatisticas();
  gerar_barras();
}
function gerar_estatisticas() {
  var caixa3 = document.getElementById("caixa_3");
  var decksDoUsuario = 0;
  contador = 1;
  fetch(`http://localhost:3000/decks`)
    .then((response) => response.json())
    .then((data) => {
      decksDoUsuario = data.filter((registro) => registro.fkUsuario === id);
      decksDoUsuario.forEach((registro) => {
        var total = document.createElement("div");
        var num_vitorias = document.createElement("div");
        var estatistica = document.createElement("div");
        var porcentagem_vitorias = document.createElement("h3");
        var nomeDoDeck = document.createElement("h3");
        total.classList.add("linha_total");
        num_vitorias.classList.add("estatistica");
        num_vitorias.classList.add("cor_" + contador);

        var porcentagem = Math.round(
          (registro.vitorias / (registro.vitorias + registro.derrotas)) * 100
        );
        var tamanho_barra = porcentagem;
        if (registro.derrotas == 0 && registro.vitorias == 0) {
          porcentagem = "---";
          tamanho_barra = 0;
        } else if (registro.derrotas == 0 && registro.vitorias != 0) {
          tamanho_barra = 100;
        }

        num_vitorias.style.width = tamanho_barra + "%";
        porcentagem_vitorias.innerText = `${porcentagem} %`;
        nomeDoDeck.innerText = registro.idDeck + " - " + registro.nomeDeck;
        estatistica.classList.add("secao_estatistica");

        estatistica.appendChild(nomeDoDeck);
        total.appendChild(num_vitorias);
        estatistica.appendChild(total);
        estatistica.appendChild(porcentagem_vitorias);
        caixa3.appendChild(estatistica);
        contador++;
      });
    });
}
function gerar_barras() {
  fetch("http://localhost:3000/registros")
    .then((response) => response.json())
    .then((data) => {
      var cartasDoUser = data.filter((registro) => registro.fkUsuario === id && registro.suptipo === "Pokémon");
      var cartasTipoFogo = data.filter(
        (registro) =>
          registro.fkUsuario === id &&
          registro.tipo === "Fire" &&
          registro.suptipo === "Pokémon"
      );
      var cartasTipoAgua = data.filter(
        (registro) =>
          registro.fkUsuario === id &&
          registro.tipo === "Water" &&
          registro.suptipo === "Pokémon"
      );
      var cartasTipoPlanta = data.filter(
        (registro) =>
          registro.fkUsuario === id &&
          registro.tipo === "Grass" &&
          registro.suptipo === "Pokémon"
      );
      var cartasTipoRaio = data.filter(
        (registro) =>
          registro.fkUsuario === id &&
          registro.tipo === "Lightning" &&
          registro.suptipo === "Pokémon"
      );
      var cartasTipoLutador = data.filter(
        (registro) =>
          registro.fkUsuario === id &&
          registro.tipo === "Fighting" &&
          registro.suptipo === "Pokémon"
      );
      var cartasTipoNormal = data.filter(
        (registro) =>
          registro.fkUsuario === id &&
          registro.tipo === "Colorless" &&
          registro.suptipo === "Pokémon"
      );
      var cartasTipoPsiquico = data.filter(
        (registro) =>
          registro.fkUsuario === id &&
          registro.tipo === "Psychic" &&
          registro.suptipo === "Pokémon"
      );
      var cartasTipoEscuridao = data.filter(
        (registro) =>
          registro.fkUsuario === id &&
          registro.tipo === "Darkness" &&
          registro.suptipo === "Pokémon"
      );
      var cartasTipoMetal = data.filter(
        (registro) =>
          registro.fkUsuario === id &&
          registro.tipo === "Metal" &&
          registro.suptipo === "Pokémon"
      );
      var cartasTipoDragao = data.filter(
        (registro) =>
          registro.fkUsuario === id &&
          registro.tipo === "Dragon" &&
          registro.suptipo === "Pokémon"
      );
      var cartasTipoFada = data.filter(
        (registro) =>
          registro.fkUsuario === id &&
          registro.tipo === "Fairy" &&
          registro.suptipo === "Pokémon"
      );

      var porcentagemCTF = Math.round(
        (cartasTipoFogo.length / cartasDoUser.length) * 100
      );
      var porcentagemCTA = Math.round(
        (cartasTipoAgua.length / cartasDoUser.length) * 100
      );
      var porcentagemCTP = Math.round(
        (cartasTipoPlanta.length / cartasDoUser.length) * 100
      );
      var porcentagemCTR = Math.round(
        (cartasTipoRaio.length / cartasDoUser.length) * 100
      );
      var porcentagemCTL = Math.round(
        (cartasTipoLutador.length / cartasDoUser.length) * 100
      );
      var porcentagemCTN = Math.round(
        (cartasTipoNormal.length / cartasDoUser.length) * 100
      );
      var porcentagemCTPS = Math.round(
        (cartasTipoPsiquico.length / cartasDoUser.length) * 100
      );
      var porcentagemCTE = Math.round(
        (cartasTipoEscuridao.length / cartasDoUser.length) * 100
      );
      var porcentagemCTM = Math.round(
        (cartasTipoMetal.length / cartasDoUser.length) * 100
      );
      var porcentagemCTD = Math.round(
        (cartasTipoDragao.length / cartasDoUser.length) * 100
      );
      var porcentagemCTFD = Math.round(
        (cartasTipoFada.length / cartasDoUser.length) * 100
      );

      if (cartasTipoFogo == 0) {
        porcentagemCTF = "---";
      }
      if (cartasTipoAgua == 0) {
        porcentagemCTA = "---";
      }
      if (cartasTipoPlanta == 0) {
        porcentagemCTP = "---";
      }
      if (cartasTipoRaio == 0) {
        porcentagemCTR = "---";
      }
      if (cartasTipoLutador == 0) {
        porcentagemCTL = "---";
      }
      if (cartasTipoNormal == 0) {
        porcentagemCTN = "---";
      }
      if (cartasTipoPsiquico == 0) {
        porcentagemCTPS = "---";
      }
      if (cartasTipoEscuridao == 0) {
        porcentagemCTE = "---";
      }
      if (cartasTipoMetal == 0) {
        porcentagemCTM = "---";
      }
      if (cartasTipoDragao == 0) {
        porcentagemCTD = "---";
      }
      if (cartasTipoFada == 0) {
        porcentagemCTFD = "---";
      }
      var tamanhoDaBarra = 50;

      var barra1 = document.getElementById("div_barra_1");
      var barra2 = document.getElementById("div_barra_2");
      var barra3 = document.getElementById("div_barra_3");
      var barra4 = document.getElementById("div_barra_4");
      var barra5 = document.getElementById("div_barra_5");
      var barra6 = document.getElementById("div_barra_6");
      var barra7 = document.getElementById("div_barra_7");
      var barra8 = document.getElementById("div_barra_8");
      var barra9 = document.getElementById("div_barra_9");
      var barra10 = document.getElementById("div_barra_10");
      var barra11 = document.getElementById("div_barra_11");

      gerarBarraProgresso(barra1, tamanhoDaBarra, porcentagemCTF);
      gerarBarraProgresso(barra2, tamanhoDaBarra, porcentagemCTA);
      gerarBarraProgresso(barra3, tamanhoDaBarra, porcentagemCTP);
      gerarBarraProgresso(barra4, tamanhoDaBarra, porcentagemCTR);
      gerarBarraProgresso(barra5, tamanhoDaBarra, porcentagemCTL);
      gerarBarraProgresso(barra6, tamanhoDaBarra, porcentagemCTN);
      gerarBarraProgresso(barra7, tamanhoDaBarra, porcentagemCTPS);
      gerarBarraProgresso(barra8, tamanhoDaBarra, porcentagemCTE);
      gerarBarraProgresso(barra9, tamanhoDaBarra, porcentagemCTM);
      gerarBarraProgresso(barra10, tamanhoDaBarra, porcentagemCTD);
      gerarBarraProgresso(barra11, tamanhoDaBarra, porcentagemCTFD);

      porcentagem_1.innerText = `${porcentagemCTF}%`;
      porcentagem_2.innerText = `${porcentagemCTA}%`;
      porcentagem_3.innerText = `${porcentagemCTP}%`;
      porcentagem_4.innerText = `${porcentagemCTR}%`;
      porcentagem_5.innerText = `${porcentagemCTL}%`;
      porcentagem_6.innerText = `${porcentagemCTN}%`;
      porcentagem_7.innerText = `${porcentagemCTPS}%`;
      porcentagem_8.innerText = `${porcentagemCTE}%`;
      porcentagem_9.innerText = `${porcentagemCTM}%`;
      porcentagem_10.innerText = `${porcentagemCTD}%`;
      porcentagem_11.innerText = `${porcentagemCTFD}%`;
    });
}

//GERANDO GRADIENTES USANDO REDUÇÃO PERCENTUAL DO RGB E ADICIONANDO NAS BARRAS 50 DIVS
function gerarBarraProgresso(barra, tamanhoDaBarra, porcentagemDaBarra) {
  // gerando as 50 divs
  for (var j = 0; j < tamanhoDaBarra; j++) {
    var segmentos = document.createElement("div");
    segmentos.classList.add("segmentos_progresso");
    var colorStart = [227, 86, 209];
    var colorEnd = [10, 0, 255];
    var percentualCompleto = (j / tamanhoDaBarra) * 100;
    var color = [];
    // colocando a cor
    for (var i = 0; i < 3; i++) {
      color[i] = Math.round(
        colorStart[i] +
          (colorEnd[i] - colorStart[i]) * (percentualCompleto / 100)
          // [Rcomeço,Gcomeço,Bcomeço] + ([Rfinal,Gfinal,Bfinal] - [Rcomeço, Gcomeço, Bcomeço]) * (percentualCompleto/100)
      );
    }
    segmentos.style.background = "rgba(120, 120, 124, 0.37)";
    if (j < tamanhoDaBarra * (porcentagemDaBarra / 100)) {
      //colocando o rgb e repartindo ele em vírgulas 'rgb(' R + ',' + G + ',' + B + ')'
      segmentos.style.background = "rgb(" + color.join(",") + ")";
    }
    barra.appendChild(segmentos);
  }
}
