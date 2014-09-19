_.create = function(objBase,objProp){
    for(var i in objProp){
        objBase[i] = objProp[i];
    }
    return objBase;
}