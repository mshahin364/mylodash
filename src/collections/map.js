_.map=function(collections,arg){
    var ret = [];
    for (var i in collections) {

        ret.push(Base.getValue(collections[i], arg));
    }
    return ret;
}
