const Router = require('backbone').Router;

module.exports = Router.extend({
	routes: {
		'':                 'list',
		'list':             'list',

		'about':            'about',

		'events/add':       'add',
		'events/:id/edit':  'edit',
		'events/:id':       'preview',
	},

	list: function () {

	},
});
