_.keys = function(value){
    var re = [];
    for(var i in value){
        re.push(i)
    }
    return re;
}