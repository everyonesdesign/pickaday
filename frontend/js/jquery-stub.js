const noop = () => {};

const jqueryStub =  function(el) {
	const $el = [require('queried')(el)];
	$el.on = noop;
	$el.off = noop;
	return $el;
};

jqueryStub.ajax = require('component-ajax');

module.exports = jqueryStub;