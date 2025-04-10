const express = require('express');
const router = express.Router();

// for email validation..
const { body, validationResult } = require('express-validator');

// for password hashing..
const bcrypt = require('bcrypt')

// requiring the schema..
const userModel = require('../models/user.model')

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
    async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array(),
            message: 'Invalid data',
        })
    } else{
        const { email, password, username } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)  // password: user password and 10: hash rounds

        const newUser = await userModel.create({
            email,
            password: hashedPassword,
            username,
        })
        res.json(newUser)
    }
})



// exporting the routes..
module.exports = router;