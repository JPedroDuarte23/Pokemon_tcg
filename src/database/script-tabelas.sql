CREATE DATABASE pokemon_tcg;

USE pokemon_tcg;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(100),
	senha VARCHAR(50)
);
CREATE TABLE deck (
	idDeck INT PRIMARY KEY AUTO_INCREMENT,
	nomeDeck VARCHAR(45),
	tipoPrincipal VARCHAR(20),
	imagem VARCHAR(200),
	vitorias INT,
	derrotas INT,
	fkUsuario INT,
	CONSTRAINT fkDeckUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);
CREATE TABLE cartas (
	idCarta INT AUTO_INCREMENT,
	nome VARCHAR(50),
	suptipo VARCHAR(45),
	subtipo VARCHAR(45),
	imagemPequena VARCHAR(150),
	imagemGrande VARCHAR(150),
	tipo VARCHAR(45),
	raridade VARCHAR(45),
	series VARCHAR(45),
	nomeSet VARCHAR(45),
	numero VARCHAR(15),
	fkUsuario INT, 
	fkDeck INT,

	CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
	CONSTRAINT fkDeck FOREIGN KEY (fkDeck) REFERENCES deck(idDeck),
	CONSTRAINT pkComposta PRIMARY KEY (idCarta, fkUsuario)
);
