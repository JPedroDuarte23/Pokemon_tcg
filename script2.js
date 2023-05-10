const express = require('express')
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const PokemonTCG = require('pokemontcgsdk');
PokemonTCG.configure({ apiKey: '52749edc-448b-4551-9345-b8ba0ae3d2a3' });

app.use(bodyParser.urlencoded({ extended: false }));

const connectiom = mysql.createConnection({
  host: 'localhost',
  user: 'estudante',
  password: 'sptech',
  database: 'pokemon_tcg'
});

app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/search">
      <label for="name">Card Name:</label>
      <input type="text" id="name" name="name">
      <button type="submit">Search</button>
    </form>
  `);
});
const serial = async (
  PokeInfo
) => {
app.post('/search', (req, res) => {
  const { name } = req.body;

  axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${name}`)
    .then(response => {
      const cardData = response.data.data[0];
      const cardName = cardData.name;
      const cardImage = cardData.images.small;
      const cardType = cardData.types;

      const insertQuery = `INSERT INTO cartas (nome, imagem, tipo) VALUES (?, ?, ?)`;
      const values = [cardName, cardImage, cardType];
      PokeInfo.push(cardData)
      connectiom.query(insertQuery, values, (error, results) => {
        if (error) {
          console.log('Erro ao inserir registro na tabela:', error);
          res.send('Erro ao inserir registro na tabela');
          return;
        }

        console.log('Registro inserido com sucesso!');
        res.send(`
          <h1>Card Details</h1>
          <p>Name: ${cardName}</p>
          <p>Image: <img src="${cardImage}" alt="${cardName}"></p>
          <p>Type: ${cardType.join(', ')}</p>
        `);
      });
    })
    .catch(error => {
      console.log('Erro ao fazer a consulta na API Pokemon TCG:', error);
      res.send('Erro ao fazer a consulta na API Pokemon TCG');
    })
    // .finally(() => {
    //   pool.end();
    // });
})}
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
      return response.json(PokeInfo);
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

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });

  
  process.on('SIGINT', () => {
    console.log('Encerrando servidor...');
    server.close(() => {
      console.log('Servidor encerrado.');
      connectiom.end();
      process.exit(0);
    });
  });