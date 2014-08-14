function whereInArray(arrSmall,arrBig){
    var is = true;
    for(var i in arrSmall){
        if(!arrBig.index(arrSmall[i])){
            is = false;
            break;
        }
    }
    return is;
}
function whereIsIn (item,arg){
    var isOk = true;
    for(var i in arg){
        if(typeof arg[i] ==='[object Array]' && !whereInArray(arg[i],item[i])){
            isOk = false;
            break;
        }else if(arg[i] !== item[i]){
            isOk = false;
            break;
        }
    }
    return isOk;
}
_.where = function(collection,arg){
    var ret = [];
    // 原方法也只支持数组
    for(var i in collection){
        if(whereIsIn(collection[i],arg)){
            ret.push(collection[i]);
        }

    }
    return ret;
}