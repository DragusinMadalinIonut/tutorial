const http = require('http')

const server = http.createServer((req, res) => {
 if(require.url =='/'){
    res.end('Welcome to our home page')
 }
 if(require.url =='/'){
    res.end('Here is our short history.')
 }
res.end(`
    <h1>oops</h1>
    <p>We can't seem to find the page you are looking fior</p>
    <a href="/">back home</a>
`)
})

server.listen(5000)