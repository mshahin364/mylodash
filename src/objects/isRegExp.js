_.isRegExp = function(value){
    return toString.call(value) === '[object RegExp]';
}