_.merge = function(oBase,oSource){
    for(var i in oSource){
        oBase[i] = oSource[i];
    }
    return oBase;
}