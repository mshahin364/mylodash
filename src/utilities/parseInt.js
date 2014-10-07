
_.parseInt = function(val,radix) {
	if(typeof val === 'string'){
		val = val.replace(/^0+/g,'');
	}
	return parseInt(val,radix);
}