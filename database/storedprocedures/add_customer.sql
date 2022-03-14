create procedure add_customer
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
	INSERT INTO customer(customer_id ,first_name, second_name ,last_name,customer_username,phone_number,email,customer_pasword,isAdmin ,isDelete,isSent)
	values(
	@customer_id ,
    @first_name ,
	@second_name ,
	@last_name ,
    @customer_username ,
	@phone_number,
	@email ,
	@customer_pasword ,
	@isAdmin ,
	@isDelete ,
	@isSent
	)
END
