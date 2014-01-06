
var votes = require('../modules/votes.js'),
	voteTable = require('../views/voteTable');

/**
 * This page will handle the submitted voting form data
 */

function saveVote(req, res, next){
	console.log("post req: ", req.body);

	var area, party = 0;
	area = parseInt(req.body.areaId, 10);

	if (isNaN(area) ) {
		res.addPartial('<p class="error-message">Unrecognised Area</p>');
	}

	if (req.body.isVoting === 'yes') {
		party = parseInt(req.body.party, 10);
	}
	
	votes.addVote(area, party);
	res.addPartial('<p>Thank you. Your vote has been counted.</p>');
	next();
}


module.exports = function(app){
	app.post('/myVote', saveVote, voteTable, function(req, res){
		res.renderPartials();
	});


	

};