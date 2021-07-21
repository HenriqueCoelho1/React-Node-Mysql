use db_node; 

CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    phone INT,
    is_validated TINYINT(1) NOT NULL DEFAULT 0,
    dh_insert DATETIME DEFAULT NOW(),
    dh_update DATETIME DEFAULT NOW(),
    PRIMARY KEY(id)
);


-- drop table user;





