const Event = Backbone.Model.extend({
	urlRoot : '/events',
	initialize() {
		this.isFetched = false;
		this.on('sync', () => this.isFetched = true);
	}
});

module.exports = Event;