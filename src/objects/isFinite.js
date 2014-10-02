_.isFinite = function(value){
    var valueStr = value.toString().trim();
    return /^[(\-)|(\+)]*\d+$/.test(valueStr)
}