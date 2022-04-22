const mssql = require('mssql')
const config = require('../config/db')

const { v4: uuidv4 } = require('uuid');

async function add_parcel (req,res){
    const{parcel_id,customer_username,parcel_description,startlocation,endlocation} = req.body
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('parcel_id', uuidv4(parcel_id))
        .input('customer_username',customer_username)
        .input('parcel_description', parcel_description)
        .input('startlocation',  startlocation)
        .input('endlocation', endlocation)
        .execute("add_Parcel")
        res.json("Parcel added successfully")
    } catch (err){
        console.log(err);
    }
}

// async function get_parcel (req,res){
//     try{
//         const pool = await mssql.connect(config)
//         const result = await pool.request()
//         .execute("select_Parcels")
//         res.json(result.recordset)
//     } catch (err){
//         console.log(err);
//     }
// }
async function get_Parcels (req,res){
    const customer_username = req.body.customer_username
    
    try{
        let pool = await mssql.connect(config)
        let {parcel} = await pool.request()

        .input('customer_username', customer_username)
        .execute("select_parcels")
        
        res.json(parcel.parcels)
        console.log(parcel);
        console.log("parcels in parcel controller");
    } 
    catch (err){
    console.log(err);
    }
}

async function update_parcel (req,res){
    const{parcel_description,sending_No,recieving_No,startlocation,endlocation,currentLocation,isDelivered} = req.body
    const parcel_id = req.params.id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('parcel_id', mssql.VarChar, parcel_id)
        .input('parcel_description', parcel_description)
        .input('sending_No',  sending_No)
        .input('recieving_No',  recieving_No)
        .input('startlocation', startlocation)
        .input('endlocation',  endlocation)
        .input('currentLocation', currentLocation)
        .input('isDelivered', isDelivered)
        .execute("update_Parcel")

        res.json("Parcel updated successfully")

    } catch (err){
        console.log(err);
    }
}
async function delete_parcel (req,res){
    const parcel_id = req.params.parcel_id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input("parcel_id",mssql.VarChar, parcel_id)
        .execute("delete_Parcel")
        res.json("Parcel deleted successfully")

    } catch (err){
        console.log(err);
    }
}

module.exports = {
    add_parcel,
    get_Parcels,
    update_parcel,
    delete_parcel
}