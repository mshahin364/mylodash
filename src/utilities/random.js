_.random = function(min,max,floating){
	var randomNum = Math.random();
	min = +min || 0;
	max = +max || 1;
	if(min % 1 !== 0 || max % 1 !== 0){
		floating = 1;
	}
	randomNum = randomNum * ( max - min ) + min;
	return floating ? randomNum : (Math.floor(randomNum));
}