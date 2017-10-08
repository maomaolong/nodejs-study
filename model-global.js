var fs = require("fs")

var logger = new console.Console(fs.createWriteStream("./stdout.txt"),fs.createWriteStream("./stderr.txt"))

logger.time("getdata")

logger.timeEnd("getdata")

logger.dir(module)

logger.trace("helo")

process.on("exit",function(code){
	logger.log("exit code is ",code)
})

logger.dir(process.argv)

logger.log(process.arch,process.platform)

logger.log(process.cwd())

logger.log(process.version)

logger.dir(process.memoryUsage())