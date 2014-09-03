_.intersection = function(){
    arg = arguments;
    var len = arg.length;
    var ret = arg[0];
    for(var i=1;i<len;i++){
        var tempRet = [];
        for(var j in ret){
            if( arg[i].indexOf( ret[j]) > -1 && tempRet.indexOf(ret[j]) === -1 ){
                tempRet.push(ret[j]);
            }
        }
        ret = tempRet;
    }

    return ret;
}
