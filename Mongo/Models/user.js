const mongoose = require('mongoose');

// Creating Schema..
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    }
})

// Creating Model..
const userModel = mongoose.model('user', userSchema);   // user => name of the collection in the database.. userSchema => schema that we have created..

// Exporting the model..
module.exports = userModel;