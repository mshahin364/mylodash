_.once = function(func){

    var has = 0;
    return function(){
        if(has){
            return;
        }
        func.apply(this,arguments);
        has = 1;
    }
}