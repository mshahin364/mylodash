var _ = _ || {};


_.drop = function(array,arg){
     var tempArr = [];
     arg = arg || 1;
     if(typeof arg === 'number'){
     	tempArr = array.slice(arg);
     }else if(typeof arg === 'function'){
     	for(var i=0,len = array.length;i<len;i++){
     		if(!arg(i)){
     			tempArr.push(array[i]);
     		}
     	}
     }else if(typeof arg === 'object'){
     	for(var i in array){
     		var isMatch = 1;
     		for(var j in arg){
     			if(arg[i] !== array){
     				isMatch = 0;
     				break;
     			}

     		}
     		if(isMatch){
     			tempArr.push(array[i])
     		}
     	}
     }
     return tempArr;
}
_.rest = _.drop;

console.log(_.rest([1,2,4,6,8]));