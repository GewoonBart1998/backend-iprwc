const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/controllerProducts');

router.get('/getAllProducts', ProductController.product);
router.get('/:product_id', ProductController.getProductById);
router.post('/addProduct', ProductController.addProduct);
router.delete('/:product_id', ProductController.deleteProduct);
router.patch('/:product_id', ProductController.editProduct)

module.exports = router;
