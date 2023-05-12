process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3000 : 8080;
var { connection } = require("./src/database/config.js")
var app = express();
var axios = require('axios');
var bodyParser = require('body-parser');
var PokemonTCG = require('pokemontcgsdk');
PokemonTCG.configure({ apiKey: '52749edc-448b-4551-9345-b8ba0ae3d2a3' });

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter)

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/registros', (req, res) => {
    const selectQuery = 'SELECT * FROM cartas';
    connection.connect();
    connection.query(selectQuery, (error, results) => {
      if (error) {
        console.error('Erro ao buscar registros no banco de dados:', error);
        res.status(500).json({ error: 'Erro ao buscar registros no banco de dados' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  const serial = async (
    PokeInfo
  ) => {
  
    // Pega os dados inseridos pelo usuário no formulário que passam pelo http://localhost:300/search
  
    app.post('/search', (req, res) => {
      const { nomePokemonInput, subtypeInput, typesInput, rarityInput } = req.body;
  
    // Faz a requisição da API que retorna uma lista de JSON, seleciona os dados do indice[0] que serão armazenados desse JSON
  
      axios.get(`https://api.pokemontcg.io/v2/cards?q=name:"${nomePokemonInput}" subtypes:"${subtypeInput}" types:"${typesInput}" rarity:"${rarityInput}"`)
        .then(response => {
          const cardData = response.data.data[0];
          const cardName = cardData.name;
          const cardImage = cardData.images.small;
          const cardType = cardData.types;
  
    // Insere no banco de dados as cartas que ele registrou
  
          const insertQuery = `INSERT INTO cartas (nomeCarta, imagem, tipo) VALUES (?, ?, ?)`;
          const values = [cardName, cardImage, cardType];
  
    // PokeInfo é uma lista de Json
          PokeInfo.push(cardData)
          connection.connect();
          connection.query(insertQuery, values, (error, results) => {
            if (error) {
              console.log('Erro ao inserir registro na tabela:', error);
            }
  
            console.log('Registro inserido com sucesso!');
            res.redirect('/Dash_colecoes.html');
          });
        })
        .catch(error => {
          console.log('Erro ao fazer a consulta na API Pokemon TCG:', error);
        })
    })
  }
  const servidor = (
    PokeInfo
  ) => {
    app.use((request, response, next) => {
      response.header('Access-Control-Allow-Origin', '*');
      response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
      next();
    });
    app.get('/cartas/informacoes', (_, response) => {
  
      response.send(PokeInfo);
    });
  }
  
  (async () => {
    const PokeInfo = [];
    await serial(
      PokeInfo
    );
    servidor(
      PokeInfo
    );
  })();




app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
