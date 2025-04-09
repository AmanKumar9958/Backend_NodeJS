const express = require('express');
const app = express();
const path = require('path');

// Calling the schema from mongoose that we have created..
const userModel = require('../Mongo/Models/user')

// Connecting to the database..
const connection = require('../Mongo/Config/db')

// rendering the HTML..
app.set('view engine', 'ejs');

// when using post method to send data to the server, we have to use these two middleware (builtin)..
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// adding CSS file..
app.use(express.static('public'));

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
app.post('/send', async (req, res) => {
    // console.log(req.body);

    // fetching the data from the form..
    const { username, email, password, gender } = req.body
    await userModel.create({
        username: username,
        email: email,
        password: password,
        gender: gender,
    })
    res.redirect('/all-users')
})

// Fetching the data from the database..
app.get('/all-users', async (req, res) => {
    userModel.find({
        // username: 'Sunny',
    }).then((users) => {
        res.render('users.ejs', { users: users })
    })
})

// updating user..
app.get('/update-user', async (req, res) => {
    userModel.findOneAndUpdate({
        email: 'Sumit@sumit.com',
    }, {
        username: 'Sumit Kumar',
        gender: 'Male'
    }).then((user) => {
        res.send('User updated')
    })
})

// deleting user..
app.get('/delete-user', async (req, res) => {
    userModel.findOneAndDelete({
        username: 'Sumit Kumar',
    }).then((user) => {
        res.send('User deleted')
    })
})


app.listen(2000)