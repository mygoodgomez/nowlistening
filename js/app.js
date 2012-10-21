$(function() {
	$.getJSON('http://127.0.0.1:1337/?callback=?');
});

function handleData(data) {
	this.trackList = new TrackList(data.rss.channel[0].item);
	this.trackListView = new TrackListView({model:this.trackList});
	$('#nowplaying').html(this.trackListView.render().el);
}



