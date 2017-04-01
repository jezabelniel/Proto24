
var Handlebars = require('handlebars');
var exports = module.exports = {};
//parses the lines and makes it so handlebars doesnt add the escape characters
exports.addIn = function(type,url) {
	var lType = Handlebars.Utils.escapeExpression(type);
	var lUrl = Handlebars.Utils.escapeExpression(url);
	var result = [lType,lUrl]
	return result;
}