const View = require('backbone').View;
const nunjucks = require('nunjucks/browser/nunjucks');

const CreateView = View.extend({
	initialize() {
		this.render();
	},

	template: require('templates/create.nunj'),

	render() {
		this.el.innerHTML = this.template.render();
	},
});

module.exports = CreateView;