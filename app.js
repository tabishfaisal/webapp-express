const express = require('express');
const movieRuoter = require('./Ruotes/movieRuoter');
const app = express();
const PORT = 3000;

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/movies',movieRuoter);


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})