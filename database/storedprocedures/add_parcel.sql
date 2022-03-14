CREATE PROCEDURE add_parcel 
    @parcel_id varchar(50),
	@customer_id varchar(50),
    @parcel_description VARCHAR(50),
	@sending_No varchar(30),
	@recieving_No varchar(50),
	@startlocation varchar(50),
	@endlocation varchar(50),
	@isDelete BIT,
	@isSent BIT,
	@isDelivered BIT,
	@currentLocation varchar(50)
	AS 
	Begin
	INSERT INTO parcel( parcel_id,customer_id,parcel_description,sending_No,recieving_No,startlocation,endlocation,isDelete,isSent,isDelivered,currentLocation)
	VALUES( 
	@parcel_id ,
	@customer_id , 
	@parcel_description ,
	@sending_No,
	@recieving_No,
	@startlocation,
	@endlocation,
	@isDelete,
	@isSent,
	@isDelivered,
	@currentLocation
	)
	END