_.findKey = function(obj,arg){
    var re ;
    for(var i in obj){
       if( Base.isMatch(obj[i],arg)) {
           re = i;
           break;
       }
    }
    return re;
}