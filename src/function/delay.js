_.delay = function(func,wait){
    var len = arguments.length;
    var arg = [];
    for(var i=2;i<len;i++){
        arg.push(arguments[i]);
    }
    setTimeout(function(){
        func.apply(this,arg)
    },wait);
}