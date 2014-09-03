_.range = function(from,to,rate){

    if(typeof to === 'undefined'){
        to = from;
        from = 0;
        rate = 1;
    }else if(typeof rate === 'undefined'){
        rate = 1;
    }

    var re = [];
    for(var i=from;i<to;i+=rate){
        re.push(i);
    }
    return re;
}
