const express = require('express');
const userRouter = require('./routes/user.routes.js');
const indexRouter = require('./routes/index.routes.js');

// using the dotenv package..
const dotenv = require('dotenv');
dotenv.config();

// importing the cookies package..
const cookieParser = require('cookie-parser');
cookieParser();

const app = express();

app.set('view engine', 'ejs');

// DB Connection..
const connectionToDB = require('./config/db.js')
connectionToDB();


// for getting data in the console..
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// testing the created routes..
app.use('/', indexRouter);
app.use('/user', userRouter)


app.listen(2704, () => {
    console.log('Drive API is running on port 2704');
})