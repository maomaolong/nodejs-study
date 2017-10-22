var http = require("http")
var querystring = require("querystring")

var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>'

var server = http.createServer(function(req,res){
	var body = ""

	req.on("data",function(chunk){
		body = body + chunk
	})

	req.on("end",function(){
		body = querystring.parse(body)
		console.log(body)
		res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
		if (body.name && body.url) {
			res.write("web name "+body.name)
			res.write("<br>")
			res.write("web url "+body.url)
		}else{
			res.write(postHTML)
		}
		res.end()
	})
})

server.listen(8000)

console.log("server listen on http://localhost:8000")
