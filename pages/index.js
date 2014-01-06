/*jshint node:true*/

"use strict";

/**
 * The home page controller
 */

var votingForm = require('../views/votingForm'),
	voteTable = require('../views/voteTable');


var homeController = function(app){
	app.get('/', votingForm, voteTable, function(req, res){
		res.renderPartials();
	});
};

module.exports = homeController;