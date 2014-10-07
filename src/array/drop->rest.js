


_.drop = function(array,arg){
     var tempArr = [];
     arg = arg || 1;
     if(typeof arg === 'number'){
     	tempArr = array.slice(arg);
     }else if(typeof arg === 'function'){
     	for(var i=0,len = array.length;i<len;i++){
     		// console.log(arg(i));
     		if(!arg(array[i])){
     			tempArr.push(array[i]);
     		}
     	}
     }else if(typeof arg === 'object'){
     	for(var i in array){
     		var isMatch = 1;
     		for(var j in arg){
       			if(arg[j] !== array[i][j]){
     				isMatch = 0;
     				break;
     			}

     		}
     		if(!isMatch){
     			tempArr.push(array[i])
     		}
     	}
     }
     return tempArr;
}
_.rest = _.drop;

/*

console.log(_.rest([1,2,3,5,3,2,2],3));
console.log(_.rest([1,2,3,5,8,7,9,3,2,2],function(v){
	return v > 5;
}));
console.log(_.rest([{a:1,b:2,c:3},{a:2},{a:5,b:2}],{a:1}));

*/ 