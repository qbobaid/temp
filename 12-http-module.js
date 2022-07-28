const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to the home page')
    } else if (req.url ==='/about') {
        res.end('There will be a short intro of us soon')
    } else {
        res.end(
            '<h1> Opps!!!</h1> <p>Sorry the page is unavailable</p> <a href="/"> Back to Home</a>' 
            
        )
    }
})

server.listen(5000)