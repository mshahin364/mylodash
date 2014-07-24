_.some = function(arr,arg){
    var isOK = 0;
    if(typeof arg === 'function' && typeof arg(1)==='boolean'){
        isOK = arr.filter(function(v){
            return v !== undefined || v !== null;
        }).length;
    }

    if(typeof arg === 'string'){
        isOK =  arr.filter(function(v){
            return v.hasOwnProperty(arg);
        }).length;
    }
    if(typeof arg === 'object'){
        for(var i= 0,len=arr.length;i<len;i++){
            var isTrue = 1;
            for(var key in arg){
                if(arg[key] !== arr[i][key]){
                    isTrue = 0;
                    break;
                }
            }
            if(isTrue){
                isOK = 1;
                break;
            }
        }
    }
    return !!isOK;

}