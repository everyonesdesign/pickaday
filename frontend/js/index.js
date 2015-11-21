require('./styles');
const Backbone = require('backbone');
const q = require('queried');
const domready = require('domready');
const Router = require('./router');
const app = require('./app');
const NavView = require('./views/nav');

domready(() => {
	// init router
	const router = new Router;
	app.router = router;
	Backbone.history.start();

	new NavView({
		el: '#nav',
	});
});

