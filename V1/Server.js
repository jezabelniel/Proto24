const http = require('http'),
	fs	 = require('fs'),
	path = require("path");

http.createServer(function (req, res) {
	const gameFileDir =  __dirname  + '/Game/';
    if(req.url.indexOf('.html') != -1){
		var file = path.join(getDirectories(gameFileDir)[1],req.url.substring(1,req.url.length));
		createType('html',file);
    }
	if(req.url.indexOf('.js') != -1){
		var file = path.join(getDirectories(gameFileDir)[2],req.url.substring(1,req.url.length));
		createType('javascript',file);
	}
	if(req.url.indexOf('.css') != -1){
		var file = path.join(getDirectories(gameFileDir)[0],req.url.substring(1,req.url.length));
		createType('css',file);
    }
	//Create the Type of the currentRequest
	function createType (type,curFile) {
			fs.readFile(curFile, function (err, data) {
			if (err) console.log(err);
			res.writeHead(200, {'Content-Type': 'text/' + type});
			res.write(data);
			res.end();
		  });
	}
}).listen(8888,'127.0.0.1');
//Function returns the directory requested
function getDirectories (srcPath) {
	var dirs = []
	dirs = fs.readdirSync(srcPath,function(err,files) {
	if(err) {throw err;}
	}).filter(file => fs.statSync(path.join(srcPath,file)).isDirectory())
	for(var x = 0; x < dirs.length;x++) {
		dirs[x] = path.join(srcPath,dirs[x]);
	}
	return dirs;
}