_.min = function(collections,arg){
    var minItem;
    var minValue;
    var currentValue;
    for(var i in collections){

        if(!minItem) {
            minItem = collections[i];
            continue;
        }
        minValue = Base.getValue(minItem,arg);
        currentValue = Base.getValue(collections[i],arg);
        if(currentValue < minValue){
            minItem = collections[i];
        }
    }
    return minItem;

}