<<<<<<< HEAD
var http = require('http');

var server = http.createServer(function(request,response){

	response.writeHead(200,{"Content-Type":"text/plain"});
	response.end("helloworld \n");

});


			var express = require('express')();
				express.get('/nvd',function(req,res){
					res.send('hello from 22');
					res.end("hello from eee");
					});
				var serverExpress = express.listen(322,'localhost',function(){

					var host = serverExpress.address().address;
					var port = serverExpress.address().port;	

					console.log("Example app listening at http://%s:%s",host,port)
				});


server.listen(885,'127.0.0.1',function(){

			var host = server.address().address;
			var port = server.address().port;

					console.log("Example app listening at http://%s:%s",host,port)

});
=======
console.log("hello world");
>>>>>>> 219f655... adding appjs
