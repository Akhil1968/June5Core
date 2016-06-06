var fs = require("fs");

var fruits = ["Mango", "Banana", "Apple", "Grapes", "Guava", "Orange"];

function writeFruits(fd){
	if (fruits.length){
		var aFr = fruits.pop();
		aFr += "   ";
		
		// Write buffer to the file specified by fd. 
		// fs.write(fd, buffer, offset, length, callback)
		fs.write(fd, aFr, null, null, function(err, bytes){
			if (err){
				console.log("Error writing to file");
			}else{
				console.log(aFr + " written successfully");
				writeFruits(fd);
			}
		});

	}else{
		console.log("No more fruits to write. Closing the file");
		fs.close(fd);
	}
};

fs.open("./fruits.txt", "w", function(err, fd){
	if (err){
		console.log("File could not be opened successfully.");
	}else{
		console.log("File opened successfuly");
		writeFruits(fd);
	}
});

