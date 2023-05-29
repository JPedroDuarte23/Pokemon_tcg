process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3000 : 8080;
var { connection } = require("./src/database/config.js");
var app = express();
var axios = require("axios");

// CREDENCIAIS API POKÉMON

var PokemonTCG = require("pokemontcgsdk");
PokemonTCG.configure({ apiKey: "52749edc-448b-4551-9345-b8ba0ae3d2a3" });

// ROTAS

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios.js");
var avisosRouter = require("./src/routes/avisos.js");
var medidasRouter = require("./src/routes/medidas.js");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter);

var id_user = 0;
const pegar_idUser = async () => {
  app.post("/iduser", (req,res) => {
    const { sessionID } = req.body;
    id_user = sessionID
    res.json(id_user)
  });
}



// SELECT DAS CARTAS
const select_cartas = () => {
app.get("/registros", (req, res) => {
  // Faz o select na tabela cartas
  connection.connect();
  const select_cartas = `SELECT * FROM cartas WHERE fkUsuario = ${id_user}`;
  connection.query(select_cartas, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar as cartas." });
      return;
    }
    res.json(results); // envia a resposta para o endpoint
  });
});
}

// SELECT DO DECKS

const deck_select = () => {
  app.get("/decks", (req, res) => {
    // Faz select na tabela deck
    connection.connect();
    const select_deck = `SELECT * FROM deck WHERE fkUsuario = ${id_user}`;
    connection.query(select_deck, (error, results, fields) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: "Erro ao buscar os decks" });
        return;
      }
      res.json(results);
    });
  });
};

// CRIAÇÃO DE DECKS

const decks_insert = () => {
  // Insere os dados do formulário na tabela deck com o método mostrado no dat-acqu-ino
  app.post("/registro-deck", (req, res) => {
    const { inputImagemDeck, inputDeckNome, selectTipoPrincipal} = req.body;
    if(inputDeckNome == "" || inputImagemDeck == "" || selectTipoPrincipal == "") {
      console.log("Nome do deck, imagem do deck ou tipo não foram preenchidos")
      res
      .status(500)
      .send('<script>alert("Preencha corretamente as informações"); window.location.href = "/Dash_decks.html"</script>')
    } else {
    const insert_deck_Query = `INSERT INTO deck (nomeDeck, imagem, fkUsuario, tipoPrincipal, vitorias, derrotas) VALUES (?, ?, ?, ?, 0, 0)`;
    const values_deck = [
      inputDeckNome,
      inputImagemDeck,
      id_user,
      selectTipoPrincipal,
    ];

    connection.connect();
    connection.query(insert_deck_Query, values_deck, (error, results) => {
      if (error) {
        console.log("Erro ao inserir registro na tabela:", error);
        res
          .status(500)
          .send(
            '<script>alert("Houve um erro ao criar o deck"); window.location.href = "/Dash_decks.html"</script>'
          );
      } else {
        console.log("Deck inserido com sucesso!");
        res
          .status(206)
          .send(
            '<script>alert("Deck criado com sucesso!"); window.location.href = "/Dash_decks.html"</script>'
          );
      }
    });
  }
});
};

// COLOCANDO A CARTA NO DECK

const update_carta_deck = () => {
  app.post("/adicionar-carta", (req, res) => {
    const { IDDeckInput, idCartaValue } = req.body;
    if(IDDeckInput == "" || idCartaValue == ""){
      console.log("ID do deck ou ID da carta não foram preenchidos")
      res
      .status(500)
      .send(
        '<script>alert("Insira as informações corretamente para adicionar a carta");window.location.href = "/Dash_colecoes.html"</script>'
      );
    } else {
    console.log(IDDeckInput);
    console.log(idCartaValue);
    const update = `UPDATE cartas SET fkDeck = ? WHERE idCarta = ?`;
    const values_update = [IDDeckInput, idCartaValue];
    connection.connect();
    connection.query(update, values_update, (error, results) => {
      if (error) {
        console.log("Erro ao inserir registro na tabela:", error);
        res
          .status(500)
          .send(
            '<script>alert("Houve um erro ao inserir a carta no deck"); window.location.href = "/Dash_colecoes.html"</script>'
          );
      } else {
        console.log("Registro inserido com sucesso!");
         res
           .status(202)
           .send(
             '<script>alert("Cartas inseridas no deck!"); window.location.href = "/Dash_colecoes.html"</script>'
          );
      }
    });
  }
});
};

// REGISTRANDO RESULTADOS DAS PARTIDAS

const update_deck_resultado = () => {
  app.post("/resultado", (req, res) => {
    const { inputDeckID, inputResultado} = req.body;
    if(inputDeckID == "" || inputResultado == "") {
      console.log("ID do deck ou resultado não foram preenchidos")
      res
      .status(500)
      .send(
        '<script>alert("Insira as informações corretamente para registrar o resultado"); window.location.href = "/Dash_inicial.html";</script>'
      );
    } else {
    console.log(inputDeckID);
    var update_resultado = "";
    if (inputResultado == "vitoria") {
      update_resultado = `UPDATE deck SET vitorias = vitorias + 1 WHERE idDeck = ? AND fkUsuario = ?`;
    } else {
      update_resultado = `UPDATE deck SET derrotas = derrotas + 1 WHERE idDeck= ? AND fkUsuario = ?`;
    }
    const values_resultado = [inputDeckID, id_user];
    connection.connect();
    connection.query(update_resultado, values_resultado, (error, results) => {
      if (error) {
        console.log("Erro ao inserir resultado na tabela:", error);
        res
          .status(500)
          .send(
            '<script>alert("Erro ao registrar resultado"); window.location.href = "/Dash_inicial.html"</script>'
          );
      } else {
        console.log("Resultado inserido com sucesso!");
        res
          .status(207)
          .send(
            '<script>alert("Resultado registrado com sucesso!"); window.location.href = "/Dash_inicial.html";</script>'
          );
      }
    });
  }
});
};

