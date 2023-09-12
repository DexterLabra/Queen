const http = require("http")

http.createServer((request, result) => {
    result.writeHead(200, {"Content-Type": "text/html"})
    console.log("Successfully Connected to the server")
    result.end("Successfully Connected to the server")
    
}).listen(3000)