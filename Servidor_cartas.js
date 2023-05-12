const express = require('express')
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path')
const PokemonTCG = require('pokemontcgsdk');
PokemonTCG.configure({ apiKey: '52749edc-448b-4551-9345-b8ba0ae3d2a3' });

app.use(bodyParser.urlencoded({ extended: false }));

// Define a pasta que contém seus arquivos HTML
app.use(express.static(path.join(__dirname, 'public')));

// Define a rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Dash_colecoes.html'));
});

// Conexão com o banco

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'aluno',
  password: 'galho123',
  database: 'pokemon_tcg'
});

app.get('/registros', (req, res) => {
  const selectQuery = 'SELECT * FROM cartas';

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

        const insertQuery = `INSERT INTO cartas (nome, imagem, tipo) VALUES (?, ?, ?)`;
        const values = [cardName, cardImage, cardType];

  // PokeInfo é uma lista de Json
        PokeInfo.push(cardData)
      
        connection.query(insertQuery, values, (error, results) => {
          if (error) {
            console.log('Erro ao inserir registro na tabela:', error);
          }

          console.log('Registro inserido com sucesso!');
          res.redirect('/');
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
  const server = app.listen(3000, () => {
    console.log('Server started on port 3000');
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

process.on('SIGINT', () => {
  console.log('Encerrando servidor...');
  server.close(() => {
    console.log('Servidor encerrado.');
    connectiom.end();
    process.exit(0);
  });
});