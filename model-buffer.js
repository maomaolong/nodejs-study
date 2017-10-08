
/* old
var buf = new Buffer(10)

console.log(buf.length)

var buf1 = new Buffer("hello world")

buf1.write("xxxttttttttttttt")

var buf2 = new Buffer("ddddd")

console.log(buf1)

var buf3 = Buffer.concat([buf1,buf2])

console.log(buf3.toString())

*/


var buf = Buffer.from("hello world!")
console.log(buf.toString())