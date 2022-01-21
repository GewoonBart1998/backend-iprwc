const db = require("../util/database");

module.exports = class daoAccounts{
    constructor(account_id, account_name, account_password, account_rol) {
        this.account_id = account_id;
        this.account_name = account_name;
        this.account_password = account_password;
        this.account_rol = account_rol;
    }

    static addAccount(account){
        return db.query('INSERT INTO account (account_name, account_password, account_rol) VALUES (?, ?, ?)',
        [account.account_name, account.account_password, account.account_rol])
    }

    static getByAccountId(account_id){
        return db.query("SELECT * FROM account WHERE account_id =?",
            [account_id]);
    }
}
