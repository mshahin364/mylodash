var _ = _ || {};
_.findIndex = function(array, arg) {
	var result = -1;
	var len = array.length;
	if (typeof arg === 'string') {

		for (var i = 0; i < len; i++) {
			if (array[i][arg]) {
				result = i;
				break;
			}
		}
	} else if (typeof arg === 'function') {
		for (var i = 0; i < len; i++) {
			if (arg(array[i])) {
				result = i;
				break;
			}
		}
	} else if (typeof arg === 'object') {
		for (var i = 0; i < len; i++) {
			var isMatch = 1;
			for (var j in arg) {
				if (arg[j] !== array[i][j]) {
					isMatch = 0;
					break;
				}
			}
			if(isMatch){
				result = i;
				break;
			}
		}
	}
	return result;
}

/*
console.log(_.findIndex([{
	name: 20
}, {
	name: 21
}, {
	name: 22
}], {
	name: 21
}));


*/