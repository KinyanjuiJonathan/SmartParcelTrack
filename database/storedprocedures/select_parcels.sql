CREATE PROCEDURE select_parcels
AS
BEGIN
    SELECT * FROM parcel
    WHERE parcel_id=parcel_id
END