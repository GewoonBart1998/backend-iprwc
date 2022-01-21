const express = require('express');
const router = express.Router();

const authController = require('../controllers/controllerAuth')


router.post('/loginAdmin', authController.login);

module.exports = router;
