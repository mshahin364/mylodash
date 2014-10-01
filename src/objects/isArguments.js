_.isArguments = function(value){
    return value && typeof value == 'object' && typeof value.length == 'number' &&
        toString.call(value) == '[object Object]' || false;
}