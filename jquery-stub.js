/*
	Foundation-sites pulls jquery as a dependency, but we don't use it
	as we take styles only from foundation.
	BUT backbone tries to require jquery and to ignore it we need to create
	this fake dependency.
	FIXME: isn't there any better ways to do that?!
*/

module.exports = function(el) {
	return [require('queried')(el)];
};