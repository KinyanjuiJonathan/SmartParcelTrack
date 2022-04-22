const mssql = require('mssql')
const config = require('../config/db')

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {schemaLogincustomer, schemaCreatecustomer, schemaForgotPassword} = require('../helpers/validation')

async function add_customer (req,res){
    const{
        customer_id ,
        first_name, 
        second_name,
        last_name,
        customer_username,
        phone_number,
        email,
        customer_pasword,
       } = req.body
     
    const{error}= schemaCreatecustomer.validate(req.body)
    // if (error)
    //     return res
    //         .status(400)
    //         .send({seccess:false,message:error.details[0].message})
    
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
        .input('customer_pasword',bcrypt.hashSync(customer_pasword,bcrypt.genSaltSync()))
        .execute("add_customer")
        res.json("customer added successfully");
        console.log(customer_id ,first_name, second_name ,last_name,customer_username,phone_number,email,customer_pasword);
        console.log("in the controller");

    } catch (err){
        console.log(err);
    }
}
async function login_customer (req,res){
    const{customer_username,customer_pasword}=req.body
    const { error } = schemaLogincustomer.validate(req.body)
    if (error)
    return res
    .status(400)
    .send({success:false,message: error.details[0].message})
  
    try{
        
        let pool = await mssql.connect(config)
        let {recordset} = await pool.request()
        // .query(`select * from customer  where customer_username='${customer_username}'`)
        .input('customer_username', customer_username)
        .input('customer_pasword', customer_pasword)
        .execute("login_customer")
        const customer = recordset[0];
        console.log(customer);
        console.log(customer.customer_pasword);

      
        if (!customer_username) res.status(400).send({Message:"user does not Exist"})
    
        const validpassword = await bcrypt.compare( customer_pasword, customer.customer_pasword)
        if(!validpassword) return res.send('Invalid credentials')

        const token = jwt.sign(customer, process.env.SECRET_KEY, { expiresIn: '10m'})
        res.send({customer, token})
       
    
    } 
    catch (err){
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
    const{first_name,second_name,last_name,customer_username,phone_number,email,customer_pasword,isAdmin, isDelete,isSent} = req.body
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
async function forgot_Password (req, res){
    const {customer_id, customer_pasword} = req.body
    const { error } = schemaForgotPassword.validate(req.body)
    if(error)
        return res
            .status(400)
            .send({ success: false, message: error.details[0].message})
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('customer_id',  customer_id)
        .input('customer_pasword', bcrypt.hashSync(customer_pasword,bcrypt.genSaltSync()))
        .execute("forgot_Password")

        res.json("Password changed successfully")

        const validpassword = await bcrypt.compare( customer_pasword, customer.customer_pasword)
        if(!validpassword) return res.send('Invalid credentials')

        const token = jwt.sign(customer, process.env.SECRET_KEY, { expiresIn: '10m'})
        res.send({customer, token})

    } catch (err){
        console.log(err);
    }
}
module.exports = {
    add_customer,
    select_customer,
    login_customer,
    select_customers,
    update_customer,
    delete_customer,
    forgot_Password
}