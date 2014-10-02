_.isEqual = function(o1,o2,callback){
    if(callback && typeof callback === 'function'){
        return callback(o1,o2);
    }
    if(typeof o1 !== 'object'){
        return o1 === o2;
    }
    for(var i in o1){
        if(o1[i] !== o2[i]){
            // 这里直接删除有些问题
            delete o1[i];
            delete o2[i];
            return false;
           // break;
        }
    }
    for(var i in  o2){
        if(o1[i] !== o2[i]){
            return false;
        }
    }
    return true;

}