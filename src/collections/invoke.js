_.invoke = function(array,callback,args){
    var ret = [];
    var newArg = [];
    for(var i= 2,len=arguments.length;i<len;i++){
        newArg.push(arguments[i]);
    }

    for(var key in array){
        var item = array[key];
        var temp ;
        if(typeof callback === 'string'){
            temp = item[callback]();
        }else if(typeof callback === 'function'){
            temp = callback.apply(array[key], newArg);
        }
        ret.push(temp);

    }
    return ret;
}

