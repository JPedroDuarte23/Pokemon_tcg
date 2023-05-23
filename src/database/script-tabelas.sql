-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE pokemon_tcg;

USE pokemon_tcg;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(100),
	senha VARCHAR(50)
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



/*
comando para sql server - banco remoto - ambiente de produção
*/

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
