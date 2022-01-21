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
        return db.query("SELECT * FROM product");
    }

    static getProductById(product_id){
        return db.query("SELECT * FROM product WHERE product_id =?", [product_id]);
    }

    static addProduct(product){
        return db.query(
            'INSERT INTO product (product_name, product_price, product_description, product_path) VALUES (?, ?, ?, ?)',
            [product.product_name, product.product_price, product.product_description, product.product_path])
    }

    static deleteProduct(product_id){
        return db.query('DELETE FROM product WHERE product_id =?', [product_id]);


    }

    static editProduct(product){
        return db.query('UPDATE product SET product_name =?, product_price =?, product_description =?, product_path =? WHERE product_id =?',
        [product.product_name, product.product_price, product.product_description, product.product_path, product.product_id])
    }
}

