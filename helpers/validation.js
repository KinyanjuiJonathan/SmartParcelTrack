
const joi =require("joi")

const schema =joi.object().keys({
    email: joi.string().required().email(),
    customer_pasword:joi.string().min(8).required()
})
module.exports=schema