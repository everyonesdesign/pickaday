const View = require('backbone').View;
const app = require('../app');

// TODO: add it is a mixin, not base class
const AjaxifiedView = View.extend({
	events: {
		'click .ajax-link': 'handleNavAction',
	},

	handleNavAction(e) {
		e.preventDefault();
		const link = e.target;
		const url = link.getAttribute('href');

		app.router.navigate(url, {
			trigger: true,
		});
	},
});

module.exports = AjaxifiedView;