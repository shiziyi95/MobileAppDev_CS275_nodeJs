//require express
var express = require('express');
var app = express();
app.use(express.static('.')); //to be able to call from localhost

//for summation
//if URL has /sum, then do this function
app.get('/sum', function (req, res){
	var n = parseInt(req.query.n);
	//console.log(n);
	var sum = 0;
	var i = 1;
	// for loop to calculate summation
	for (i; i <= n; i++)
	{
		sum = sum + i;
	}
	//sends the calculation back to html
	res.send(sum.toString());
})

//for factorial
//if URL has /fact, then do this
app.get('/fact', function (req, res){
	var n = req.query.n;
	//console.log(n);
	var fact = 1;
	var i = 1;
	// for loop to calculate factorial
	for (i; i <= n; i++)
	{
		fact = fact * i;
	}
	//sends the calculation back to html
	res.send(fact.toString());
})

app.listen(8080);
console.log("Hi Its Running");