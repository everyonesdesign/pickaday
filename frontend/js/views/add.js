const View = require('backbone').View;
const nunjucks = require('nunjucks/browser/nunjucks');

const AddView = View.extend({
	initialize() {
		this.render();
	},

	template: require('templates/add.nunj'),

	render() {
		this.el.innerHTML = this.template.render();
	},
});

module.exports = AddView;