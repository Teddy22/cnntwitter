function getFeed(obj) {
	console.log('get feed button click event');
	
	if(obj) {
		var keyword = $(obj).text();
	}
	else {
		var keyword = $("input#keywordInput").val();
	}
		
	var feed = $("div#feed");

	$.post("/twitter/feed/account/" + keyword, function(data, status) {
		if(status=='success')
			feed.html(data);
		else
			alert('error getting twitter feed');
	});
}

var assignHandlers = function() {
	var items = $('nav');

	console.log(items.children());
	
}

assignHandlers();