CREATE TABLE parcel (
    parcel_id varchar(50)Primary key ,
	customer_id varchar(50) FOREIGN KEY references customer(customer_id),
    parcel_description VARCHAR(50) not null,
	sending_No varchar(30),
	recieving_No varchar(50),
	startlocation varchar(50),
	endlocation varchar(50),
	isDelete BIT,
	isSent BIT,
	isDelivered BIT,
	currentLocation varchar(50),

);