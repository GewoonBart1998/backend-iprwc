const express = require('express')
const routesProduct = require('./routesProduct')
const routesAccount = require('./routesAccount')

const router = express.Router()

router.use('/product',routesProduct)
router.use('/account',routesAccount)

module.exports = router
