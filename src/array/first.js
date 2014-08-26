_.first = function(array,arg){
    var ret = [];
    if(!arg){
        ret = arg[0];
    }else if(typeof arg === 'number'){
        ret = array.slice(0,arg);
    }else if(typeof arg === 'function'){


        for(var i in array){
            if(!arg(array[i])){
                break;
            }
            ret.push(array[i]);
        }
    }else if(typeof arg === 'string'){


        for(var i in array){
            if(!array[i][arg]){
                break;
            }
            ret.push(array[i]);
        }
    }
    return ret;


}

