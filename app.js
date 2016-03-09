var express = require("express");

// create express app
var app = express();

// configure app
app.use(express.static('public'));
app.set('view engine', 'jade');


app.get("/", function(req, res) {
	res.send("<h1>CNN Twitter Feed</h1>");	
});


app.post("/twitter/feed/account/:keyword", function(req, res) {
	console.log("post request received");
	var keyword = req.params.keyword;
	var renderVals = {keyword:keyword};
	res.render('feed', renderVals);
});


app.listen(8085, function() {
	console.log("server listening at port 8085...");
});