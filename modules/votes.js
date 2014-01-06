/*jshint node:true*/

"use strict";

/**
 * This Module is responsible for saving all the captured voting data.
 * As I've not set up a database yet this data does not persist after the server has shutdown.
 * data is saved as 
 * 		<code>votes = {area1Id : {party1Id: voteCount, party2Id: voteCount }, area2Id: {...}} </code>
 */

var votes = {};

/**
 * Helper function for saving the data
 */
function saveVote(areaId, partyId){
	if (!(areaId in votes)) {
		votes[areaId] = {};
	}
	if (! (partyId in votes[areaId])) {
		votes[areaId][partyId] = 0;
	}
	votes[areaId][partyId] += 1;
}

/**
 * Helper function to calculate the sum of all the votes for all parties nation wide.
 */
function sumVotes(){
	var parties = {},
		area, party;

	for (area in votes) {
		if (votes.hasOwnProperty(area)) {
			for (party in votes[area]) {
				if (votes[area].hasOwnProperty(party)) {
					if (!parties.hasOwnProperty(party)) {
						parties[party] = 0;
					}
					parties[party] += votes[area][party];
				}
			}
		}
	}
	return parties;
}

module.exports = {
	/**
	 * Save a voters constituency and desired party
	 */
	addVote: function(areaId, partyId){
		if (!partyId) {
			partyId = 0;
		}
		saveVote(areaId, partyId);
	},
	/**
	 * Return all the party vote counts for the given constituency id.
	 * If no constituency id is given then will return the nationwide vote counts.
	 */
	getVotes: function(areaId){
		console.log("All votes: ", votes);
		if (!areaId) {
			return sumVotes();
		}
		if (votes[areaId]) {
			console.log("Get votes for ", areaId, votes[areaId]);
			return votes[areaId];
		}
	}
};