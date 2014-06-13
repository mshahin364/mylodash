_.assign = function(obj,source){
	var result = source;
	for(var i in obj){
		if(!source[i]){
			result[i] = obj[i];
		}
	}
	return result;
}

_.assign = function(obj,sources,callback){
	var args = arguments;
	var len = args.length;
	var forLen = len;
	var realCallback ;
	var result;
	if(typeof args[len - 1] === 'function'){
		forLen = len-1;
		realCallback = args[len - 1];
	}
	
	for(var )
	var result = source;
	for(var i in obj){
		if(!source[i]){
			result[i] = obj[i];
		}
	}
	return result;
}