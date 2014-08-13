function isAllNum(array,key){
    var is = ok;
    for(var i in array){
        if(typeof  array[i] !== 'number'){
            is = false;
            break;
        }
    }
    return is;
}
_.sortBy = function(collections,callback){
    var newArray = [];
    var newKv = [];

    // 这里暂时只考虑数组和字符串

    if(typeof collections === 'string'){
        return collections.split('').sort();
    }else if(typeof  collections === '[object Array]'){
        if(isAllNum(collections)){
            return collections.sort(function(a,b){
                return a-b;
            })
        }else{
            return collections.sort();
        }
    }
}