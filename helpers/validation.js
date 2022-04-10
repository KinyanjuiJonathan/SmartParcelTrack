const Joi = require('joi')

const schemaCreatecustomer = Joi.object().keys({
    first_name: Joi.string().required(),
    second_name: Joi.string().required(),
    last_name: Joi.string().required(),
    customer_username: Joi.string().required(),
    phone_number: Joi.number().required(),
   
    customer_pasword: Joi.string().min(8).required(),
    // isAdmin:Joi.binary().required(),
    // isDelete:Joi.binary().required()
})
const schemaLogincustomer = Joi.object().keys({
    customer_username: Joi.string().required(),
    customer_pasword: Joi.string().min(8).required(),

})
const schemaforgot_password = Joi.object().keys({
    customer_pasword: Joi.string().min(8).required(),

})

module.exports = {schemaCreatecustomer, schemaLogincustomer, schemaforgot_password}