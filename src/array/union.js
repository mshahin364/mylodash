_.union = function(){
    var arg = Base.makeArray(arguments);
    var re = arg[0];
    for(var i = 1,len=arg.length;i<len;i++){
        var item = arg[i];
        for(var j = 0,itemLen =  item.length;j<itemLen;j++){
            if(re.indexOf(item[j]) === -1){
                re.push(item[j]);
            }
        }
    }
    return re;
}
