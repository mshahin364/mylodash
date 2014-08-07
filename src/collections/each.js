_.each = function(array,callback){
    for(var i in array){
        callback(arrag[i],i,array);
    }
}