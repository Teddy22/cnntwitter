var express = require("express");

// create express app
var app = express();

// configure app
app.use(express.static('public'));
app.set('view engine', 'jade');


var Twitter = require('twitter-js-client').Twitter;
var twitterConfig = {
    	"consumerKey": "mviA3nLoMwAXKZy93JLsgF1uB",
    	"consumerSecret": "33zwztbltnmRvOmZgxaGJGlX36lXvMah3HMA0rkLp0dYla4gnb",
    	"accessToken": "97811766-XCI7ILJoAhMelxO3lJofCYcdrriUDI6voN4r48lOh",
    	"accessTokenSecret": "Uc3KDBtIY137l0NrFF8iWGnp1caLBq4kq5AZnbCkWyeAc",
    	// "callBackUrl": ""
}

var twitter = new Twitter(twitterConfig);


// landing page
app.get("/", function(req, res) {
	res.send("<h1>CNN Twitter Feed</h1>");	
});


// handle post form entered twitter handle at input
app.post("/twitter/feed/account/:keyword", function(req, res) {
	console.log("post request received");
	var keyword = req.params.keyword;

	accountExists(keyword, function(exists) {
		if(exists) {
			console.log('account exists');
			var renderVals = {keyword:keyword};
			res.render('feed', renderVals);
		} else {
			res.send("<h3>Oops! Twitter account does not exist or is not public</h3>");
		}
	});
});


// check if twitter handle provided exists
var accountExists = function(keyword, callback) {

	var errorCallback = function(params, error, success) {
		callback(false);
	}

	var successCallback = function(body) {
		callback(true);
	}

	twitter.getUser({screen_name: keyword}, errorCallback, successCallback);
}


// open port 8085
app.listen(8085, function() {
	console.log("server listening at port 8085...");
});