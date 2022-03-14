create  procedure update_customer
	@customer_id varchar(50),
    @first_name VARCHAR(50) ,
	@second_name varchar(50),
	@last_name varchar(50),
    @customer_username varchar(50),
	@phone_number varchar(20),
	@email varchar(50),
	@customer_pasword varchar(50),
	@isAdmin BIT,
	@isDelete BIT,
	@isSent BIT
	AS
	Begin
	If NOT exists(select * from customer)
	Begin 
	update customer
	set
	customer_id=@customer_id ,
    first_name=@first_name ,
	second_name=@second_name ,
	last_name=@last_name ,
    customer_username=@customer_username ,
	phone_number=@phone_number,
	email=@email ,
	customer_pasword=@customer_pasword ,
	isAdmin=@isAdmin ,
	isDelete=@isDelete ,
	isSent=@isSent
	End
	End