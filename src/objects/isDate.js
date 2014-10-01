_.isDate = function(value){
    return value && typeof value === 'object' && toString.call(value) === '[object Date]';
}