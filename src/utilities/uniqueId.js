var initNum = 0;
uniqueId = function(per){
	var currentId = ++initNum;
	return '' +  (typeof per === 'string' ? (per + initNum) : initNum);
}