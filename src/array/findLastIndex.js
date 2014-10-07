_.findLastIndex = function(array, arg) {
	var result = -1;
	var len = array.length;
	if (typeof arg === 'string') {

		for (var i = len-1 ; i >= 0; i--) {
			if (array[i][arg]) {
				result = i;
				break;
			}
		}
	} else if (typeof arg === 'function') {
		for (var i = len-1 ; i >= 0; i--) {
			if (arg(array[i])) {
				result = i;
				break;
			}
		}
	} else if (typeof arg === 'object') {
		for (var i = len-1 ; i >= 0; i--) {
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
console.log(_.findLastIndex([{
	name: 20
}, {
	name: 21
}, {
	name: 22
}], {
	name: 21
}));


*/