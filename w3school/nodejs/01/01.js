const http = require("http");
// const data = require("./module.js")


http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/hmtl"})
    res.write(req.url)
    res.end()
}).listen(8080)
