const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});


// Connect to DB
mongoose.connect('process.env.DB_CONNECTION',
    { useNewUrlParser: true }, () => {
        console.log('Connected to DB!');
    })

app.listen(3000)
