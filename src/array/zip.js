_.zip = function(){
    var arg = Base.makeArray(arguments);
    var re = [];
    var baseLen = arg[0].length;
    var loopLen = arg.length;
    for(var i= 0;i<baseLen;i++){
        re[i] = [];
        for(var j=0;j<loopLen;j++){
            re[i].push(arg[j][i]);
        }
    }
    return re;
}