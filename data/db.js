const sql = require('mysql2');

const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'boolean123@',
    database: 'movies_db'
})
connection.connect((err)=>{
    if(err) throw err
})

module.exports = connection;