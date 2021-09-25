var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	var a = fs.createReadStream(__dirname + "/index.html");
	//a = a.replace("anh", "em");
	a.pipe(res);
}).listen(9000);