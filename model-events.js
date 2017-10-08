var events = require("events")

var eventEmitter = new events.EventEmitter()

eventEmitter.on("connect",function(args1,args2) {
	console.log("connected server",args1,args2)

	eventEmitter.emit("data","args1","args2")
})

eventEmitter.on("data",function(args1,args2){
	console.log("receive data",args1,args2)
})

console.log("start progress")

eventEmitter.emit("connect","args1","args2")

console.log("end progress")

