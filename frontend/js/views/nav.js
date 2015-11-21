const Backbone = require('backbone');
const View = require('backbone').View;
const nunjucks = require('nunjucks/browser/nunjucks');
const app = require('../app');

const NavView = View.extend({
	initialize() {
		this.render();
		app.router.on('route', () => this.render());
	},

	template: require('templates/nav.nunj'),

	render() {
		// get current route
		const route = Backbone.history.getFragment();
		this.el.innerHTML = this.template.render({ route });
	},
});

module.exports = NavView;