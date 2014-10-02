_.transform = function(value,callback){
    var re = {};
    for(var i in value){
        re[i] = callback(value,value[i],i);
    }
    return re;
}