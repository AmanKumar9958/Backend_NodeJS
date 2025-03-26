const express = require('express')
const app = express()

// custom middleware..
const morgan = require('morgan');

// rendering the HTML..
app.set('view engine', 'ejs')


// custom middleware..
app.use((req, res, next) => {
    // console.log("user visited") // it will show in the console whenever user visited any route..this is called middleware..
    next(); // it will help use to go to the next route..
})

// using morgan middleware..
// app.use(morgan('dev'));

// creating routes..
// creating CUSTOM middleware for the specific route..
app.get('/', (req, res, next) => {
    console.log("user visited the home page")
    next(); // it will help use to go to the next route/render the HTML..
}, (req, res) => {
    res.render('index.ejs')
})
// using morgan middleware for the specific route..
app.get('/about', morgan('dev'), (req, res) => {
    res.render('about.ejs')
})
app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

// starting the server..
app.listen(4000);