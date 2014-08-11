_.pluck = function(collections,property){
    var ret = [];
    for(var i in collections){
        ret.push(collections[i][property]);
    }
    return ret;
}