const fs = require("fs");
const path = require("path");
const reqOn = require ("./tube").reqOn;

function postMethod(req,res, urlParse) {
	// console.log("********** PostMethod Work ************");
		var data ="";
		req.on('data', function(chunk){
			data += chunk;
		})
		req.on("end", function(){
			console.log(data)
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.end(data);

		})
}

module.exports = postMethod;

