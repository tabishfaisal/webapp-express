const connection = require('../data/db');

function index(req, res) {
    const sql = `SELECT * FROM movies`;
    connection.query(sql, (err, movies) => {
        if (err) return res.status(404).json({ error: `error` });
        res.json({ movies })
    })
}
function show(req, res){
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'id not found' });
    }
    const moviesSql = `SELECT * FROM movies where id = ?`;
    connection.query(moviesSql,[id],(error,movies)=>{
        if(error) return res.status(404).json({error:'error'});
        if(movies.length === 0) return res.status(500).json({error: 'error',
            message: 'movie not found'
        })
        const movieWithId = movies[0];
        const reviewsSql = `SELECT * FROM reviews WHERE movie_id = ?`;
        connection.query(reviewsSql,[id],(error,reviews)=>{
            if(error) return res.status(500).json({error: 'error'});
            movieWithId.movies = reviews;
            res.status(200).json(movieWithId)
        })
    });
}

module.exports = {index, show}