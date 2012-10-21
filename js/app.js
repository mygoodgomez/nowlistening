$(function() {
	// $.getJSON('http://127.0.0.1:1337/?callback=?');
	$.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=niksterg11&api_key=424fad8d35ab6e59ab75c64c588262b9&format=json', function(response) {
		handleData(response);
	})
});

function handleData(data) {
	this.trackList = new TrackList(data.recenttracks.track);
	this.trackListView = new TrackListView({model:this.trackList});
	$('#nowplaying').html(this.trackListView.render().el);
}



