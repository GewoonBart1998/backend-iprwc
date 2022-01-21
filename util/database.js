const mysql = require('mysql2')

const pool = mysql.createPool({

    host: '194.163.161.228',
    port: '1666',
    user: 'root',
    database: 'skate_store_db',
    password: 'bart-mysql',

});

module.exports = pool.promise();

