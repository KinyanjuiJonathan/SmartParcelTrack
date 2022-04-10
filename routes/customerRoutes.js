const express=require('express')
const router= express.Router()
const customerController = require('../controllers/customerController')
const auth = require("../middleware/auth")



router.get('/:customer_id', customerController.select_customer)
router.post('/login', customerController.login_customer)
router.get('/', customerController.select_customers)
router.post('/signup', customerController.add_customer)
router.put('/:customer_id', auth,customerController.update_customer)
router.delete('/:customer_id', auth,customerController.delete_customer)
router.put('/forgot_pasword/:customer_id', auth, customerController.forgot_Password)


module.exports=router;


