const express = require('express');
const router = express.Router();
const accountController = require('../controllers/controllerAccount')

module.exports = router;

// router.get('/:getAccountByName', accountController.getByAccountName)
router.post('/addAccount', accountController.addAccount)
