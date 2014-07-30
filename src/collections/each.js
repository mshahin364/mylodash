_.each = function(array,callback){
    for(var i= 0,len=array.length;i<len;i++){
        callback(arrag[i],i,array);
    }
}