const AjaxifiedView = require('./ajaxified');

const nunjucks = require('nunjucks/browser/nunjucks');

const PreviewView = AjaxifiedView.extend({
	initialize() {
		this.render();
	},

	template: require('templates/preview.nunj'),

	render() {
		this.el.innerHTML = this.template.render();
	},
});

module.exports = PreviewView;