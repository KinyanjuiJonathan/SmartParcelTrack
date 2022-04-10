CREATE TABLE parcel (
    parcel_id varchar(50)Primary key ,
	customer_username varchar(50) FOREIGN KEY references customer(customer_username),
    parcel_description VARCHAR(50) not null,
	startlocation varchar(50) not null,
	endlocation varchar(50)not null,
	isDelete BIT default 0,
	isSent BIT default 0,
	isDelivered BIT default 0,
);