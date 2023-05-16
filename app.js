process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3000 : 8080;
var { connection } = require("./src/database/config.js")
var app = express();
var axios = require('axios');

var PokemonTCG = require('pokemontcgsdk');
PokemonTCG.configure({ apiKey: '52749edc-448b-4551-9345-b8ba0ae3d2a3' });

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
app.use("/medidas", medidasRouter)



  
  app.get('/registros', (req, res) => {
    const id_usuario = req.params.id;
    // faz o select na tabela cartas
    connection.connect();
    const sql = `SELECT * FROM cartas`;
    connection.query(sql, [id_usuario], (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar as cartas.' });
        return;
      }
      res.json(results); // envia a resposta para o cliente
    });
  });

  
  const serial = async (
    PokeInfo
  ) => {
  
    // Pega os dados inseridos pelo usuário no formulário que passam pelo http://localhost:3000/search
  
    app.post('/search', (req, res) => {
      const { nomePokemonInput, selectSubtype, selectTypes, selectRarity, selectSet, idInput} = req.body;
    // Faz a requisição da API que retorna uma lista de JSON, seleciona os dados do indice[0] que serão armazenados desse JSON
    /*  console.log(nomePokemonInput)
      console.log(selectSubtype)  
      console.log(selectTypes)
      console.log(selectRarity)
      console.log(selectSet) 
    */

      axios.get(`https://api.pokemontcg.io/v2/cards?q=name:"${nomePokemonInput}" subtypes:"${selectSubtype}" types:"${selectTypes}" rarity:"${selectRarity}" set.name:"${selectSet}"`)
        .then(response => {
          const cardData = response.data.data[0];
          const nome = cardData.name;
          const imagem = cardData.images.small;
          const tipo = cardData.types;
          const raridade = cardData.rarity;
          const nomeSet = cardData.set.name;
          const numero = `${cardData.number} / ${cardData.set.printedTotal}`
  
    // Insere no banco de dados as cartas que ele registrou
  
          const insertQuery = `INSERT INTO cartas (nome, imagemURL, tipo, raridade, nomeSet, fkUsuario, numero) VALUES (?, ?, ?, ?, ?, ?, ?)`;
          const values = [nome, imagem, tipo, raridade, nomeSet, idInput, numero];
  
    // PokeInfo é uma lista de Json
          PokeInfo.push(cardData);
          connection.connect();
          connection.query(insertQuery, values, (error, results) => {
            if (error) {
              console.log('Erro ao inserir registro na tabela:', error);
            } else {
            console.log('Registro inserido com sucesso!');
            }
            res.redirect('/Dash_colecoes.html');
          });
        })
        .catch(error => {
          console.log('Erro ao fazer a consulta na API Pokemon TCG:', error);
          res.redirect('/Dash_colecoes.html')
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
