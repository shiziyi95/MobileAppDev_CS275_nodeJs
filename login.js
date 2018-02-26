var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
multipleStatements: true,
  host     : "localhost",
  user     : "root",
  password : "7890",
  database : 'ebp'

});
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
//////////////database connection

app.use(express.static("."));

app.get('/',function (req, res){
  res.sendFile(path.join(__dirname+'/login.html'));
});

///////////////dont know if i need the part above

database.prototype.login=function(username,password){
	var str = 'SELECT type FROM users WHERE username=\'' +username+'\' AND  password=PASSWORD(\'' + password + '\')';
	var self = this;
	con.query(str,
		function(err,rows, fields){
			if(err){
				console.log('Error');
				return 0;
			}
			else{
				if(row.length>0)
					self.emit('loggedin', 1);
				else
					self.emit('loggedin', 0);
			}
		}
	);
};