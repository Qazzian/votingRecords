

var Parties = function(){

};

var partyList = [
	{id: 1, name: "Labour", abbr: "Lab", color: '#DC241F'},
	{id: 2, name: "Conservative", abbr: "Con", color: '#0087DC'},
	{id: 3, name: "Liberal Democrat", abbr: "LD", color: '#FDBB30'},
	{id: 4, name: "Green Party", abbr: "GRN", color: '#99CC33'},
	{id: 5, name: "UK Inipendance Party", abbr: "UKIP", color: '#70147A'},
	{id: 6, name: "British National Party", abbr: "BNP", color: '#00008B'},
	{id: 7, name: "Plaid Cymru", abbr: "PC", color: '#008142'},
	{id: 8, name: "Scottish National Party", abbr: "SNP", color: '#FFFF00'},
	{id: 9, name: "Independant", abbr: "Ind", color: '#DDDDDD'},
	{id: 10, name: "Other", abbr: "Oth", color: '#DDDDDD'}
];


Parties.prototype = {

	getAll: function(){
		return partyList;
	}

};

module.exports = new Parties();