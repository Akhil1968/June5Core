var fs = require('fs');

var options = {encoding: 'utf8', flag: 'r'};

console.log("Synch read starts");
var data = fs.readFileSync('./data.txt', options);
console.log(data);
console.log(data.toString());
console.log("Synch read ends");