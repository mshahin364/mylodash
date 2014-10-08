
var old = lodash;
_.noConflict = function() {
	window._ = old;
	return this;
}