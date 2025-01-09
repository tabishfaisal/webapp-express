const sql = require('mysql2');

const connection = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWARD,
    database: process.env.DB_NAME
})
connection.connect((err)=>{
    if(err) throw err
})

module.exports = connection;