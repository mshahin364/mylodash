_.shuffle = function(collections){
    var ret = [];
    var len = collections.length;
    var index = -1;
    for(var i in collections){
        index++;

        var key = Math.floor(Math.random() * index);
        ret[index] = ret[key];
        ret[key] = collections[i];
    }
}