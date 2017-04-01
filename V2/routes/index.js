var express = require('express');
var router = express.Router();
var Functions = require('./Functions');
//Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	var style = Functions.addIn('stylesheet','/css/style.css');
	res.render('index',{title: 'Dashboard',fileType: style[0],filePath: style[1]});
});
//Item Lists
router.get('/items', function(req, res){
	var style = Functions.addIn('stylesheet','/css/style.css');
	res.render('items',{title: 'Item Glossary',fileType: style[0],filePath: style[1]});
});
function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}else{
		//req.flash('error_msg', 'You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;