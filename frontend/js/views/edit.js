const View = require('backbone').View;
const nunjucks = require('nunjucks/browser/nunjucks');

const EditView = View.extend({
	initialize() {
		this.render();
	},

	template: require('templates/edit.nunj'),

	render() {
		this.el.innerHTML = this.template.render();
	},
});

module.exports = EditView;