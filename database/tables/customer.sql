const mssql = require('mssql')
const config = require('../config/db')

const {v4: uuidv4}=require ('uuid');

CREATE TABLE customer (
    customer_id varchar(50) Primary key ,
    first_name VARCHAR(50) not null,
	second_name varchar(50) not null,
	last_name varchar(50) not null,
    customer_username varchar(50) primary key not null,
	phone_number varchar(20),
	email varchar(50),
	customer_pasword varchar(50),
	isAdmin BIT,
	isDelete BIT,
	isSent BIT,
);