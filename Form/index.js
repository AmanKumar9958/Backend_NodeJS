const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// when using post method to send data to the server, we have to use these two middleware (builtin)..
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

// route for sending data to server..
// get shows all the things in the url..
// app.get('/send', (req, res) => {
//     console.log(req.query);
//     res.send('Data received')
// })

// post method..
app.post('/send', (req, res) => {
    console.log(req.body);
    res.send('Data received')
})

app.listen(2000)