// PROCURADOR DE CARTAS E INSERTS DAS CARTAS NA COLEÇÃO
const card_insert = () => {
  app.post("/search", (req, res) => {
    const {
      nomePokemonInput,
      selectSupertype,
      selectSubtype,
      selectTypes,
      selectRarity,
      selectSet,
      quantidadeCartaInput,
    } = req.body;

    if (quantidadeCartaInput < 1 || quantidadeCartaInput > 10) {
      return res.status(400).send(                
        '<script>alert("A quantidade de cartas para registrar não pode ser menor que 1 e maior que 10!"); window.location.href = "/Dash_colecoes.html"</script>'
      )
    } else {
      console.log("começando a procura na api");
      console.log(nomePokemonInput);
      console.log(selectSupertype);
      console.log(selectSubtype);
      console.log(selectTypes);
      console.log(selectRarity);
      console.log(selectSet);

      var url = "";
      if (selectSupertype === "Pokémon") {
        url = `https://api.pokemontcg.io/v2/cards?q=name:"${nomePokemonInput}" subtypes:"${selectSubtype}" types:"${selectTypes}" rarity:"${selectRarity}" set.name:"${selectSet}"`;
      } else if (selectSupertype === "Treinador") {
        url = `https://api.pokemontcg.io/v2/cards?q=name:"${nomePokemonInput}" supertype:"trainer" rarity:"${selectRarity}" set.name:"${selectSet}"`;
      } else {
        url = `https://api.pokemontcg.io/v2/cards?q=name:"${nomePokemonInput}" supertype:"energy" rarity:"${selectRarity}" set.name:"${selectSet}"`;
      }

      axios
        .get(url)
        .then((response) => {
          const cardData = response.data.data[0];
          const nome = cardData.name;
          const imagemPequena = cardData.images.small;
          const imagemGrande = cardData.images.large;
          let tipo;
          if (selectSupertype === "Pokémon") {
            tipo = cardData.types[0];
          }
          const raridade = cardData.rarity;
          let subtipo;
          if (selectSupertype === "Pokémon") {
            subtipo = cardData.subtypes[0];
          } else if (selectSupertype === "Treinador") {
            subtipo = "Trainer";
          } else {
            subtipo = "Energy";
          }
          const nomeSet = cardData.set.name;
          const series = cardData.set.series;
          const numero = `${cardData.number} / ${cardData.set.printedTotal}`;

          const insertQuery = `INSERT INTO cartas (nome, suptipo, subtipo, imagemPequena, imagemGrande, tipo, raridade, series, nomeSet, numero, fkUsuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
          const values = [
            nome,
            selectSupertype,
            subtipo,
            imagemPequena,
            imagemGrande,
            tipo,
            raridade,
            series,
            nomeSet,
            numero,
            id_user,
          ];

          connection.connect();
          const insertPromises = [];
          for (let i = 0; i < quantidadeCartaInput; i++) {
            const insertPromise = new Promise((resolve, reject) => {
              connection.query(insertQuery, values, (error, results) => {
                if (error) {
                  console.log("Erro ao inserir registro na tabela:", error);
                  reject(error);
                } else {
                  console.log("Registro inserido com sucesso!");
                  resolve();
                }
              });
            });
            insertPromises.push(insertPromise);
          }
  
          Promise.all(insertPromises)
            .then(() => {
              return res.status(206)
              .send(
                '<script>alert("Suas cartas foram inseridas com sucesso!"); window.location.href = "/Dash_colecoes.html"</script>'
              );
            })
            .catch((error) => {
              console.log("Erro ao inserir registros na tabela:", error);
              return res.status(500).send(                
                '<script>alert("Ocorreu um erro inesperado, tente novamente mais tarde"); window.location.href = "/Dash_colecoes.html"</script>'
              );
            });
        })
        .catch((error) => {
          console.log("Erro ao fazer a consulta na API Pokemon TCG:", error);
          return res.status(500).send(                
            '<script>alert("Ocorreu um erro ao registrar sua carta, verifique se todas as informações estão corretas"); window.location.href = "/Dash_colecoes.html"</script>'
          );
        });
    }
  });
};
  
// CONFIGURANDO HEADERS DO SERVIDOR NODE (dat-acqu-ino)

const servidor = () => {
  app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  }

(async() => {
  await pegar_idUser();
  await select_cartas();
  await card_insert();
  await decks_insert();
  await deck_select();
  await update_carta_deck();
  await update_deck_resultado();
  servidor();
})();

app.listen(PORTA, function () {
  console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});