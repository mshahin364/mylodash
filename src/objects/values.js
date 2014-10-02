_.values = function(value){
    var re = [];
    for(var i in value){
        re.push(value[i]);
    }
    return re;
}