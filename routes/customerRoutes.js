const express=require('express')
const router= express.Router()
const customerController = require('../controllers/customerController')

router.get('/:customer_id', customerController.select_customer)
router.get('/', customerController.select_customers)
router.post('/', customerController.add_customer)
router.put('/:customer_id', customerController.update_customer)
router.delete('/:customer_id', customerController.delete_customer)

module.exports=router;