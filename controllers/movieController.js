const connection = require('../data/db');

function index(req,res){
    const sql = `SELECT * FROM movies`;
    connection.query(sql,(err,movies)=>{
        if(err) return res.status(400).json({error: `error`});
        res.json({movies})
    })
}

module.exports = index;