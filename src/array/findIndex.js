var _ = _ || {};
_.findIndex = function(array, arg) {
	var tempArr = [];
	arg = arg || 1;
	if (typeof arg === 'number') {
		tempArr = array.slice(arg);
	} else if (typeof arg === 'function') {
		for (var i = 0, len = array.length; i < len; i++) {
			// console.log(arg(i));
			if (!arg(array[i])) {
				tempArr.push(array[i]);
			}
		}
	} else if (typeof arg === 'object') {
		for (var i in array) {
			var isMatch = 1;
			for (var j in arg) {
				if (arg[j] !== array[i][j]) {
					isMatch = 0;
					break;
				}

			}
			if (!isMatch) {
				tempArr.push(array[i])
			}
		}
	}
	return tempArr;
}