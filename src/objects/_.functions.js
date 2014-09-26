_.functions = function(object){
    var re = [];
    for(var i in object){
        if(typeof object[i] === 'function'){
            re.push(i);
        }
    }
    return re;
}