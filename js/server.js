var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(express.static("."));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var WeatherController = require('./weather');
var wc = new WeatherController();
var calcController = require("./clac");
var Calc = new Calccontroller

//gets

//stay on index.html
app.get('/', function (req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
	});

app.get('/getWeather', function (req, res) {
     

     wc.once('byebye', function(msg){
res.send(msg); });
     wc.getWeather(req);
});
app.listen(8080,function(){
     console.log('Server Running...');
});