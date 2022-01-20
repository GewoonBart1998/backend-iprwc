const product = require('../models/product')
const db = require("../util/database");

module.exports = class daoProducts{
    constructor(product_id, product_name, product_price, product_description, product_path) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_price = product_price;
        this.product_description = product_description;
        this.product_path = product_path;

    }

    static getAllProducts(){
        return db.query("SELECT * FROM Product");
    }

    static getProductById(product_id){
        return db.query("SELECT * FROM Product WHERE product_id =?", [product_id]);
    }

    static addProduct(product){
        db.query(
            'INSERT INTO Product (product_name, product_price, product_description, product_path) VALUES (?, ?, ?, ?)',
            [product.product_name, product.product_price, product.product_description, product.product_path])
    }

    static deleteProduct(product_id){
        db.query('DELETE FROM Product WHERE product_id =?', [product_id]);

    }

    static editProduct(){

    }
}

