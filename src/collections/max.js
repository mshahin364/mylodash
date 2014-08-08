_.max = function(collections,arg){
    var maxItem;
    var maxValue;
    var currentValue;
    for(var i in collections){

       if(!maxItem) {
           maxItem = collections[i];
           continue;
       }
       maxValue = Base.getValue(maxItem,arg);
       currentValue = Base.getValue(collections[i],arg);
       if(currentValue > maxValue){
           maxItem = collections[i];
       }
    }
    return maxItem;

}