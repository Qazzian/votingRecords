
var votingForm = require('../views/votingForm'),
	votingResults;

var home = function(req, res){
	res.render('layout', {
		locals: {
			page: votingForm(res)
		}
	});
};

module.exports = home;