function baseClone(value,isDeep){
    var valueType = typeof value;


    if(valueType === 'undefined'){
        return value;
    }else if(valueType === 'object'){

        var realType = toString.call(value);
        if(realType === '[object Array]'){

            if(isDeep){
                return new Array(value);
            }else{
                return value;
            }

        }else if(realType === '[object RegExp]'){
            return new RegExp(value);
        }
        return new Object(value);
    }
    return value;
}

_.clone = function(value,isDeep,callback){
    if(callback){
        return callback(value);
    }
    return baseClone(value,isDeep);
}


