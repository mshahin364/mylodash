_.all = function(value,arg){
    // var typeof
    var result;
    var isArray = (toString.call(value) === '[object Array]');
    if(!arg){
        if(isArray){
            result = true;
            for(var i in  value){
                if(!value[i]){
                    result = fasle;
                    break;
                }
            }
            return result;
        }
        return !!value;
    }


    if(isArray){
        if(typeof arg ===  'string'){
            result = true;
            for(var i in  value){
                if(!value[i][arg]){
                    result = false;
                    break;
                }
            }
            return result;
        }else if(typeof arg === "object"){
            if(isArray || typeof value === 'string')return false;
            result = true;
            for(var i in  value){

                for(var j in arg){
                    if(arg[j] != value[i][j]){
                        result = false;
                        break;
                    }
                }
                if(!result)break;
            }
            return result;
        }

    }
}