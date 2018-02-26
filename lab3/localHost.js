var express = require('express');
var path = require('path');
var app = express();
app.use(express.static("."));

app.get('/',function (req, res){
	res.sendFile(path.join(__dirname+'/lab3.html'));
});

app.get('/greet', function(req, res){
	res.send('Hello World\n');
	});
	
app.get('/summation',function(req, res){
	var sum = 0
	n = parseInt(req.query.n)
	var i;
	for(i = 1; i <= n;i++){
		sum+=i;
	}
	res.send('the sum is ' + sum);
});


app.get('/factorial',function(req, res){
	var fact = 1
	n = parseInt(req.query.n)
	var i;
	for(i = 1; i <= n;i++){
		fact=fact * i;
	}
	res.send('the factorial is ' + fact);
});

// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8080,function(){

// Put a friendly message on the terminal
console.log("runing at 8080");
});