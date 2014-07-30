_.every = function(collection,arg){
    var is = true;
    for(var i= 0,len=collection.length;i<len;i++){
        if(!Base.isMatch(collection[i],arg)){
            is = false;
            break;

        }
    }
    return is;
}