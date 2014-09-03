function checkItem(item,arg){

    if(typeof arg === 'string'){
        return item.hasOwnProperty(arg) && !!item[arg]
    }else if(typeof arg === 'function'){
        // console.log(item);
        return !!arg(item);
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
_.last = function(array,arg){
    var re;
    var len = array.length;
    arg = arg || 0;
    if(typeof arg === 'number'){
        return array.slice(len-1-arg);
    }

    for(var i = len-1;i>=0;i--){
        if(checkItem(array[i],arg)){
            return [array[i]];
            break;
        }
    }
}