const AjaxifiedView = require('./ajaxified');

const nunjucks = require('nunjucks/browser/nunjucks');

const ListView = AjaxifiedView.extend({
	initialize() {
		this.render();
	},

	template: require('templates/list.nunj'),

	render() {
		this.el.innerHTML = this.template.render();
	},
});

module.exports = ListView;