const express = require('express')
const routesProduct = require('./routesProduct')
const routesAccount = require('./routesAccount')
const routesAuth = require('./routesAuth')

const router = express.Router()

router.use('/product',routesProduct)
router.use('/account',routesAccount)
router.use('/auth', routesAuth)

module.exports = router
