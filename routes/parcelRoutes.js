const express=require('express')
const router= express.Router()
const parcelController = require('../controllers/parcelController')

router.get('/:parcel_id', parcelController.select_parcel)
router.get('/', parcelController.select_parcels)
router.delete('/:parcel_id', parcelController.delete_parcel)
router.post('/', parcelController.add_parcel)
router.put('/:id', parcelController.update_parcel)

module.exports=router;