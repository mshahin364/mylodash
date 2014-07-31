_.find = function(collection,arg){
    var result;
    for(var i= 0,len=collection.length;i<len;i++){
        if(Base.isMatch(collection[i],arg)){
            result = collection[i];
            break;

        }
    }
    return result;
}