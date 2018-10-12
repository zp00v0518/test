const http = require ("http");
const url = require("url");
const getMethod = require("./myModules/tube.js").getMethod;
const postMethod = require("./myModules/tube.js").postMethod;


var port = 3001;

var server = http.createServer();

server.listen(port, function(){
	console.log("Сервер запущен по адресу localhost:"+port);
	console.log("*****************************************************************");
})

server.on("request", function(req, res){
	var urlParse = url.parse(req.url);
	
	if (req.method == "GET") {
		getMethod(req,res, urlParse,__dirname);
	} else if (req.method == "POST") {
		console.log(urlParse)
		postMethod(req,res, urlParse);
	}
});