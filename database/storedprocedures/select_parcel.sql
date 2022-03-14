CREATE PROCEDURE select_parcel
@parcel_id varchar(50)
AS
BEGIN
    SELECT * FROM parcel
    WHERE parcel_id=@parcel_id
END