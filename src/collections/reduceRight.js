// previousValue, currentValue, index, array
_.reduceRight = function(array,callback){
    var result ;//= array[0];
    for(var len = array.length,i=len-1;i>=0;i--){
        if(!result){
            result = array[i];
        }else{
            result = callback(result,array[i],i,array);
        }
    }
    return result;
}
_.foldR = _.reduceRight;