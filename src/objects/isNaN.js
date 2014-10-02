_.isNaN = function(value){
    return typeof value === 'number' && isNaN(value);
}