var http = require("http")
var url = require("url")

function onRequest(req,res){
	var ret = url.parse(req.url)
	console.log(ret)

	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.write("hello")
  	res.end('ok')
}

var server = http.createServer(onRequest)

server.listen(8000)

console.log("server listening at localhost:8000")