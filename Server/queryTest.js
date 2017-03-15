var mysql = require('mysql');
var connection;

/* EXAMPLE
connectToDatabase('localhost', 'root', '123456', 'my_db');
query("SELECT * FROM users", function(err, rows){
		if(err) throw err;
		for(var i in rows){
			console.log(rows[i].username + " " + rows[i].password + " " + rows[i].email);
		}});
disconnect();
*/

function connectToDatabase(host, user, pass, db){
	connection = mysql.createConnection({
		host: host,
		user: user,
		password: pass,
		database: db,
	});
	
	connection.connect();
}

function query(query, func){ 
	connection.query(query, func);
}

function disconnect(){
	connection.end();
}