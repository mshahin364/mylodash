_.indexOf = function(array,item,from){
    from = from || 0;
    var re = -1;
    if(Array.prototype.indexOf){
        return Array.prototype.indexOf.call(array,item,from);
    }
    for(var i=from,len = array.length;i<len;i++){
        if(array[i] === item){
            re = i;
            break;
        }
    }
    return re;
}