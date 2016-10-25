var mysql = require('mysql');

exports.pool = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'music'
})