const http = require('http'),
	fs	 = require('fs'),
	path = require("path");

http.createServer(function (req, res) {

    if(req.url.indexOf('.html') != -1){ //req.url has the pathname, check if it conatins '.html'

      fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });

    }
	 if(req.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'
      fs.readFile(__dirname + '/public/js/script.js', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
	 }
   if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile(__dirname + '/public/css/style.css', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });
    }
	
	//To test make make a call like this: getDirectories("../");
	function getDirectories (srcPath) {
		var dirs = []
		dirs = fs.readdirSync(srcPath,function(err,files) {
		if(err) {throw err;}
		}).filter(file => fs.statSync(path.join(srcPath,file)).isDirectory())
		for(x = 0; x < dirs.length; x++ ) {
			console.log(dirs[x]);
		}
	}
}).listen(8888,'127.0.0.1');