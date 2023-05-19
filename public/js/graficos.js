function carregar_graficos() {
    var rosquinha = document.getElementById('suptipos_colecao').getContext('2d')
    // var id = Number(sessionStorage.ID_USUARIO)
     fetch(`http://localhost:3000/registros`)
      .then((response) => response.json())
      .then((res) => {
        // Adicionando gradients nas seções 

        var gradientPKM = rosquinha.createLinearGradient(340, 375, 100, 100);
        gradientPKM.addColorStop(0.4 , "#ff0000");
        gradientPKM.addColorStop(0.6 , "#ff2300");
        gradientPKM.addColorStop(0.72, "#ff5b00");
        gradientPKM.addColorStop(1, "#ff9a00");
        var gradientTRN = rosquinha.createLinearGradient(340, 375, 100, 100);
        gradientTRN.addColorStop(0.4 , "#02ff39");
        gradientTRN.addColorStop(0.6 , "#0eee5f");
        gradientTRN.addColorStop(0.72, "#1fd694");
        gradientTRN.addColorStop(1, "#2dc4bd");
        var gradientENG = rosquinha.createLinearGradient(390, 250, 250, 345);
        gradientENG.addColorStop(0.2, "#ff00c6");
        gradientENG.addColorStop(0.4 , "#ff488b");
        gradientENG.addColorStop(0.7, "#ffa73c");
        gradientENG.addColorStop(1, "#ffef00");
        cartasTipoPokemon = res.filter(registro => registro.fkUsuario === id && registro.suptipo === "Pokémon")
        cartasTipoTreinador = res.filter(registro => registro.fkUsuario === id && registro.suptipo === "Treinador")
        cartasTipoEnergia = res.filter(registro => registro.fkUsuario === id && registro.suptipo === "Energia")

        var qtd_pokemons = cartasTipoPokemon.length;
        var qtd_treinadores = cartasTipoTreinador.length;
        var qtd_energias = cartasTipoEnergia.length;

        var grafico = new Chart(rosquinha, {
          type: 'doughnut',
          data: {
            labels: ['Pokémons', 'Treinadores', 'Energias'],
            datasets: [{
              data: [qtd_pokemons, qtd_treinadores, qtd_energias],
              borderWidth:"0",
              backgroundColor: [gradientPKM, gradientTRN, gradientENG],
              hoverBackgroundColor: [gradientPKM, gradientTRN, gradientENG]
            }]
          },
          options: {
            legend: {
              position: "right",
              labels: {
                fontColor: "white" 
              }
            },
            responsive: true,
            maintainAspectRatio: false
          }
        });
      })
      gerar_estatisticas();
      gerar_barras();
  }
  function gerar_estatisticas() {
    var caixa3 = document.getElementById('caixa_3');
    var decksDoUsuario = 0;
    contador = 1;
    fetch(`http://localhost:3000/decks`)
        .then((response) => response.json())
        .then((data) => {
                decksDoUsuario = data.filter(registro => registro.fkUsuario === id);
            decksDoUsuario.forEach((registro) => {
              var total = document.createElement('div');
              var num_vitorias = document.createElement('div');
              var estatistica = document.createElement('div');
              var porcentagem_vitorias = document.createElement('h3')
              var nomeDoDeck = document.createElement('h3')
              total.classList.add("linha_total");
              num_vitorias.classList.add("estatistica");
              num_vitorias.classList.add("cor_"+ contador);

              var porcentagem = Math.round((registro.vitorias/(registro.vitorias + registro.derrotas)) * 100)
              var tamanho_barra = porcentagem
              if (registro.derrotas == 0 && registro.vitorias == 0) {
                porcentagem = "---";
                tamanho_barra = 0
              } else if(registro.derrotas == 0 && registro.vitorias != 0) {
                tamanho_barra = 100
              }
              
              num_vitorias.style.width = tamanho_barra + "%"
              porcentagem_vitorias.innerText = `${porcentagem} %`;
              nomeDoDeck.innerText = registro.idDeck + " - " + registro.nomeDeck
              estatistica.classList.add("secao_estatistica")
                
                estatistica.appendChild(nomeDoDeck)
                total.appendChild(num_vitorias);
                estatistica.appendChild(total);
                estatistica.appendChild(porcentagem_vitorias);
                caixa3.appendChild(estatistica)
             ;
            });
            
        })
  }
  function gerar_barras() {
    fetch('http://localhost:3000/registros')
      .then((response) => response.json())
      .then((data) => {
        var cartasTipoFogo = data.filter(registro => registro.fkUsuario === id && registro.tipo === "Fire");
        var cartasTipoAgua = data.filter(registro => registro.fkUsuario === id && registro.tipo === "Water");
        var cartasTipoPlanta = data.filter(registro => registro.fkUsuario === id && registro.tipo === "Grass");
        var cartasTipoRaio = data.filter(registro => registro.fkUsuario === id && registro.tipo === "Lightning");
        var cartasTipoLutador = data.filter(registro => registro.fkUsuario === id && registro.tipo === "Fighting");

        var porcentagemCTF = Math.round(((cartasTipoFogo.length / data.length) * 100));
        var porcentagemCTA = Math.round(((cartasTipoAgua.length / data.length) * 100));
        var porcentagemCTP = Math.round(((cartasTipoPlanta.length / data.length) * 100));
        var porcentagemCTR = Math.round(((cartasTipoRaio.length / data.length) * 100));
        var porcentagemCTL = Math.round(((cartasTipoLutador.length / data.length) * 100));
  
        var tamanhoDaBarra = 50;
  
        var barra1 = document.getElementById("div_barra_1");
        var barra2 = document.getElementById("div_barra_2");
        var barra3 = document.getElementById("div_barra_3");
        var barra4 = document.getElementById("div_barra_4");
        var barra5 = document.getElementById("div_barra_5");

        gerarBarraProgresso(barra1, tamanhoDaBarra, porcentagemCTF);
        gerarBarraProgresso(barra2, tamanhoDaBarra, porcentagemCTA);
        gerarBarraProgresso(barra3, tamanhoDaBarra, porcentagemCTP);
        gerarBarraProgresso(barra4, tamanhoDaBarra, porcentagemCTR);
        gerarBarraProgresso(barra5, tamanhoDaBarra, porcentagemCTL);

        porcentagem_1.innerText = `${porcentagemCTF}%`
        porcentagem_2.innerText = `${porcentagemCTA}%`
        porcentagem_3.innerText = `${porcentagemCTP}%`
        porcentagem_4.innerText = `${porcentagemCTR}%`
        porcentagem_5.innerText = `${porcentagemCTL}%`
      });
  }
  function gerarBarraProgresso(barra, tamanhoDaBarra, porcentagemDaBarra) {
    contador ++;
    for (var j = 0; j < tamanhoDaBarra; j++) {
      var segmentos = document.createElement('div');
      segmentos.classList.add('segmentos_progresso');
      var colorStart = [59, 175, 218];
      var colorEnd = [220, 0, 0]; 
      var percentualCompleto = j / tamanhoDaBarra * 100;
      var color = [];
      for (var k = 0; k < 3; k++) {
        color[k] = Math.round(colorStart[k] + (colorEnd[k] - colorStart[k]) * (percentualCompleto / 100));
      }
      segmentos.style.background = 'rgba(120, 120, 124, 0.37)'; 
      if (j < tamanhoDaBarra * (porcentagemDaBarra / 100)) {
        segmentos.style.background = 'rgb(' + color.join(',') + ')';
      }
      barra.appendChild(segmentos);
    }
  }
  