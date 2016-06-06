
var net = require("net");

var server = net.createServer(function(client){
	console.log("Socket server is created.");

	//Events
	client.on("connect", function(){
		console.log("A client connected." );
	});

	client.on("data", function(dt){
		console.log("Data from client : " + dt.toString());
	});

	client.on("end", function(){
		console.log("client connection ended. " );
	});

	client.write("Hey Client, how are you?");
});

server.listen(2222, function(){
	console.log("server listening on port 2222");
});