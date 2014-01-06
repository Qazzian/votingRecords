
"use strict";

var voteTable = require('../views/voteTable');

/**
 * Handle the presentation of the voting data.
 */

 module.exports = function(app){

 	app.get('/show/:areaId', voteTable, function(req, res){

 	});
 };