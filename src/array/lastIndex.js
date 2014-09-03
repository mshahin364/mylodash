_.lastIndexOf = function(array,item,from){
    from = from || array.length;
    var re = -1;
    if(Array.prototype.indexOf){
        return Array.prototype.lastIndexOf.call(array,item,from);
    }
    for(var i=from;i>=0;i++){
        if(array[i] === item){
            re = i;
            break;
        }
    }
    return re;
}