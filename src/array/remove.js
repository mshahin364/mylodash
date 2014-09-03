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
_.remove = function(array,arg){
    var re;
    var len = array.length;

    for(var i = len-1;i>=0;i--){
        if(checkItem(array[i],arg)){
            re = re.concat(
                array.splice(i)
            )
        }
    }
    return re;
}