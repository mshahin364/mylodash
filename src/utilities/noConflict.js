var _ = _ || {};
var old = _;
_.noConflict = function() {
	window._ = old;
	return this;
}