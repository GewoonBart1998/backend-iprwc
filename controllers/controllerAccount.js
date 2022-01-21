const apiResponse = require('./util/ApiResponse')
const accountDao = require('../dao/daoAccounts')
const Account = require('../models/account')
const authorizationUtil = require ('../util/authorizationUtil')
const ApiResponse = require("./util/ApiResponse");


module.exports = class AccountController{

    static addAccount(req, res, next){
        const account_name = req.body.account_name;
        const account_password = req.body.account_password;
        const account_rol = req.body.account_rol

        authorizationUtil.hashPassword(account_password).then((hashedPassword) =>{
            const  account = new Account (null, account_name, hashedPassword, account_rol)
            accountDao.addAccount(account).then(account => {
                return apiResponse.successResponse(account, res)

            }).catch((ignored) => {
                return ApiResponse.errorResponse(500, 'Failed to save products', res)
            })
        })


    }


}
