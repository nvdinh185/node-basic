var http = require("http");

http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"text/plain"});
	res.end("Nguyen <u>Van</u> Dinh");	
}).listen(8888);