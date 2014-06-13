var _ = _ || {};
_.property = function(name){
	return function(object){
		return object[name];
	}
}