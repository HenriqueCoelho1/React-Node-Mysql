const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'database_node',
    user: 'user',
    password: '123456',
    database: 'db_node'
})

module.exports = con