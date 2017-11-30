var express = require('express');
var app = express();
var _list =require('./nba-teams.json');

app.get('/teams',function(req, res){
	var list = req.query;

	res.status(200).send(_list);

});

app.listen(3000, function() {
	console.log('app listening on the port!');
});