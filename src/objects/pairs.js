_.pairs = function(value){
    var re = [];
    for(var i in value){
        re.push([i,value[i]]);
    }
    return re;
}