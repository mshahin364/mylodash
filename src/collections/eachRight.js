_.eachRight = function(array,callback){
    for(var len = array.length,i=len-1;i++;i>=0){
        callback(array[i],i,array);
    }
}