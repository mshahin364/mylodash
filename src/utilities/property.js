var _ = _ || {};
_.property = function(name){
	return function(name){
		return object[name];
	}
}