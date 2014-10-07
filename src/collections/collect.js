_.collect = function(arr,callback){
    var result = [];
    var len = arr.length;
    for(var i= 0;i<len;i++){
        result.push(callback(arr[i]))

    }
    return result;
}