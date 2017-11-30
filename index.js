var express = require('express');
var app = express();
var list = require("./nba-teams.json");

app.get('/teams', function(req, res) {

	res.status(200).send(list);
});

app.get('/teams/:id', function(req, res) {
	var _id = req.params.id;
	
	var teamsId = list.find(function(pro){
		return pro.teamId == _id; });
	var teamName = list.find(function(pro){
		return pro.teamName == _id;});
	var abbreviation = list.find(function(pro){
		return pro.abbreviation == _id;});

	

	if (teamsId || teamName || abbreviation ) { 
		res.status(200).send(teamsId || teamName || abbreviation);
	} else {
		res.status(200).send('Good Job Anas ! Keep Trying !');
		// res.status(200).send(teamsId);
	};
	
});

app.listen(3000);