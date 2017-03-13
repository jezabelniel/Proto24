var filePath = req.url;
if(filePath == '/')
	filePath = '/index.html';

filePath = __dirname+filePath;
var extname = path.ext