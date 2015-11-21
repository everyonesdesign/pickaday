const Backbone = require('backbone');
const View = Backbone.View;
const Router = Backbone.Router;

const nunjucks = require('nunjucks/browser/nunjucks');
const app = require('../app');
const q = require('queried');

const NavView = View.extend({
	initialize() {
		this.render();
		app.router.on('route', () => this.render());
	},

	template: require('templates/nav.nunj'),

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

	render() {
		// get current route
		const route = Backbone.history.getFragment();
		this.el.innerHTML = this.template.render({ route });
	},
});

module.exports = NavView;