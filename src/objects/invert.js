_.invert = function(object){
    var re = {};
    var key;
    for(var i in object){
        key = object[i].toString();
        re[key] = i;
    }
    return re;
}