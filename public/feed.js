function getFeed() {
	console.log('get feed button event');

	var keyword = $("input#keywordInput").val();
	var feed = $("div#feed");

	$.post("/twitter/feed/account/" + keyword, function(data, status) {
		if(status=='success')
			feed.html(data);
		else
			alert('error getting feed');
	});
	// alert(keyword);

}