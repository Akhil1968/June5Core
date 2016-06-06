var os = require('os');
console.log("os.platform() = " + os.platform());
console.log("os.type() = " + os.type());
console.log("os.hostname() = " + os.hostname());

console.log("os.totalmem() = " + os.totalmem());
console.log("os.freemem() = " + os.freemem());

//Returns an array of objects containing information about each CPU/core installed: 
//      model, speed (in MHz), and times etc...
console.log("os.cpus() = " + JSON.stringify(os.cpus()));

console.log("os.uptime() in seconds = " + os.uptime());


console.log(__dirname);
console.log(__filename);
