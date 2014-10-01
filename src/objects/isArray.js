_.isArray = function(value){
    return value && toString.call(value) === '[object Array]';
}