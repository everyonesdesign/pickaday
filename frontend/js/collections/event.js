const Collection = require('backbone').Collection;
const Event = require('../models/event');

const EventCollection = Collection.extend({
	url: '/events',
	model: Event,
});

module.exports = EventCollection;