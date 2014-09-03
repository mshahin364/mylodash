function uniqGetItem(item,arg){
    if(!arg){
        return item;
    }else if(typeof arg === 'string'){
        return item[arg]
    }else if(typeof arg === 'function'){
        // console.log(item);
        return arg(item);
    }else if(typeof arg === 'object'){
        var has = true;
        for(var i in arg){
            if(arg[i] !== item[i]){
                has = false;
                break;
            }
        }
        return has;
    }
}
_.uniq = function(array,arg){
    var len = array.length;
    var re = [];
    var arrVal = [];
    for(var i=0;i<len;i++){
        var item = array[i];
        var val = uniqGetItem( item,arg  )  ;
        if(arrVal.indexOf(val)  === -1){
            arrVal.push(val);
            re.push(item);
        }
    }
    return re;
}