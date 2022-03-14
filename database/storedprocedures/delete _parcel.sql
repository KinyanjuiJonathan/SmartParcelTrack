create procedure delete_parcel
	@parcel_id varchar(50)
	AS
	Begin
	update parcel set isDelete=1
	WHERE parcel_id=@parcel_id
	End

	select * from parcel