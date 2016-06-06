var net = require("net");

var options = {port:"2222", host:"127.0.0.1"};
var client = net.connect(options, function(){
	console.log(" connecting to the server...");
	client.write("EEE");
});

//socket Events
client.on("connect", function(){
	console.log("Connection Established" );
});
client.on("data", function(dt){
	console.log("Data received from server:" + dt.toString());
});

client.write("A");
client.write("B");
client.write("C");
client.write("D");