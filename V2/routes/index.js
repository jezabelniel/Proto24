var express = require('express');
var router = express.Router();
//Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index',{title: 'Dashboard'});
});
//Item Lists
router.get('/items', function(req, res){
	res.render('items',{title: 'Item Glossary'});
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