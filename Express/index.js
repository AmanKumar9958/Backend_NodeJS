const express = require('express');
const app = express();

// rendering the html file
app.set('view engine', 'ejs');

// creating the routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})

app.get('/profile', (req, res) => {
    res.render('profile.ejs')
})

// starting the server..
app.listen(3000);