$(function() {
	$.get('recenttracks.rss', function(xml) {
		var tracksJSON = $.xml2json(xml);

		this.trackList = new TrackList(tracksJSON.channel.item);
		this.trackListView = new TrackListView({model:this.trackList});
		$('#nowplaying').html(this.trackListView.render().el);
	})
})



