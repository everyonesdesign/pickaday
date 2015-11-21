require('./styles');
const Backbone = require('backbone');
const q = require('queried');
const domready = require('domready');
const Router = require('./router');
const app = require('./app');
const NavView = require('./views/nav');
const delegate = require('emmy/delegate');

domready(() => {
	// init router
	const router = new Router;
	app.router = router;
	Backbone.history.start();

	// ajax navigation
	delegate(document, 'click', '.ajax-link', e => {
		e.preventDefault();
		const link = e.delegateTarget;
		const url = link.getAttribute('href');
		app.router.navigate(url, {trigger: true});
	});

	new NavView({
		el: '#nav',
	});
});

