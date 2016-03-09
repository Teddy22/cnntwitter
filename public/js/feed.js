alert('feed');

function getFeed() {
	var keyword = $("input#keywordInput").val();
	var feed = $("div#feed");http://www.manutd.com/
	feed.text(keyword);

	$.post("/twitter/feed/account/" + keyword, function(data, status) {
		if(status=='success')
			//
		else
			alert('error getting feed');
	});
	// alert(keyword);

}