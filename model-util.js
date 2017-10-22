var util = require("util")

function Base() {
	this.name = "base"
	this.sayHello = function(){
		console.log("hello ",this.name)
	}
}

Base.prototype.print = function() {
	console.log("my name is ",this.name)
}

function Sub() {
	this.name = "sub"
}

util.inherits(Sub, Base)

var baseObj = new Base()
baseObj.sayHello()
baseObj.print()
console.log(baseObj)

var subObj = new Sub()
subObj.print()
console.log(subObj)

// util.inspect(object,[showHidden],[depth],[colors])
console.log(util.inspect(subObj,true,5,true))

console.log(util.isArray([]))

console.log(util.isArray(new Array()))

console.log(util.isArray({}))