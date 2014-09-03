_.pull = function(array){
    var arg = Base.makeArray(arguments).slice(1);
    var re = [];
    for(var i=0,len=array.length;i<len;i++){
        if(arg.indexOf(array[i]) === -1){
            re.push(array[i]);
        }
    }
    return re;
}