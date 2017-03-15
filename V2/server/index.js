const path = require('path'),
	express = require('express'),
	exphbs = require('express-handebars')
	
	const app = express();
	
	app.engine('.hbs', exphbs({
		defaultLayout: 'main',
		extname: '.hbs',
		layoutsDir: path.join(__dirname,'views/layouts')
	}))
	app.set('view engine','.hbs')
	app.set('views',path.join(__dirname,'views'))