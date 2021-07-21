use db_node; 

CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
  	name VARCHAR(100) NOT NULL,
  	username VARCHAR(30),
  	password VARCHAR(100),
  	email VARCHAR(100) UNIQUE NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
  	phone INT,
  	is_validated TINYINT(1) NOT NULL DEFAULT 0,
  	dh_insert DATETIME,
  	dh_update DATETIME,
  	PRIMARY KEY(id)
);



-- drop table user;





