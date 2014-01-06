/*jshint node:true*/

"use strict";

/**
 * Sets up the data needed for the voting form and returns the rendered html for it.
 */

var partyData = require('../modules/party.js').getAll(),
	areas = require('../modules/constituencies.js');

var cachedHtml = false,
	areaData;

var VF = function(req, res, next){
	//console.log("RES: ", res);

	if (cachedHtml){
		res.locals.partials.push(cachedHtml);
		return next();
	}
		

	var context = {
		locals: {
			parties: partyData,
			constituancies: []
		} 
	};

	areas.getAll(function(data){
		context.locals.constituancies = data;
		res.render('votingForm', context, function(err, html){
			if (!err) {
				cachedHtml = html;
			}
			res.locals.partials.push(cachedHtml);
			next(err);
		});
	});
};

module.exports = VF;