var msgpack = require("msgpack")
var assert = require("assert")

var o = {"a" : 1,"b" : 2,"c" : [4,5,6]}
console.log(o)
var str = msgpack.pack(o)
console.log("str",str)

var oo = msgpack.unpack(str)
console.log(oo)

assert.deepEqual(oo,o)
