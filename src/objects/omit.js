_.omit = function(value,arg){
    var re = {};

    for(var i in value){
        var isAdd = false;
        if( toString.call(arg) === '[object Array]' ){
            isAdd = arg.indexOf(i) === -1;

        }else if(typeof arg === 'string'){

                isAdd = i !== arg;

        }else if(typeof arg === 'function'){
            isAdd = !arg(value[i]);
        }
        if(isAdd){
            re[i] = value[i];
        }

    }
    return re;
}