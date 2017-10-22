var http = require("http")
var msgpack = require("msgpack")
var assert = require("assert")

var o = {"a" : 1,"b" : 2,"c" : [4,5,6]}
console.log(o)
var str = msgpack.pack(o)
console.log("str",str)

var oo = msgpack.unpack(str)
console.log(oo)

assert.deepEqual(oo,o)

var server = http.createServer(function(req,res) {
	res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"})
	res.write(str)
	res.end()
})

server.listen(8000)

console.log("server listen on 8000")


