
var Base = {
    isMatch:function(item,arg){
        var result = true;
        if(!arg){
            result = item;
        }else if(typeof arg === 'function'){
            result = arg(item);
        }else if(typeof arg === 'object'){
            var isOk = 1;
            for(var i in arg){
                if(item[i] !== arg[i]){
                    isOk = 0;
                    break;
                }
            }
            result = isOk;
        }else if(typeof arg === 'string'){
           // if(typeof item === 'object'){
           result = item.hasOwnProperty(arg) && !!item[arg];
           // }else if(typeof item === 'string'){
           //     result = item.indexOf(arg) !== -1;
           // }

        }
        return !!result;
    },
    getValue:function(item,arg){
        if(!arg){
            return item;
        }else if(typeof arg === 'string'){
            return item[arg];
        }else if(typeof arg === 'function'){
            return arg(item);
        }
    }
}
