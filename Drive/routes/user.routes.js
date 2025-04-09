const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index');
})

// route for user registration..
router.get('/register', (req, res) => {
    res.render('register');
});

// route for sending data to server..
router.post('/register', (req, res) => {
    console.log(req.body)
    res.send('User registered successfully!');
})



// exporting the routes..
module.exports = router;