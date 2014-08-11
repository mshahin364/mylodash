_.reject = function(collection,arg) {
    var ret = [];
    for(var i in collection){
        if(Base.isMatch(collection[i],arg)){
            ret.push(collection[i]);
        }
    }
    return ret;
}