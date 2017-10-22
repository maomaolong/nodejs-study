var http = require("http")
var util = require("util")
var url = require("url")

var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"})
	console.log(util.inspect(req,false,0,true))
	res.write(util.inspect(url.parse(req.url)))
	res.end()
})

server.listen(8000)

console.log("listen on http://localhost:8000")