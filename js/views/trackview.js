var TrackView = Backbone.View.extend({
	
	tagName: 'li',

	template: _.template($('#track_template').html()),

	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	},


})