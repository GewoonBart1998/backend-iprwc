const Product = require('../models/product')
const productDao = require('../dao/daoProducts')
const apiResponse = require('./util/ApiResponse')
const ApiResponse = require("./util/ApiResponse");

module.exports = class ProductController{

    static product(req, res, next){
        const products = []
        productDao.getAllProducts()
            .then((result) => {
                for (let i = 0; i != result[0].length; i++) {
                    products.push(new Product(
                        result[0][i].product_id,
                        result[0][i].product_name,
                        result[0][i].product_price,
                        result[0][i].product_description,
                        result[0][i].product_path
                    ))
                }
                return apiResponse.successResponse(products, res);
            })
            // .catch((ignored) => {
            //     return ApiResponse.errorResponse(500, 'Failed to retrieve products', res)
            // });
    }


    static getProductById(req, res, next){
        const products = []
        var product_id = req.params.product_id
            productDao.getProductById(product_id)
                .then(result => {
                    products.push(new Product(
                        result[0][0].product_id,
                        result[0][0].product_name,
                        result[0][0].product_price,
                        result[0][0].product_description,
                        result[0][0].product_path
                    ))
                            return apiResponse.successResponse(products, res)
                            }).catch((ignored) => {
                return ApiResponse.errorResponse(500, 'Failed to retrieve products', res)
            });
        }

    static addProduct(req, res, next){
        const product_name = req.body.product_name;
        const product_price = req.body.product_price;
        const product_description = req.body.product_description;
        const product_path = req.body.product_path;
        const product = new Product (null, product_name, product_price, product_description, product_path)
        productDao.addProduct(product)
            .then((product) => {return apiResponse.successResponse(product, res)})
            .catch((ignored) => {
                return ApiResponse.errorResponse(500, 'Failed to save products', res)
            })

    }

    static editProduct(req, res, next){
        const product_id = req.body.product_id;
        const product_name = req.body.product_name;
        const product_price = req.body.product_price;
        const product_description = req.body.product_description;
        const product_path = req.body.product_path;
        const product = new Product (product_id, product_name, product_price, product_description, product_path)
        productDao.editProduct(product).catch((ignored) => {
            return ApiResponse.errorResponse(500, 'Failed to save products', res)
        })
    }

    static deleteProduct(req, res, next){
        var product_id = req.params.product_id
        productDao.deleteProduct(product_id)
            .then((product) => {return apiResponse.successResponse(product, res)})
            .catch((ignored) => {
                return ApiResponse.errorResponse(500, 'Failed to delete products', res)
            })

    }
}
