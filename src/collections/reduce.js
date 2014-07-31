// previousValue, currentValue, index, array
_.reduce = function(array,callback){
    var result //= array[0];
    for(var i in array){
        if(!result){
            result = array[i];
        }else{
            result = callback(result,array[i],i,array);
        }
    }
    return result;
}
_.foldl = _.reduce;