const http = require('http');

// creating server..
const server = http.createServer((req, res) => {
    res.end("Hello user")
})

// starting server..
server.listen(3000)