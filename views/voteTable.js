
"use strict";

var areas = require('../modules/constituencies.js'),
	parties = require('../modules/party.js'),
	votes = require('../modules/votes.js');

 function getVoteCounts(areaId){
	var voteCounts;

 	if (areaId && !isNaN(areaId)) {
 		voteCounts = votes.getVotes(areaId);
 	}
 	else {
 		voteCounts = votes.getVotes();
 	}
 	return voteCounts;
 }

/**
 * Generate the results view
 */
var VT = function(req, res, next){
 	var voteCounts,
 		context = {
 			area: null,
 			parties: [],
 		},
 		area, areaId,
 		pid, party, partyData, 
 		totalVotes = 0.0;

 	areaId = req.param('areaId');
 	
 	if (areaId) {
 		context.area = areas.get(areaId);
 	}
 	else {
 		context.area = areas.getUK();
 	}
 	
	
 	// Gets the basic vote count of each party for the selectect constituency
 	voteCounts = getVoteCounts(areaId);
 	console.log("VOTE counts: ", voteCounts)
 	for (pid in voteCounts) {
 		if (voteCounts.hasOwnProperty(pid)) {
 	 		party = parties.getParty(pid);
 	 		partyData = {
 	 			id: party.id,
 	 			name: party.name,
 	 			abbr: party.abbr,
 	 			voteCount: voteCounts[pid],
 	 			votePercent: undefined
 	 		}
 	 		// Increment the counters for working out the percentages
 	 		totalVotes += voteCounts[pid];
 	
 	 		context.parties.push(partyData);
 	 	}
 	 }

 	// work out the percentages
 	for (var i=0,l=context.parties.length; i<l; i++) {
 		var p = context.parties[i];
 		p.votePercent = Math.round(p.voteCount / totalVotes * 100);
 	}

 	// Render the template
	res.render('voteTable', {locals: context}, function(err, html){
		if (err) {
			console.error("ERROR rendering voting table: ", err);
			throw err;
		}
		else {
			res.locals.partials.push(html);
			next();
		}
	});

}


module.exports = VT;