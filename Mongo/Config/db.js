const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/form').then(() => {
    console.log("Connected to the Database Successfully..")
})

module.exports = connection;