const jqueryStub =  function(el) {
	return [require('queried')(el)];
};

jqueryStub.ajax = require('component-ajax');

module.exports = jqueryStub;