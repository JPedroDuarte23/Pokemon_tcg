const axios = require('axios');
const express = require('express');
const app = express()
const mysql = require('mysql')
const PokemonTCG = require('pokemontcgsdk');
PokemonTCG.configure({ apiKey: '52749edc-448b-4551-9345-b8ba0ae3d2a3' })

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'estudante',
  // tirei a senha pq né
  password: '*******',
  database: 'pokemon_tcg'
});
// Faz a consulta na API Pokemon TCG
axios.get(`https://api.pokemontcg.io/v2/cards?q=name:pikachu`)
// Observação - name:pikachu ja está definido, o objetivo é fazer com que a carta que será buscada seja 
// inserida pelo o usuário em uma input e o valor dessa input modifique o caminho do axios
// EX: https://api.pokemontcg.io/v2/cards?q=name:${nomePokemon} e nomePokemon = input_nome_pokemon.value ou sla como faz
  .then(response => {
    // Obtém as informações da carta
    const cardData = response.data.data[0];
    const cardName = cardData.name;
    const cardImage = cardData.images.small;
    const cardtype = cardData.types;

    // Insere as informações na tabela MySQL
    const insertQuery = `INSERT INTO cartas (nome, imagem, tipo) VALUES (?, ?, ?)`;
    const values = [cardName, cardImage, cardtype];

    connection.query(insertQuery, values, (error, results) => {
      if (error) {
        console.log('Erro ao inserir registro na tabela:', error);
        return;
      }

      console.log('Registro inserido com sucesso!');
    });
  })
  .catch(error => {
    console.log('Erro ao fazer a consulta na API Pokemon TCG:', error);
  })
  .finally(() => {
    // Fecha a conexão com o banco de dados após a inserção
    connection.end();
  });