const View = require('backbone').View;

const nunjucks = require('nunjucks/browser/nunjucks');

const AboutView = View.extend({
	initialize() {
		this.render();
	},

	template: require('templates/about.nunj'),

	render() {
		this.el.innerHTML = this.template.render();
	},
});

module.exports = AboutView;