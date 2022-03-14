const mssql = require('mssql')
const config = require('../config/db')

const bcrypt=require('bcrypt')
require ('dotenv').config()

const validationSchema=require('../helpers/validation')
const jwt=require('jsonwebtoken')


const { v4: uuidv4 } = require('uuid');

async function add_customer (req,res){
    const{customer_id ,first_name, second_name ,last_name,customer_username,phone_number,email,customer_pasword,isAdmin ,isDelete,isSent} = req.body
    
    const {error }= validationSchema.validate(req.body);
    if(error)
    return res
    .status(400)
    .send({success: false,message:error.details[0].message});


    // const schema=joi.object().keys({
    //     email:joi.string().required().email(),
    //     password:joi.string().min(8).required()
    // })
    // const{error}=schema.validate(req.body);
    // if (error) 
    // return res.status(400)
    // .send({success:false,message:error.detail[0].message})

    // const salt = await bcrypt.genSalt(10)
    // console.log(salt)
    // const hashedpassword=await bcrypt.hash(password,salt)
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('customer_id', uuidv4(customer_id))
        .input('first_name', first_name)
        .input('second_name', second_name)
        .input('last_name', last_name)
        .input('customer_username',  customer_username)
        .input('phone_number', phone_number)
        .input('email', email)
        .input('customer_pasword', customer_pasword)
        .input('isAdmin', isAdmin)
        .input('isDelete', isDelete)
        .input('isSent', isSent)
        .execute("add_customer")
        res.json("customer added successfully")

    } catch (err){
        console.log(err);
    }
}
async function select_customers (req,res){
    try{
        const pool = await mssql.connect(config)
        const result = await pool.request().execute("select_customers")
        res.json(result.recordset)
    } catch (err){
        console.log(err);
    }
}
async function select_customer (req,res){
    const customer_id = req.params.customer_id
    try{
        let pool = await mssql.connect(config)
        const result1 = await pool.request()
        .input('customer_id', mssql.VarChar, customer_id)
        .execute("select_customer")
        res.json(result1.recordset)

    } catch (err){
        console.log(err);
    }
}

async function update_customer (req,res){
    const{first_name,second_name,last_name,customer_username,phone_number,email,customer_pasword,isAdmin, isDelete,isSent,endlocation,} = req.body
    const customer_id = req.params.customer_id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('customer_id', mssql.VarChar, customer_id)
        .input('first_name',  first_name)
        .input('second_name',  second_name)
        .input('last_name',  last_name)
        .input('customer_username', customer_username)
        .input('phone_number',phone_number)
        .input('email',email)
        .input('isAdmin',isAdmin)
        .input('isDelete',isDelete)
        .input('isSent',isSent)
        .input('customer_pasword',customer_pasword)
        .execute("update_customer")

        res.json("customer updated successfully")

    } catch (err){
        console.log(err);
    }
}
async function delete_customer (req,res){
    const customer_id = req.params.customer_id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input("customer_id",mssql.VarChar,customer_id)
        .execute("delete_customer")
        res.json("customer deleted successfully")

    } catch (err){
        console.log(err);
    }
}

module.exports = {
    add_customer,
    select_customer,
    select_customers,
    update_customer,
    delete_customer
}