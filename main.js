


var express = require('express');
var app = express();

var _profile = [
{id: 1, name : 'alihasana', gender: 'm'},
{id: 2, name : 'shahana', gender: 'f'},
{id: 3, name : 'meera', gender: 'm'},
];


function isAge {

	// 
}




app.put('/users/:id', function (req, res) {

var id = req.params.id;

var profile = _profile.find(function(pro){
	return pro.id == id;

	if (profile){
		var _body = req.body;

		console.log('body here', body);
		// if 
		profile.gender = body.gender;
		profile.name = body.name;

		//veify the parameter


		res.status(200).send(profile);


	}else {
		res.status(404).send({message : 'here is no use with id: ' + id})
		
	}
	
});

});



app.post('/users', function  (req, res) {
	var body = req.body;
	console.log('hello', body);


	
	res.status(200).send('hello');	// body... 
})

app.get('/users/:id', function (req, res) {

var id = req.params.id;

var profile = _profile.find(function(pro){
	return pro.id == id;
});

	res.status(200).send (profile);
	
});

app.get('/users', function(req, res) {

	var quries = req.query;

	if (quries.gender){

		var profile = _profile.find(function(pro){
			return pro.gender == quries.gender;
	});

		res.status(200).send(profile);
	}else {

		res.status(200).send(_profile);
	};

	res.status(200).send (quries);
	
});

app.listen(3000, function() {
	console.log('Example app listening on the port!')
	// body
});