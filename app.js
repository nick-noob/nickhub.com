const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
 if (req.url === "/") {
	 fs.readFile(path.join(__dirname, 'index.html'), function(err, data) {
		 if (err) {
			 res.writeHead(404);
			 res.end(JSON.stringify(err));
			 return;
		 }
		 res.writeHead(200);
		 res.end(data);
	});
	}	
}).listen(3000);

console.log("Server started on port 3000");
