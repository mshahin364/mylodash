_.result = function(object,key){
	if(typeof object[key] ==='function'){
		return object[key]();
	}
	return object[key];
}