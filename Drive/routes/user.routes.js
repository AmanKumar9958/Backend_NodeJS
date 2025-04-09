const express = require('express');
const router = express.Router();

// for validation..
const { body, validationResult } = require('express-validator');


router.get('/', (req, res) => {
    res.render('index');
})

// route for user registration..
router.get('/register', (req, res) => {
    res.render('register');
});

// route for sending data to server..
router.post('/register', 
    // validating the data..
    body('email').trim().isEmail().isLength({min: 13}).withMessage('Invalid email address'),
    body('password').trim().isLength({ min: 5 }).withMessage('Password should be at least 5 characters long'),
    body('username').trim().isLength({ min: 3 }).withMessage('Username should be at least 3 characters long'),
    (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array(),
            message: 'Invalid data',
        })
    } else{
        res.send('User registered successfully');
    }
})



// exporting the routes..
module.exports = router;