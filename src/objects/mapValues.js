_.mapValues = function(value,arg){
    var re = {};

    for(var i in value){
        Base.getValue(value[i],arg)
        re[i] = arg(value[i]);
    }
    return re;

}