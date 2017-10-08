var fs = require("fs")

// var readStream = fs.createReadStream('./README.md')

// readStream.setEncoding("utf-8")
// readStream.setEncoding("hex")

// var data = ""

// readStream.on("data",function(chunk){
// 	data = data + chunk
// })

// readStream.on("end",function(){
// 	console.log(data)
// })

// readStream.on("error",function(err){
// 	console.log(err.stack)
// })

// console.log("start read ./README.md")

// var writeStream = fs.createWriteStream("./output.txt")

// var str = "hello world!"

// writeStream.write(str)

// writeStream.end()

// writeStream.on("finish",function(){
// 	console.log("write finish")
// })

// writeStream.on("error",function(err){
// 	console.log(err.stack)
// })


// console.log("start write ./output.txt")

// readStream.pipe(writeStream)

var zlib = require("zlib")

fs.createReadStream('./README.md').pipe(zlib.createGzip()).pipe(fs.createWriteStream("./output.txt.gz"))




