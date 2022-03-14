CREATE PROCEDURE select_customer
	@customer_id varchar(50)
AS
BEGIN
    SELECT * FROM customer
    WHERE customer_id=@customer_id and isDelete=0
END