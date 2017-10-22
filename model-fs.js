var fs = require("fs")

fs.readFile("./README.md",function(err,data){
	if (err) {
		console.log(err)
	}else{
		console.log(data.toString())
	}
})

fs.stat("./README.md",function(err,stat){
	if (err) {
		console.log(err)
	}else{
		console.log("stat.isFile()",stat.isFile())
		console.log("stat.isDirectory()",stat.isDirectory())
	}
})