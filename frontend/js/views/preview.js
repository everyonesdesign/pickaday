const View = require('backbone').View;

const nunjucks = require('nunjucks/browser/nunjucks');

const PreviewView = View.extend({
	initialize() {
		this.render();
	},

	template: require('templates/preview.nunj'),

	render() {
		this.el.innerHTML = this.template.render();
	},
});

module.exports = PreviewView;