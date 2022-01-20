CREATE TABLE Account(
 	Account_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Name varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    Admin_account boolean NOT NULL
);

CREATE TABLE Product(
	Product_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Product_name varchar(255) NOT NULL,
    Product_price float NOT NULL,
    Product_description varchar(255) NOT NULL
);
