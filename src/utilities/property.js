
_.property = function(name){
	return function(object){
		return object[name];
	}
}