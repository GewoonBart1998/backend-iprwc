const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const account = require('../models/account')

module.exports = class authorizationUtil{

    static async validPassword (password, hash) {
        return bcrypt.compare(password, hash)
    }

    static getJWTKey () {
        return process.env.JWT_SECRET_KEY
    }

    /**
     * Hahshes password with sha512.
     * @function
     * @param {string} password - The password you want to hash.
     * @returns {Object} with {salt, passwordHash}
     */
    static async hashPassword (password) {
        const randomLength = Math.random() * 16
        const salt = bcrypt.genSaltSync(randomLength)

        return bcrypt.hash(password, salt)
    }

    /**
     * Creates a jwt key
     * @function
     * @param {Number} userId - User his id (likely coming from the database)
     * @param {string} email - User his email
     * @param {boolean} isAdmin - Wheather the user is admin or not
     * @returns {string} - The generated jwt token
     */
    static createJWT (account_name, account_rol) {
        const token = jwt.sign({account_name, account_rol }, this.getJWTKey(), {
            algorithm: 'HS256'
        })

        return token
    }
}
