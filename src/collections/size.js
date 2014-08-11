_.size = function(collections){
    var type = typeof collections;
    var len = 0;

    if(type === 'string' || type === '[object Array]' ){
        len= collections.length;
    }else{
        for(var i in collections){
            len++;
        }
    }
    return len;
}