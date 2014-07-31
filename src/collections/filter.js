_.filter = function(collection,arg){
    var result = [];
    for(var i= 0,len=collection.length;i<len;i++){
        if(Base.isMatch(collection[i],arg)){
            result.push(collection[i]);

        }
    }
    return result;
}