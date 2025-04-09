const express = require('express');
const userRouter = require('./routes/user.routes.js');

const app = express();

app.set('view engine', 'ejs');

// testing the created routes..
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter)


app.listen(3000, () => {
    console.log('Drive API is running on port 3000');
})