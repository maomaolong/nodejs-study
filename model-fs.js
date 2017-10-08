var fs = require("fs")

fs.readFile("./README.md",function(err,data){
	if (err) {
		console.log(err)
	}else{
		console.log(data.toString())
	}
})