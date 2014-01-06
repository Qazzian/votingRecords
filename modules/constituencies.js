/*jshint node:true*/

"use strict";

/**
 * Constituencies
 * Loads the data from the csv file into memory.
 * The CSV file was from the Guradians data blog and holds data for the 2010 general elction costituancies.
 *
 * A simple interface is provided for getting a list of all the constituencies or just one by it's ID.
 */

var fs = require('fs'),
	path = require('path'),
	csv = require('csv');

var allData = [],
	keyedData = {},
	done = false,
	onDone;


module.exports = {
	/** return an Array of all the constituencies. **/
	getAll: function(callback){
		if (done) {
			callback(allData);
		}
		else {
			onDone = callback;
		}
	},

	/** Return a single constituency 
	 * @param areaId {Number}
	 */
	get: function(areaId) {
		return keyedData[areaId];
	},

	/** Returns a fake area representing the whole of the UK. A bit hacky **/
	getUK: function(){
		return {
			id: 0,
			name: "UK"
		}
	}
};

// Load the data from the csv file
csv().from.path(path.join(__dirname, '../data/2010-constituencies.csv'), {columns: true})
	.on('record', function(data){
		var record = {
			id: data.ID,
			name: data.Constituency
		};
		allData.push(record);
		keyedData[data.ID] = record;
	})
	.on('end', function(){
		console.log("CSV DONE");
		done = true;
		if (typeof onDone === 'function') {
			onDone(allData);
		}
	})
	.on('error', function(error){
		console.error("CSV ERROR: ", error);
	});



