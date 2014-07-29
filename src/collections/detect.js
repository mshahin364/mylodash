_.detect = function(collection,arg){
    var len = collection.length;
    var result ;
    for(var i=0;i<len;i++){
        if(Base.isMatch(collection[i],arg)){
            result = collection[i];
            break;
        }
    }
    return result;
}