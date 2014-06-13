_.times = function(time,callback,arg){
	var array = [];
	if(toString.call(arg) !== '[object Array]'){
		arg = [arg];
	}

	while(time--){
		array.push(callback.apply(this,arg));
	}
}