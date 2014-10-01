_.isBoolean = function(value){
    return value && toString.call(value) === '[object Boolean]';
}