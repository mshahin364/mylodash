_.isEmpty = function(value){
    if(toString.call(value) === '[object Array]'){
        return !!value.length;
    }
    if(typeof value === 'object'){
        var re = true;
        for(var i in value){
            re = false;
            break;
        }
        return re;
    }
    return !!value;
}