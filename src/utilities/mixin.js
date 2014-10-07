

_.mixin = function(obj,source) {
	for(var i in obj){
		_[i] = obj[i];
	}
}