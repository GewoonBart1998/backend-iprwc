module.exports = class Account {
    constructor(account_id, account_name, account_password, account_rol) {
        this._account_id = account_id;
        this._account_name = account_name;
        this._account_password = account_password;
        this._account_rol = account_rol;
    }


    get account_id() {
        return this._account_id;
    }

    set account_id(value) {
        this._account_id = value;
    }

    get account_name() {
        return this._account_name;
    }

    set account_name(value) {
        this._account_name = value;
    }

    get account_password() {
        return this._account_password;
    }

    set account_password(value) {
        this._account_password = value;
    }

    get account_rol() {
        return this._account_rol;
    }

    set account_rol(value) {
        this._account_rol = value;
    }
}
