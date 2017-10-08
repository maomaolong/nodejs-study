
// console.log("require.main.filename",require.main.filename)

// console.log("__filename",__filename)

// if (require.main.filename === module.filename) {
// 	console.log("true")
// }

// exports.hello = function(){
// 	console.log("hello print")
// }

function Hello(){
	var name = ""
	this.setName = function(_name){
		name = _name
	}
	this.getName = function(){
		return name
	}
}

module.exports = Hello