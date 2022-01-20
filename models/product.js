module.exports = class product{
    constructor(product_id, product_name, product_price, product_description, product_path) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_price = product_price;
        this.product_description = product_description;
        this.product_path = product_path;
    }
    
    get getProduct_id() {
        return this.product_id;
    }

    set setProduct_id(value) {
        this.product_id = value;
    }

    get getProduct_name() {
        return this.product_name;
    }

    set setProduct_name(value) {
        this.product_name = value;
    }

    get getProduct_price() {
        return this.product_price;
    }

    set setProduct_price(value) {
        this.product_price = value;
    }

    get getProduct_description() {
        return this.product_description;
    }

    set setProduct_description(value) {
        this.product_description = value;
    }

    get getProduct_path() {
        return this.product_path;
    }

    set setProduct_path(value) {
        this.product_path = value;
    }
}
