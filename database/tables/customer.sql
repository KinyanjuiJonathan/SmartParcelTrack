const mssql = require('mssql')
const config = require('../config/db')

const {v4: uuidv4}=require ('uuid');


CREATE TABLE customer (
    customer_id varchar(50),
    first_name VARCHAR(50) not null,
	second_name varchar(50) not null,
	last_name varchar(50) not null,
    customer_username varchar(50) not null primary key,
	phone_number varchar(20),
	email varchar(50),
	customer_pasword varchar(50),
	isAdmin BIT default 0,
	isDelete BIT default 0,
	isSent BIT default 0,
);
