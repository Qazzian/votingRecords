/*jshint node:true*/

"use strict";

var express = require('express');

var app = express();


app.use('/static', express.static(__dirname + '/static'));
app.use(express.bodyParser());

// simple middleware to add in my way of including views
app.use(function(req, res, next) {
	res.locals.partials = [];
	res.addPartial = function(html) {
		res.locals.partials.push(html);
	};
	res.renderPartials = function(){
		res.render('layout', {
			locals: {
				partials: res.locals.partials.join('\n')
			}
		});
	};
	next();
});

app.engine('mustache', require('mu2express').engine);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

require('./pages/index.js')(app);
require('./pages/showVotes.js')(app);
require('./pages/saveVote.js')(app);

app.listen(3000);
console.log("\nNode listening on port 3000\n");
