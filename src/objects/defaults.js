_.defaults = function(objBase,objProp){
    for(var i in objProp){
        if( !objBase.hasOwnProperty(i) ){
            objBase[i] = objProp[i]
        }
    }
    return;
}