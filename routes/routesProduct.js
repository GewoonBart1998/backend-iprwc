const express = require('express');
const router = express.Router();

const productController = require('../controllers/controllerProducts');

router.get('/getAllProducts', productController.product);
router.get('/:product_id', productController.getProductById);
router.post('/addProduct', productController.addProduct);
router.delete('/:product_id', productController.deleteProduct);
router.put('/:product_id', productController.editProduct)

module.exports = router;
