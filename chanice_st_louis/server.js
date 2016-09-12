var http = require("http");
var fs = require("fs");

var server =
  http.createServer(function(request,response) {
	var url = request.url
	if(url === "/"){
    fs.readFile('index.html',function(err,data){
			response.write(data.toString());
			response.end();
		})
	}else if(url === "/page-1"){
  	fs.readFile('page-2.html', function(err,data){
  		response.write(data.toString());
  		response.end();
  	})
	}else if(url === "/page-2"){
  	fs.readFile('page-3.html', function(err,data){
  		response.write(data.toString());
  		response.end();
  	})
	}else if(url === "//main.css"){
  	fs.readFile('main.css',function(err,data){
  		response.writeHead(200,function(err,data){
  		response.write(data.toString());
  		response.end();
  		})
  	})

	}
});


  server.listen(3000);


