_.sample = function(collection,size){
    var ret = [];
    var len = collection.length;
    if(!size)size = 1;
    size = (+size) >len? len: (+size);
    var cloneCollection = Base.makeArray(collection);
    for(var i = size-1;i>=0;i--){
        var index = Math.floor(Math.random()* (len));
        ret.push(cloneCollection[index]);
        cloneCollection.splice(index,1);
        len--;
    }
    
    return ret;
}