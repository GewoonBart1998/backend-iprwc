const apiResponse = require('./util/ApiResponse')
const accountDao = require('../dao/daoAccounts')
const authDao = require('../dao/daoAuth')
const account = require('../models/account')
const authorizationUtil = require ('../util/AuthorizationUtil')

module.exports = class authController{

    static login (req, res, next){
        const account_name = req.body.account_name
        const account_password = req.body.account_password

        if ( !account_name || !account_password){
            return apiResponse.errorResponse(400, 'Missing username or password', res)
        }

        authDao.isAdmin(account_name)
            .then((result) => {
                if (result !== undefined) {
                    authorizationUtil.validPassword(account_password, result[0][0].account_password).then((validPassword) => {
                        if (validPassword) {
                            accountDao.getByAccountId(result[0][0].account_id).then((isAdmin) =>{
                                const token = authorizationUtil.createJWT(isAdmin[0][0].account_name, isAdmin[0][0].account_rol)
                                return apiResponse.successResponse({
                                    key: token,
                                    rol: isAdmin[0][0].account_rol
                                }, res)
                            })
                        } else {
                            return ApiResponse.errorResponse(403, 'Invalid password', res)}
                    })
                } else {
                    return ApiResponse.errorResponse(404, 'User not found', res)
                }
            })
    }
}
