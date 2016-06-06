var fs = require('fs');
console.log("Asynch BEGIN");
var options = {encoding: 'utf8', flag: 'r'};

fs.readFile('./data.txt', options, function(err, fileData){
	if (err){
		console.log("File not found");
	}else{
		console.log(fileData);
	};

});

console.log("Asynch Program ends");

