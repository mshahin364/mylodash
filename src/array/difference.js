function inArray(value,array){
	if(Array.prototype.indexOf){
		return array.indexOf(value) !== -1;
	}else{
		var has = 0;
		for(var i=0,len=array.length; i<len;i++){
			if(value === array[i]){
				has = 1;
				break;
			}
		}
		return has;
	}
}
_.difference = function(array,values){
     var tempArr = [];
     for(var i=0 ,len=array.length;i<len;i++){
          if(inArray(array[i],values)){
               tempArr.push(array[i]);
          }
     }
     return tempArr;
}

/*
console.log(_.difference([1,2,4,6,8],[1,6,9,8]));
*/