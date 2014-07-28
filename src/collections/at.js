var _ = {};

function easyMakeArray(value){
    var ret = [];
    if(toString.call(value) === '[object Array]'){
        return value //ret = [];
    }
    for(var i= 0,len=value.length;i<len;i++){
        ret[i] = value[i];
    }
    return ret;
}

_.at = function(arr){
    var args = easyMakeArray(arguments).slice(1);
    var result = [];
    for(var i= 0,len=args.length;i<len;i++){
        if(toString.call(args[i]) !== '[object Array]' ){
            result.push(arr[args[i]]);
        }else{
            // result.push()
            var tempArr = args[i];
            tempArr.unshift(arr);
            result = result.concat(arguments.callee.apply(this,tempArr));
        }
    }
    return result;
}

// _.at(['a,b','c',1,2,3,4,5],1,4,[5,1,2,[5,2,0]]);