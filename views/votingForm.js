/*jshint node:true*/

"use strict";

var partyData = require('../modules/party.js').getAll();

var cachedHtml = false;

var VF = function(res){
	if (cachedHtml)
		return cachedHtml;

	cachedHtml = res.render('votingForm', { locals: {parties: partyData} });
	return cachedHtml;
};

module.exports = VF;