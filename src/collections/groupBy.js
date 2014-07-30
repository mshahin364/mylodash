_.countBy = function(array,arg,thisArg){
    var result = {};
    var len = array.length;
    if(typeof arg === 'function'){
        for(var i=0;i<len;i++){
            var val = arg(array[i]);
            result[val] ? result[val].push(array[i]) : result[val] = array[i];
        }
    }
    if(typeof arg === 'string'){
        for(var i=0;i<len;i++){
            var val = array[i][arg];
            result[val] ? result[val].push(array[i]) : result[val] = array[i];
        }
    }

    if(typeof arg === 'object'){
        for(var i=0;i<len;i++){
            var is = true;
            for(var j in arg){

                if(arg[j] !== array[i][j]){
                    is = false;
                    break;
                }
            }
            result[is] ? result[is].push(array[i]) : result[is] =[ array[i] ];
        }
    }
    return result;
}

// _.countBy([{name:1},{name:1},{name:2},{hehe:1,age:1}],{name:1});
