

_.mixin = function(obj,source) {
	for(var i in source){
		obj[i] = source[i];
	}
}