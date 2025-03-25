const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url == "/about"){
        res.end("This is user's about page..")
    } else if(req.url == '/profile'){
        res.end("This is user's profile page..")
    } else if(req.url == '/contact'){
        res.end("This is contact page..")
    } else{
        res.end("Hello user")
    }
})

server.listen(5000);

// use nodemon to run the server, this will help to run the code easily without stopping the server again and again after changing in the code..