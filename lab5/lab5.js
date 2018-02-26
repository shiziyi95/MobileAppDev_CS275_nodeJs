var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
multipleStatements: true,
  host     : "localhost",
  user     : "root",
  password : "890",
  database : 'lab5'

});
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
//////////
app.use(express.static("."));

app.get('/',function (req, res){
  res.sendFile(path.join(__dirname+'/lab3.html'));
});

app.get('/STUDENT', function(req, res)  {
con.query('SELECT * from Student;',
function(err,rows, fields){
	if(err)
		console.log('error during query');
	else
		res.status(200).send(rows);
		
	
	});

}); 
app.get('/COURSE', function(req, res)  {
con.query('SELECT * from course;',
function(err,rows, fields){
  if(err)
    console.log('error during query');
  else
    res.status(200).send(rows);
    
  
  });
});
app.get('/grade', function(req, res)  {
con.query('SELECT * from grades;',
function(err,rows, fields){
  if(err)
    console.log('error during query');
  else
    res.status(200).send(rows);
    
  
  });
});

app.listen(3000);

