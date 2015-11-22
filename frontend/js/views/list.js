const View = require('backbone').View;
const nunjucks = require('nunjucks/browser/nunjucks');

const ListView = View.extend({
	initialize() {
		this.render();

		// NOTE: it doesn't react to models' changes
		this.collection.on('sync update', () => this.render());
	},

	template: require('templates/list.nunj'),

	render() {
		this.el.innerHTML = this.template.render({
			events: this.collection.toJSON(),
		});
	},
});

module.exports = ListView;