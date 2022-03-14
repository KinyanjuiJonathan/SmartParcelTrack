create procedure delete_customer
	@isDelete BIT
	AS
	Begin
	update customer 
	set isDelete=1
	End