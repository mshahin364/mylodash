_.toArray = function(collections){
    var ret = [];
    for(var i in collections){
        ret.push(collections[i]);
    }
    return ret;
}