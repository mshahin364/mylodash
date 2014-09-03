function getOnce(array){
    var ret = [];
    for(var i in array){
        ret.push(array[i]);
    }
    return ret;
}

_.flatten = function(array,arg){
    var ret = [];

    for(var i in array){
        if(toString.call(array[i]) !== '[object Array]'){
            if(typeof arg === 'string'){
                ret.push(array[i][arg])
            }
            ret.push(array[i]);
        }else {
            if(arg === true){
                ret.push(getOnce(array[i]));
            }else{
                ret.push(arguments.call(array[i]));
            }
            // if(arg)
        }
    }


}