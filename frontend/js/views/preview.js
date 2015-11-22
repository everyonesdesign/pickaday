const View = require('backbone').View;
const nunjucks = require('nunjucks/browser/nunjucks');

const PreviewView = View.extend({
	initialize() {
		this.render();
		this.model.on('sync change', () => this.render());
	},

	template: require('templates/preview.nunj'),

	render() {
		this.el.innerHTML = this.template.render({
			isFetched: this.model.isFetched,
			event: this.model.toJSON(),
		});
	},
});

module.exports = PreviewView;