var http = require("http")

var server = http.createServer(function(req,res){
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.write("hello")
  	res.end('ok')
})

server.listen(8000)
console.log("listening at localhost:8000")
