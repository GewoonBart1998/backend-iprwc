const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    // port: '3306',
    user: 'root',
    database: 'skate_store_db',
    password: '11Bartlooij',

    // host: '145.131.8.172',
    // // port: '3306',
    // user: 'adminuser',
    // database: 'skate_store_db',
    // password: '11Bartlooij',
});

module.exports = pool.promise();
