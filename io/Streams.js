
var streams = require("stream");
var util = require("util");

//inherit MyReader Class from Readable using util
util.inherits(MyReader, streams.Readable);

//defining constructor
function MyReader(){
	streams.Readable.call(this);
	this.myData = ["1", "2", "3", "4", "5", "6"];
	this.myIndex = 0;
}//clas MyReader ends


//defining read operation:: Overriding the inherited read method 
MyReader.prototype._read = function(){
	if (this.myIndex > this.myData.length){
		this.push(null);
	}else{
		this.push(this.myData[this.myIndex]);
		this.myIndex++;
	}
};

//Using the Class

var myreader = new MyReader();
myreader.on("data", function (data){
	console.log(data.toString());
});