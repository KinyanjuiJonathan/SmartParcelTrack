CREATE PROCEDURE update_parcel 
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
	If not exists(select*from parcel)
	Begin
update parcel
set 
	parcel_id = @parcel_id ,
	customer_id=@customer_id , 
	parcel_description=@parcel_description ,
	sending_No=@sending_No,
	recieving_No=@recieving_No,
	startlocation=@startlocation,
	endlocation=@endlocation,
	isDelete=@isDelete,
	isSent=@isSent,
	isDelivered=@isDelivered,
	currentLocation=@currentLocation
	End
	End