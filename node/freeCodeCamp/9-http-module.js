const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to home page')
    } else if(req.url === '/about') {
        res.end('Here is our history')
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>Page not found</p>
        <a href = "/">back home</a>`)
    }
})

server.listen(5002)