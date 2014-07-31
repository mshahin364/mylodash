_.findLast = function(collection,arg){
    var result;
    for(var len=collection.length,i= len-1;i>=0;i--){
        if(Base.isMatch(collection[i],arg)){
            result = collection[i];
            break;

        }
    }
    return result;
}