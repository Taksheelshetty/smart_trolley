const express = require('express')
const router  = express.Router()
const addProduct = require('../controllers/bill.controller')

router.post('/api/addToBill', addProduct)
// router.post("/api/deleteFromBill", deleteProduct)

module.exports = router