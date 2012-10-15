var TrackListView = Backbone.View.extend({
	tagName: 'ul',
	
	initialize: function() {
		this.model.bind('reset', this.render, this);
	},

	render: function(e) {
		_.each(this.model.models, function(track) {
			$(this.el).append(new TrackView({model:track}).render().el);
		}, this);
		return this;
	}

})