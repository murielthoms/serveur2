var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname +'/public'));
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.post('/', function(req, res) {
	res.send("c'est ok!");

});

app.post('/add', function(req, res) {
	console.log('/add');

	response = {
		title: req.body.title,
		content: req.body.content
	};

	console.log(response);
	res.send('repondre');
});



app.listen(2345, function(){
	console.log('hey, ça fonctionne!');

});