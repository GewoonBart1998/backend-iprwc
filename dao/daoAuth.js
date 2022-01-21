const db = require("../util/database");

module.exports = class daoAccounts {
    constructor(account_id, account_name, account_password, account_rol) {
        this.account_id = account_id;
        this.account_name = account_name;
        this.account_password = account_password;
        this.account_rol = account_rol;
    }

    static isAdmin(account_name){
        return db.query('SELECT * FROM account WHERE account_name =?',
            [account_name])
    }

}

