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

// SELECT DAS CARTAS
const select_cartas = async () => {
app.get("/registros", (req, res) => {
  // Faz o select na tabela cartas
  connection.connect();
  const select_cartas = `SELECT * FROM cartas`;
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

const deck_select = async () => {
  app.get("/decks", (req, res) => {
    // Faz select na tabela deck
    connection.connect();
    const select_deck = `SELECT * FROM deck`;
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

const decks_insert = async () => {
  // Insere os dados do formulário na tabela deck com o método mostrado no dat-acqu-ino
  app.post("/registro-deck", (req, res) => {
    const { inputImagemDeck, inputDeckNome, selectTipoPrincipal, idInput } = req.body;
    const insert_deck_Query = `INSERT INTO deck (nomeDeck, imagem, fkUsuario, tipoPrincipal, vitorias, derrotas) VALUES (?, ?, ?, ?, 0, 0)`;
    const values_deck = [
      inputDeckNome,
      inputImagemDeck,
      idInput,
      selectTipoPrincipal,
    ];

    connection.connect();
    connection.query(insert_deck_Query, values_deck, (error, results) => {
      if (error) {
        console.log("Erro ao inserir registro na tabela:", error);
        res
          .status(500)
          .send(
            '<script>alert("Houve um erro ao criar o deck"); window.location.href = "/Dash_decks.html";</script>'
          );
      } else {
        console.log("Deck inserido com sucesso!");
        res
          .status(206)
          .send(
            '<script>alert("Deck criado com sucesso!"); window.location.href = "/Dash_decks.html";</script>'
          );
      }
    });
  });
};

// COLOCANDO A CARTA NO DECK

const update_carta_deck = async () => {
  app.post("/adicionar-carta", (req, res) => {
    const { IDDeckInput, idCartaValue } = req.body;
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
            '<script>alert("Houve um erro ao inserir a carta no deck"); window.location.href = "/Dash_colecoes.html";</script>'
          );
      } else {
        console.log("Registro inserido com sucesso!");
         res
           .status(202)
           .send(
             '<script>alert("Cartas inseridas no deck!"); window.location.href = "/Dash_colecoes.html";</script>'
          );
      }
    });
  });
};

// REGISTRANDO RESULTADOS DAS PARTIDAS

const update_deck_resultado = (async) => {
  app.post("/resultado", (req, res) => {
    const { inputDeckID, inputResultado, fkUserInput } = req.body;
    console.log(inputDeckID);
    console.log(fkUserInput);
    var update_resultado = "";
    if (inputResultado == "vitoria") {
      update_resultado = `UPDATE deck SET vitorias = vitorias + 1 WHERE idDeck = ? AND fkUsuario = ?`;
    } else {
      update_resultado = `UPDATE deck SET derrotas = derrotas + 1 WHERE idDeck= ? AND fkUsuario = ?`;
    }
    const values_resultado = [inputDeckID, fkUserInput];
    connection.connect();
    connection.query(update_resultado, values_resultado, (error, results) => {
      if (error) {
        console.log("Erro ao inserir resultado na tabela:", error);
        res
          .status(500)
          .send(
            '<script>alert("Erro ao registrar resultado"); window.location.href = "/Dash_inicial.html";</script>'
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
  });
};

// PROCURADOR DE CARTAS E INSERTS DAS CARTAS NA COLEÇÃO

const card_insert = async () => {
  // Pega os dados inseridos pelo usuário no formulário que passam pelo http://localhost:3000/search
  app.post("/search", (req, res) => {
    const {
      nomePokemonInput,
      selectSupertype,
      selectSubtype,
      selectTypes,
      selectRarity,
      selectSet,
      idInput,
    } = req.body;
    // Faz a requisição da API que retorna uma lista de JSON, seleciona os dados do indice[0] que serão armazenados desse JSON
    console.log("começando a procura na api");
    console.log(nomePokemonInput);
    console.log(selectSupertype);
    console.log(selectSubtype);
    console.log(selectTypes);
    console.log(selectRarity);
    console.log(selectSet);
    if (selectSupertype == "Pokémon") {
      // CARTAS TIPO POKÉMON

      axios
        .get(
          `https://api.pokemontcg.io/v2/cards?q=name:"${nomePokemonInput}" subtypes:"${selectSubtype}" types:"${selectTypes}" rarity:"${selectRarity}" set.name:"${selectSet}"`
        )
        .then((response) => {
          const cardData = response.data.data[0];
          const nome = cardData.name;
          const imagemPequena = cardData.images.small;
          const imagemGrande = cardData.images.large;
          const tipo = cardData.types[0];
          const raridade = cardData.rarity;
          const subtipo = cardData.subtypes[0];
          const nomeSet = cardData.set.name;
          const series = cardData.set.series;
          const numero = `${cardData.number} / ${cardData.set.printedTotal}`;

          // Insere no banco de dados as cartas que ele registrou

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
            idInput,
          ];

          connection.connect();
          connection.query(insertQuery, values, (error, results) => {
            if (error) {
              console.log("Erro ao inserir registro na tabela:", error);
              res
                .status(500)
                .send(
                  '<script>alert("Ocorreu um erro ao inserir o registro na tabela."); window.location.href = "/Dash_colecoes.html";</script>'
                );
            } else {
              console.log("Registro inserido com sucesso!");
              res
                .status(200)
                .send(
                  '<script>alert("Carta registrada com sucesso!"); window.location.href = "/Dash_colecoes.html";</script>'
                );
            }
          });
        })
        .catch((error) => {
          console.log("Erro ao fazer a consulta na API Pokemon TCG:", error);
          res
            .status(500)
            .send(
              '<script>alert("Ocorreu um erro ao fazer a requisição para a API Pokémon."); window.location.href = "/Dash_colecoes.html";</script>'
            );
        });
    } else if (selectSupertype == "Treinador") {
      // CARTA TIPO TREINADOR

      axios
        .get(
          `https://api.pokemontcg.io/v2/cards?q=name:"${nomePokemonInput}" supertype:"trainer" rarity:"${selectRarity}" set.name:"${selectSet}"`
        )
        .then((response) => {
          const cardData = response.data.data[0];
          const nome = cardData.name;
          const imagemPequena = cardData.images.small;
          const imagemGrande = cardData.images.large;
          const raridade = cardData.rarity;
          var subtipo = "";
          if (
            selectSet == "Base" ||
            selectSet == "Base Set 2" ||
            selectSet == "Jungle" ||
            selectSet == "Legendary Collection" ||
            selectSet == "Neo Discovery" ||
            selectSet == "Team Rocket"
          ) {
            subtipo = "Treinador";
          } else {
            subtipo = cardData.subtypes[0];
          }
          const nomeSet = cardData.set.name;
          const series = cardData.set.series;
          const numero = `${cardData.number} / ${cardData.set.printedTotal}`;

          // Insere no banco de dados as cartas que ele registrou

          const insertQuery = `INSERT INTO cartas (nome, suptipo, subtipo, imagemPequena, imagemGrande,  raridade, series, nomeSet, numero, fkUsuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
          const values = [
            nome,
            selectSupertype,
            subtipo,
            imagemPequena,
            imagemGrande,
            raridade,
            series,
            nomeSet,
            numero,
            idInput,
          ];
          connection.connect();
          connection.query(insertQuery, values, (error, results) => {
            if (error) {
              console.log("Erro ao inserir registro na tabela:", error);
              res
                .status(500)
                .send(
                  '<script>alert("Ocorreu um erro ao inserir o registro na tabela."); window.location.href = "/Dash_colecoes.html";</script>'
                );
            } else {
              console.log("Registro inserido com sucesso!");
              res
                .status(200)
                .send(
                  '<script>alert("Carta registrada com sucesso!"); window.location.href = "/Dash_colecoes.html";</script>'
                );
            }
          });
        })
        .catch((error) => {
          console.log("Erro ao fazer a consulta na API Pokemon TCG:", error);
          res
            .status(500)
            .send(
              '<script>alert("Ocorreu um erro ao fazer a requisição para a API Pokémon."); window.location.href = "/Dash_colecoes.html";</script>'
            );
        });
    } else {
      // CARTAS TIPO ENERGIA

      axios
        .get(
          `https://api.pokemontcg.io/v2/cards?q=name:"${nomePokemonInput}" supertype:"energy" rarity:"${selectRarity}" set.name:"${selectSet}"`
        )
        .then((response) => {
          const cardData = response.data.data[0];
          const nome = cardData.name;
          const imagemPequena = cardData.images.small;
          const imagemGrande = cardData.images.large;
          const tipo = cardData.types;
          const subtipo = cardData.subtypes[0];
          const raridade = cardData.rarity;
          const nomeSet = cardData.set.name;
          const series = cardData.set.series;
          const numero = `${cardData.number} / ${cardData.set.printedTotal}`;

          // Insere no banco de dados as cartas que ele registrou

          const insertQuery = `INSERT INTO cartas (nome, suptipo, subtipo, imagemPequena, imagemGrande, tipo,  raridade, series, nomeSet, numero, fkUsuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
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
            idInput,
          ];

          connection.connect();
          connection.query(insertQuery, values, (error, results) => {
            if (error) {
              console.log("Erro ao inserir registro na tabela:", error);
              res
                .status(500)
                .send(
                  '<script>alert("Ocorreu um erro ao inserir o registro na tabela."); window.location.href = "/Dash_colecoes.html";</script>'
                );
            } else {
              console.log("Registro inserido com sucesso!");
              res
                .status(200)
                .send(
                  '<script>alert("Carta registrada com sucesso!"); window.location.href = "/Dash_colecoes.html";</script>'
                );
            }
          });
        })
        .catch((error) => {
          console.log("Erro ao fazer a consulta na API Pokemon TCG:", error);
          res
            .status(500)
            .send(
              '<script>alert("Ocorreu um erro ao fazer a requisição para a API Pokémon."); window.location.href = "/Dash_colecoes.html";</script>'
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
  app.get("/cartas/informacoes", (_, response) => {
    response.send(PokeInfo);
  });
};

(async () => {
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
