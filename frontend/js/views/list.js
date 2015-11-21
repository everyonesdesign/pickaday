const View = require('backbone').View;
const nunjucks = require('nunjucks/browser/nunjucks');

const ListView = View.extend({
	initialize() {
		this.render();
	},

	template: require('templates/list.nunj'),

	render() {
		this.el.innerHTML = this.template.render();
	},
});

module.exports = ListView;