const Router = require('backbone').Router;
const app = require('app');
const utils = require('./utils');

const EditView = require('./views/edit');
const ListView = require('./views/list');
const PreviewView = require('./views/preview');
const AboutView = require('./views/about');

module.exports = Router.extend({
	routes: {
		'':                 'list',
		'list':             'list',

		'about':            'about',

		'events/add':       'add',
		'events/:id/edit':  'edit',
		'events/:id':       'preview',
	},

	/*
		ROUTES
	*/

	list() {
		this.removeCurrentView();
		app.contentView = new ListView({el: '#content'});
	},

	edit() {
		this.removeCurrentView();
		app.contentView = new EditView({el: '#content'});
	},

	preview() {
		this.removeCurrentView();
		app.contentView = new PreviewView({el: '#content'});
	},

	about() {
		this.removeCurrentView();
		app.contentView = new AboutView({el: '#content'});
	},

	/*
		SERVICE METHODS
	*/

	removeCurrentView() {
		app.contentView && utils.killView(app.contentView);
	},
});
