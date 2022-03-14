create procedure login_user
	@customer_username varchar(50),
	@email varchar(50),
	@customer_pasword varchar(50)
	AS
	Begin
	(select*from customer
	where email=@email and customer_username=@customer_username and customer_pasword=@customer_pasword)
	End