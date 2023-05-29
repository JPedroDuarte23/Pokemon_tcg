const { default: axios } = require("axios");

const card_insert = () => {
  var deuErro = false;
  var deuCerto = false;
  var deuErroAPI = false;
  var deuErroQntd = false;

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
      deuErroQntd = true;
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
          for (let i = 0; i < quantidadeCartaInput; i++) {
            connection.query(insertQuery, values, (error, results) => {
              if (error) {
                console.log("Erro ao inserir registro na tabela:", error);
                deuErro = true;
              } else {
                console.log("Registro inserido com sucesso!");
                deuCerto = true;
              }
            });
          }
        })
        .catch((error) => {
          console.log("Erro ao fazer a consulta na API Pokemon TCG:", error);
          deuErroAPI = true;
          res.status(500).send({
            error: "Ocorreu um erro ao fazer a requisição para a API Pokémon.",
          });
          return; // Encerra a função para evitar o envio de múltiplos headers
        });
    }
  });

  if (deuErroAPI) {
    return res.status(500).send({
      error: "Ocorreu um erro inesperado, tente novamente mais tarde",
    });
  } else if (deuErro) {
    return res.status(500).send({
      error: "Ocorreu um erro inesperado, tente novamente mais tarde",
    });
  } else if (deuCerto) {
    return res.status(200).send({
      message: "Sua carta foi inserida com sucesso",
    });
  } else if (deuErroQntd) {
    return res.status(400).send({
      error:
        "A quantidade de cartas para registrar não pode ser inferior a 1 e superior a 10",
    });
  }
};
