_.assign = function(obj, sources, callback) {
	var args = arguments;
	var len = args.length;
	var forLen = len;
	var realCallback;
	var result = {};

	if (typeof args[len - 1] === 'function') {
		forLen = len - 1;
		realCallback = args[len - 1];
	}
	for (var i = 0; i < forLen; i++) {
		var val = args[i];
		for (var j in val) {
			result[j] = realCallback ? realCallback(val[j]): val[j];
		}
	}
	return result;
}