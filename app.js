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
mongoose.connect(process.env.DD_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'))
    .catch(err => {
        console.log('Connection Error:', err.message);
    })

app.listen(3000)
