var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "application/json"});
	
	var obj = {
			ho: "Nguyen",
			ten: "Dinh",
			namsinh: 1991,
		};
	res.end(JSON.stringify(obj));
	
}).listen(1111);